!function(){"use strict";var e,t,a,d=window.location,p=window.document,v=p.getElementById("plausible"),f=v.getAttribute("data-api")||(e=v.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(d.hostname)||"file:"===d.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var a=v&&v.getAttribute("data-include"),n=v&&v.getAttribute("data-exclude");if("pageview"===e){var i=!a||a&&a.split(",").some(s),r=n&&n.split(",").some(s);if(!i||r)return g("exclusion rule")}var o={};o.n=e,o.u=d.href,o.d=v.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=v.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),u=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),a=v.getAttribute(e);u[t]=u[t]||a}),o.p=u,o.h=1;var c=new XMLHttpRequest;c.open("POST",f,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function s(e){return d.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var i=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<i.length;o++)n.apply(this,i[o]);function l(){r=d.pathname,n("pageview")}function u(e){for(var t,a,n,i="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(i||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),c(o,l))}function c(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}window.addEventListener("hashchange",l),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){r||"visible"!==p.visibilityState||l()}):l(),p.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),c(e.target,n))}),p.addEventListener("click",u),p.addEventListener("auxclick",u)}();