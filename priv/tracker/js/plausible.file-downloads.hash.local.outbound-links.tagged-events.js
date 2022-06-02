!function(){"use strict";var c=window.location,n=window.document,r=n.currentScript,o=r.getAttribute("data-api")||new URL(r.src).origin+"/api/event";function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=c.href,a.d=r.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),a.h=1;var i=new XMLHttpRequest;i.open("POST",o,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback()}}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,i=0;i<t.length;i++)e.apply(this,t[i]);function l(){a=c.pathname,e("pageview")}function d(e){for(var t,a,i,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(n||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}window.addEventListener("hashchange",l),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){a||"visible"!==n.visibilityState||l()}):l(),n.addEventListener("click",d),n.addEventListener("auxclick",d);var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],s=r.getAttribute("file-types"),u=r.getAttribute("add-file-types"),f=s&&s.split(",")||u&&u.split(",").concat(p)||p;function v(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var n,r,o,l,c=i&&i.href&&i.href.split("?")[0];function d(){!o||r||l||(l=!0,window.location=i.href)}c&&(n=c.split(".").pop(),f.some(function(e){return e===n}))&&(t||a)&&(r=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!r&&(e.preventDefault(),setTimeout(d,1e3)),plausible("File Download",{props:{url:c},callback:d}))}function g(e){for(var t,a,i,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),w(o,l))}function w(e,t){var a=e.getAttribute("data-event-name"),i=function(e){for(var t={},a=0;a<e.length;a++){var i,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),t[i]=e[a].value)}return t}(e.attributes);e.href&&(i.url=e.href),plausible(a,{props:i,callback:t})}n.addEventListener("click",v),n.addEventListener("auxclick",v),n.addEventListener("submit",function(e){var t,a;function i(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(i,1e3)),w(e.target,i))}),n.addEventListener("click",g),n.addEventListener("auxclick",g)}();