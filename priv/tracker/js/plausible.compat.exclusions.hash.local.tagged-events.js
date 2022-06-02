!function(){"use strict";var e,t,a,d=window.location,c=window.document,s=c.getElementById("plausible"),p=s.getAttribute("data-api")||(e=s.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function v(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var a=s&&s.getAttribute("data-include"),n=s&&s.getAttribute("data-exclude");if("pageview"===e){var i=!a||a&&a.split(",").some(u),r=n&&n.split(",").some(u);if(!i||r)return v("exclusion rule")}var o={};o.n=e,o.u=d.href,o.d=s.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",p,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function u(e){return d.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var i=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<i.length;o++)n.apply(this,i[o]);function l(){r=d.pathname,n("pageview")}function u(e){for(var t,a,n,i="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(i||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),g(o,l))}function g(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}window.addEventListener("hashchange",l),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){r||"visible"!==c.visibilityState||l()}):l(),c.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),g(e.target,n))}),c.addEventListener("click",u),c.addEventListener("auxclick",u)}();