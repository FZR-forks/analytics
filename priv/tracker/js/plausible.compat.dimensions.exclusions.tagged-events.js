!function(){"use strict";var t,e,a,p=window.location,d=window.document,v=d.getElementById("plausible"),f=v.getAttribute("data-api")||(t=v.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function g(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var a=v&&v.getAttribute("data-include"),n=v&&v.getAttribute("data-exclude");if("pageview"===t){var i=!a||a&&a.split(",").some(c),r=n&&n.split(",").some(c);if(!i||r)return g("exclusion rule")}var o={};o.n=t,o.u=p.href,o.d=v.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=v.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),u=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),a=v.getAttribute(t);u[e]=u[e]||a}),o.p=u;var s=new XMLHttpRequest;s.open("POST",f,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(o)),s.onreadystatechange=function(){4===s.readyState&&e&&e.callback&&e.callback()}}function c(t){return p.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var i=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<i.length;o++)n.apply(this,i[o]);function l(){r!==p.pathname&&(r=p.pathname,n("pageview"))}var u,s=window.history;function c(t){for(var e,a,n,i="auxclick"===t.type&&2===t.which,r="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||e||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(i||r)&&(e=t.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&r,n=!1,a&&!e&&(t.preventDefault(),setTimeout(l,1e3)),w(o,l))}function w(t,e){var a=t.getAttribute("data-event-name"),n=function(t){for(var e={},a=0;a<t.length;a++){var n,i=t[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),e[n]=t[a].value)}return e}(t.attributes);t.href&&(n.url=t.href),plausible(a,{props:n,callback:e})}s.pushState&&(u=s.pushState,s.pushState=function(){u.apply(this,arguments),l()},window.addEventListener("popstate",l)),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||l()}):l(),d.addEventListener("submit",function(t){var e,a;function n(){e||a||(a=!0,t.target.submit())}t.target.getAttribute("data-event-name")&&(e=t.defaultPrevented,a=!1,e||(t.preventDefault(),setTimeout(n,1e3)),w(t.target,n))}),d.addEventListener("click",c),d.addEventListener("auxclick",c)}();