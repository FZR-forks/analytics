!function(){"use strict";var t,e,i,u=window.location,d=window.document,f=d.getElementById("plausible"),h=f.getAttribute("data-api")||(t=f.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function g(t){console.warn("Ignoring Event: "+t)}function a(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var i=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if("pageview"===t){var r=!i||i&&i.split(",").some(c),n=a&&a.split(",").some(c);if(!r||n)return g("exclusion rule")}var o={};o.n=t,o.u=u.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),p=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),i=f.getAttribute(t);p[e]=p[e]||i}),o.p=p;var s=new XMLHttpRequest;s.open("POST",h,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(o)),s.onreadystatechange=function(){4===s.readyState&&e&&e.callback&&e.callback()}}function c(t){var e=u.pathname;return console.log(e),e.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function r(t){for(var e=t.target,i="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==u.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){u.href=e.href},150),t.preventDefault()))}d.addEventListener("click",r),d.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],o=f.getAttribute("file-types"),l=f.getAttribute("add-file-types"),p=o&&o.split(",")||l&&l.split(",").concat(n)||n;function s(t){for(var e=t.target,i="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var r,n=e&&e.href&&e.href.split("?")[0];n&&(r=n.split(".").pop(),p.some(function(t){return t===r}))&&((i||a)&&plausible("File Download",{props:{url:n}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){u.href=e.href},150),t.preventDefault()))}d.addEventListener("click",s),d.addEventListener("auxclick",s);var c=window.plausible&&window.plausible.q||[];window.plausible=a;for(var v,w=0;w<c.length;w++)a.apply(this,c[w]);function m(){v!==u.pathname&&(v=u.pathname,a("pageview"))}var y,b=window.history;b.pushState&&(y=b.pushState,b.pushState=function(){y.apply(this,arguments),m()},window.addEventListener("popstate",m)),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){v||"visible"!==d.visibilityState||m()}):m()}();