!function(){"use strict";var d=window.location,p=window.document,f=p.currentScript,v=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var a=f&&f.getAttribute("data-include"),n=f&&f.getAttribute("data-exclude");if("pageview"===e){var i=!a||a&&a.split(",").some(s),r=n&&n.split(",").some(s);if(!i||r)return g("exclusion rule")}var o={};o.n=e,o.u=d.href,o.d=f.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var u=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};u.forEach(function(e){var t=e.replace("event-",""),a=f.getAttribute(e);c[t]=c[t]||a}),o.p=c;var l=new XMLHttpRequest;l.open("POST",v,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function s(e){return d.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<t.length;n++)e.apply(this,t[n]);function i(){a!==d.pathname&&(a=d.pathname,e("pageview"))}var r,o=window.history;function u(e){for(var t,a,n,i="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function u(){!a||t||n||(n=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==d.host&&(i||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,n=!1,a&&!t&&(e.preventDefault(),setTimeout(u,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:u}))}function c(e){for(var t,a,n,i="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function u(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(i||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,n=!1,a&&!t&&(e.preventDefault(),setTimeout(u,1e3)),l(o,u))}function l(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}o.pushState&&(r=o.pushState,o.pushState=function(){r.apply(this,arguments),i()},window.addEventListener("popstate",i)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){a||"visible"!==p.visibilityState||i()}):i(),p.addEventListener("click",u),p.addEventListener("auxclick",u),p.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),l(e.target,n))}),p.addEventListener("click",c),p.addEventListener("auxclick",c)}();