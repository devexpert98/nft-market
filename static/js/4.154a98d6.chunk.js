(this["webpackJsonp@fluuuid/nft-marketplace"]=this["webpackJsonp@fluuuid/nft-marketplace"]||[]).push([[4],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return y})),n.d(t,"getFCP",(function(){return h})),n.d(t,"getFID",(function(){return k})),n.d(t,"getLCP",(function(){return P})),n.d(t,"getTTFB",(function(){return D}));var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},f=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},m=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},d=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},p=function(){f((function(e){var t=e.timeStamp;d=t}),!0)},l=function(){return d<0&&(d=v(),p(),s((function(){setTimeout((function(){d=v(),p()}),0)}))),{get firstHiddenTime(){return d}}},h=function(e,t){var n,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},o=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(n=m(e,r,t),o&&a(o),s((function(i){r=u("FCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},g=!1,T=-1,y=function(e,t){g||(h((function(e){T=e.value})),g=!0);var n,i=function(t){T>-1&&e(t)},r=u("CLS",0),a=0,o=[],d=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,n())}},v=c("layout-shift",d);v&&(n=m(i,r,t),f((function(){v.takeRecords().map(d),n(!0)})),s((function(){a=0,T=-1,r=u("CLS",0),n=m(i,r,t)})))},E={passive:!0,capture:!0},S=new Date,L=function(e,t){i||(i=t,r=e,a=new Date,F(removeEventListener),w())},w=function(){if(r>=0&&r<a-S){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},b=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",n,E),addEventListener("pointercancel",i,E)}(t,e):L(t,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,b,E)}))},k=function(e,t){var n,a=l(),d=u("FID"),v=function(e){e.startTime<a.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),n(!0))},p=c("first-input",v);n=m(e,d,t),p&&f((function(){p.takeRecords().map(v),p.disconnect()}),!0),p&&s((function(){var a;d=u("FID"),n=m(e,d,t),o=[],r=-1,i=null,F(addEventListener),a=v,o.push(a),w()}))},C=new Set,P=function(e,t){var n,i=l(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e)),n()},o=c("largest-contentful-paint",a);if(o){n=m(e,r,t);var d=function(){C.has(r.id)||(o.takeRecords().map(a),o.disconnect(),C.add(r.id),n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,d,{once:!0,capture:!0})})),f(d,!0),s((function(i){r=u("LCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,C.add(r.id),n(!0)}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}}]);
//# sourceMappingURL=4.154a98d6.chunk.js.map