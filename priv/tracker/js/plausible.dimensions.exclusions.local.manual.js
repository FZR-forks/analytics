!function(){"use strict";var s=window.location,g=window.document,d=g.currentScript,w=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var n=d&&d.getAttribute("data-include"),r=d&&d.getAttribute("data-exclude");if("pageview"===e){var a=!n||n&&n.split(",").some(o),i=r&&r.split(",").some(o);if(!a||i)return f("exclusion rule")}function o(e){var t=s.pathname;return console.log(t),t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=t&&t.u?t.u:s.href,l.d=d.getAttribute("data-domain"),l.r=g.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props);var u=d.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=l.p||{};u.forEach(function(e){var t=e.replace("event-",""),n=d.getAttribute(e);c[t]=c[t]||n}),l.p=c;var p=new XMLHttpRequest;p.open("POST",w,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(l)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n=0;n<t.length;n++)e.apply(this,t[n])}();