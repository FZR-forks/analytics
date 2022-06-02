!function(){"use strict";var o=window.location,l=window.document,p=l.currentScript,c=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function s(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var a={};a.n=t,a.u=o.href,a.d=p.getAttribute("data-domain"),a.r=l.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var n=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),i=a.p||{};n.forEach(function(t){var e=t.replace("event-",""),a=p.getAttribute(t);i[e]=i[e]||a}),a.p=i;var r=new XMLHttpRequest;r.open("POST",c,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a,n=0;n<e.length;n++)t.apply(this,e[n]);function i(){a!==o.pathname&&(a=o.pathname,t("pageview"))}var r,u=window.history;u.pushState&&(r=u.pushState,u.pushState=function(){r.apply(this,arguments),i()},window.addEventListener("popstate",i)),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){a||"visible"!==l.visibilityState||i()}):i();var d=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],f=p.getAttribute("file-types"),v=p.getAttribute("add-file-types"),w=f&&f.split(",")||v&&v.split(",").concat(d)||d;function g(t){for(var e="auxclick"===t.type&&2===t.which,a="click"===t.type,n=t.target;n&&(void 0===n.tagName||"a"!==n.tagName.toLowerCase()||!n.href);)n=n.parentNode;var i,r,o,l,p=n&&n.href&&n.href.split("?")[0];function c(){!o||r||l||(l=!0,window.location=n.href)}p&&(i=p.split(".").pop(),w.some(function(t){return t===i}))&&(e||a)&&(r=t.defaultPrevented,o=(!n.target||n.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&a,l=!1,o&&!r&&(t.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:p},callback:c}))}function h(t){for(var e,a,n,i="auxclick"===t.type&&2===t.which,r="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||e||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(i||r)&&(e=t.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&r,n=!1,a&&!e&&(t.preventDefault(),setTimeout(l,1e3)),m(o,l))}function m(t,e){var a=t.getAttribute("data-event-name"),n=function(t){for(var e={},a=0;a<t.length;a++){var n,i=t[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),e[n]=t[a].value)}return e}(t.attributes);t.href&&(n.url=t.href),plausible(a,{props:n,callback:e})}l.addEventListener("click",g),l.addEventListener("auxclick",g),l.addEventListener("submit",function(t){var e,a;function n(){e||a||(a=!0,t.target.submit())}t.target.getAttribute("data-event-name")&&(e=t.defaultPrevented,a=!1,e||(t.preventDefault(),setTimeout(n,1e3)),m(t.target,n))}),l.addEventListener("click",h),l.addEventListener("auxclick",h)}();