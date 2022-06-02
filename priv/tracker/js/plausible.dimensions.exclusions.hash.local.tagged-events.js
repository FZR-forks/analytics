!function(){"use strict";var s=window.location,p=window.document,v=p.currentScript,g=v.getAttribute("data-api")||new URL(v.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=v&&v.getAttribute("data-include"),n=v&&v.getAttribute("data-exclude");if("pageview"===e){var i=!a||a&&a.split(",").some(d),r=n&&n.split(",").some(d);if(!i||r)return f("exclusion rule")}var o={};o.n=e,o.u=s.href,o.d=v.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var u=v.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),l=o.p||{};u.forEach(function(e){var t=e.replace("event-",""),a=v.getAttribute(e);l[t]=l[t]||a}),o.p=l,o.h=1;var c=new XMLHttpRequest;c.open("POST",g,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function d(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<t.length;n++)e.apply(this,t[n]);function i(){a=s.pathname,e("pageview")}function r(e){for(var t,a,n,i="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function u(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(i||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,n=!1,a&&!t&&(e.preventDefault(),setTimeout(u,1e3)),l(o,u))}function l(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}window.addEventListener("hashchange",i),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){a||"visible"!==p.visibilityState||i()}):i(),p.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),l(e.target,n))}),p.addEventListener("click",r),p.addEventListener("auxclick",r)}();