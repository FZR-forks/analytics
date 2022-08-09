defmodule Plausible.Ingestion.UserRegistry do
  def child_spec do
    Registry.child_spec(keys: :unique, name: __MODULE__, partitions: System.schedulers_online())
  end
end

defmodule Plausible.Ingestion.DynamicSupervisor do
  use DynamicSupervisor

  def start_link(_init_arg) do
    DynamicSupervisor.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  @impl true
  def init(:ok) do
    DynamicSupervisor.init(strategy: :one_for_one)
  end

  def find_or_spawn(remote_ip) do
    case Registry.lookup(Plausible.Ingestion.UserRegistry, remote_ip) do
      [{pid, _}] -> pid
      [] -> spawn_process(remote_ip)
    end
  end

  defp spawn_process(remote_ip) do
    child_spec = %{
      id: Plausible.Ingestion.User,
      start: {Plausible.Ingestion.User, :start_link, [remote_ip]},
      restart: :transient
    }

    case DynamicSupervisor.start_child(__MODULE__, child_spec) do
      {:ok, pid} -> pid
      {:error, {:already_started, pid}} -> pid
    end
  end
end
