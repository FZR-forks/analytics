!function(){"use strict";var e,t,i,c=window.location,d=window.document,p=d.getElementById("plausible"),u=p.getAttribute("data-api")||(e=p.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function w(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(e){}var i=p&&p.getAttribute("data-include"),n=p&&p.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(s),r=n&&n.split(",").some(s);if(!a||r)return w("exclusion rule")}var o={};o.n=e,o.u=c.href,o.d=p.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",u,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function s(e){var t=c.pathname;return t+=c.hash,console.log(t),t.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<a.length;o++)n.apply(this,a[o]);function l(){r=c.pathname,n("pageview")}window.addEventListener("hashchange",l),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||l()}):l()}();