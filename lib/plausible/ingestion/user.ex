defmodule Plausible.Ingestion.User do
  @moduledoc """
  The User actor is a short-lived process spawned for each incoming event IP. It caches the parsed
  user agent and geolocation useful for repeated events within a timeframe. The process self
  destructs after not receiving events for `@grace_period` ms.
  """

  require Logger
  use GenServer

  def send_event(%Plausible.Ingestion.Request{} = request) do
    # TODO: Validate request.remote_ip is somewhat valid to avoid unnecessary Registry lookups
    request.remote_ip
    |> Plausible.Ingestion.DynamicSupervisor.find_or_spawn()
    |> GenServer.cast({:send_event, request})
  end

  defmodule State do
    defstruct [:grace_period_timer, :remote_ip, :user_agent, :location_details]

    @type t() :: %__MODULE__{
            grace_period_timer: pid(),
            remote_ip: String.t(),
            user_agent: Plausible.Ingestion.user_agent(),
            location_details: Plausible.Ingestion.location_details() | nil
          }
  end

  def start_link(remote_ip) do
    process_name = {:via, Registry, {Plausible.Ingestion.UserRegistry, remote_ip}}
    GenServer.start_link(__MODULE__, remote_ip, name: process_name)
  end

  @impl true
  def init(remote_ip) do
    Logger.debug("Ingestion: Starting new process for IP #{remote_ip}")

    state = %State{remote_ip: remote_ip} |> renew_grace_period()
    {:ok, state}
  end

  @impl true
  def handle_cast({:send_event, %Plausible.Ingestion.Request{} = request}, %State{} = state) do
    Logger.debug("Ingestion: Processing new event for IP #{state.remote_ip}")

    # NOTE: Should we queue requests to send mini-batches to the buffer? That would reduce the
    # main buffers mailboxes. Something to think about.
    case Plausible.Ingestion.add_to_buffer(request, state.user_agent, state.location_details) do
      {:ok, {ua, location_details}} ->
        %State{state | user_agent: ua, location_details: location_details}
        |> renew_grace_period()
        |> then(&{:noreply, &1})

      any ->
        Logger.error("Ingestion: Failed to process event. Reason: #{inspect(any)}")
        {:noreply, state}
    end
  end

  @impl true
  def handle_info({:grace_period_expired, timer}, %State{} = state) do
    if state.grace_period_timer == timer do
      Logger.debug("Ingestion: Self destructing #{state.remote_ip} due to inactivity")
      {:stop, :normal, state}
    else
      {:noreply, state}
    end
  end

  # NOTE: A second timeout could be added to block annoying callers. This timeout would not reset
  # when receiving events. For example a same IP sending events for hours straight could be added
  # to a temporary blocklist.
  #
  # TODO: Change @grace_period to reasonable timeout
  @grace_period :timer.minutes(1)
  defp renew_grace_period(%State{} = state) do
    timer_ref = make_ref()
    Process.send_after(self(), {:grace_period_expired, timer_ref}, @grace_period)
    %State{state | grace_period_timer: timer_ref}
  end
end
