(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(15),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"body {\n  text-transform: capitalize;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,0BAA0B;AAC5B",sourcesContent:["body {\n  text-transform: capitalize;\n}"],sourceRoot:""}]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},15:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,a=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[1],i=a[3];if(!i)return o;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([u]).join("\n")}return[o].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:d,updater:a(f,r),references:1}),i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),u=0;u<o.length;u++){var l=n(o[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=function(e){e.append($("<div/>").addClass("banner").append($("<img>").attr({src:"https://cdn.tasteatlas.com/images/dishes/1d0ca43e5dbe48e9b1b68121326fb02f.jpg",alt:"Freshly made whole burek"}))).append($("<div/>").addClass("description").append("Burek, delicious flaky multilayered pastry filled with meat, cheese or vegetables, is THE quintessential street food enjoyed across all Balkan countries.</br>The Burek Corner is the first establishment in Barcelona to bring you the Bosnian-style rolled burek. The burek pies are made daily on-site using locally sourced ingredients. We offer a variety of different flavours for all tastes!"))};var t=n(379),r=n.n(t),a=n(795),o=n.n(a),i=n(569),c=n.n(i),s=n(565),u=n.n(s),l=n(216),d=n.n(l),p=n(589),f=n.n(p),m=n(426),h={};function v(){$("main").html("")}h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,$("#content").append($("<header/>").append($("<h1/>").append("Burek Corner")),$("<nav/>").append($("<ul/>").append($("<li/>").append("home").attr("id","home"),$("<li/>").append("menu").attr("id","menu"),$("<li/>").append("contact").attr("id","contact"))),$("<main/>")),e($("main")),$("#home").click((function(){v(),e($("main"))})),$("#menu").click((function(){v(),$("main").append($("<header/>").append($("<h2/>").append("menu")))})),$("#contact").click((function(){v(),$("main").append($("<div/>").addClass("contact").append($("<h2/>").append("contact")))}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RydWN0dXJlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiY29uc3QgYnVpbGRTdHJ1Y3R1cmUgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgJCgnPGhlYWRlci8+JylcbiAgICAgIC5hcHBlbmQoJCgnPGgxLz4nKVxuICAgICAgICAuYXBwZW5kKFwiQnVyZWsgQ29ybmVyXCIpXG4gICAgICApLFxuICAgICQoJzxuYXYvPicpXG4gICAgICAuYXBwZW5kKCQoJzx1bC8+JylcbiAgICAgICAgLmFwcGVuZChcbiAgICAgICAgICAkKCc8bGkvPicpXG4gICAgICAgICAgICAuYXBwZW5kKCdob21lJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdob21lJyksXG4gICAgICAgICAgJCgnPGxpLz4nKVxuICAgICAgICAgICAgLmFwcGVuZCgnbWVudScpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnbWVudScpLFxuICAgICAgICAgICQoJzxsaS8+JylcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NvbnRhY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2NvbnRhY3QnKSxcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAkKCc8bWFpbi8+JylcbiAgKVxufVxuXG5leHBvcnQgeyBidWlsZFN0cnVjdHVyZSB9XG4iLCJjb25zdCBnZW5lcmF0ZUhvbWUgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgJCgnPGRpdi8+JylcbiAgICAgICAgLmFkZENsYXNzKFwiYmFubmVyXCIpXG4gICAgICAgIC5hcHBlbmQoJChcIjxpbWc+XCIpXG4gICAgICAgICAgLmF0dHIoe1wic3JjXCI6XCJodHRwczovL2Nkbi50YXN0ZWF0bGFzLmNvbS9pbWFnZXMvZGlzaGVzLzFkMGNhNDNlNWRiZTQ4ZTliMWI2ODEyMTMyNmZiMDJmLmpwZ1wiLCBcImFsdFwiOlwiRnJlc2hseSBtYWRlIHdob2xlIGJ1cmVrXCJ9KVxuICAgICAgICApKVxuICAgICAgLmFwcGVuZCgkKCc8ZGl2Lz4nKVxuICAgICAgICAuYWRkQ2xhc3MoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAuYXBwZW5kKFwiQnVyZWssIGRlbGljaW91cyBmbGFreSBtdWx0aWxheWVyZWQgcGFzdHJ5IGZpbGxlZCB3aXRoIG1lYXQsIGNoZWVzZSBvciB2ZWdldGFibGVzLCBpcyBUSEUgcXVpbnRlc3NlbnRpYWwgc3RyZWV0IGZvb2QgZW5qb3llZCBhY3Jvc3MgYWxsIEJhbGthbiBjb3VudHJpZXMuPC9icj5UaGUgQnVyZWsgQ29ybmVyIGlzIHRoZSBmaXJzdCBlc3RhYmxpc2htZW50IGluIEJhcmNlbG9uYSB0byBicmluZyB5b3UgdGhlIEJvc25pYW4tc3R5bGUgcm9sbGVkIGJ1cmVrLiBUaGUgYnVyZWsgcGllcyBhcmUgbWFkZSBkYWlseSBvbi1zaXRlIHVzaW5nIGxvY2FsbHkgc291cmNlZCBpbmdyZWRpZW50cy4gV2Ugb2ZmZXIgYSB2YXJpZXR5IG9mIGRpZmZlcmVudCBmbGF2b3VycyBmb3IgYWxsIHRhc3RlcyFcIilcbiAgICAgIClcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVIb21lIH0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBidWlsZFN0cnVjdHVyZSB9IGZyb20gJy4vc3RydWN0dXJlLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlSG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250YWN0IH0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBDcmVhdGUgaW5pdGlhbCBIVE1MXG5idWlsZFN0cnVjdHVyZSgkKFwiI2NvbnRlbnRcIikpO1xuXG4vLyBEZWZhdWx0cyB0byBcImhvbWVcIiBwYWdlXG5nZW5lcmF0ZUhvbWUoJChcIm1haW5cIikpO1xuXG4vLyBOYXYgZXZlbnQgaGFuZGxlcnNcblxuJChcIiNob21lXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICBjbGVhckNvbnRhaW5lciAoKVxuICBnZW5lcmF0ZUhvbWUoJChcIm1haW5cIikpO1xufSk7XG5cbiQoXCIjbWVudVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgY2xlYXJDb250YWluZXIgKClcbiAgZ2VuZXJhdGVNZW51KCQoXCJtYWluXCIpKTtcbn0pO1xuXG4kKFwiI2NvbnRhY3RcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gIGNsZWFyQ29udGFpbmVyICgpXG4gIGdlbmVyYXRlQ29udGFjdCgkKFwibWFpblwiKSk7XG59KTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyICgpIHtcbiAgJChcIm1haW5cIikuaHRtbChcIlwiKVxufVxuIiwiY29uc3QgZ2VuZXJhdGVNZW51ID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICBjb250YWluZXIuYXBwZW5kKFxuICAgICQoJzxoZWFkZXIvPicpXG4gICAgICAuYXBwZW5kKCQoJzxoMi8+JylcbiAgICAgICAgLmFwcGVuZChcIm1lbnVcIilcbiAgICAgICksXG4gIClcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVNZW51IH0iLCJjb25zdCBnZW5lcmF0ZUNvbnRhY3QgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lci5hcHBlbmQoXG4gICAgJCgnPGRpdi8+JylcbiAgICAgIC5hZGRDbGFzcyhcImNvbnRhY3RcIilcbiAgICAgIC5hcHBlbmQoJCgnPGgyLz4nKVxuICAgICAgICAuYXBwZW5kKFwiY29udGFjdFwiKVxuICAgICksXG4gIClcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVDb250YWN0IH0iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiX2kiLCJfYXJyYXlMaWtlVG9BcnJheSIsImFyciIsImxlbiIsImFycjIiLCJBcnJheSIsIl9pdGVtIiwiaXNBcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3MiLCJfZSIsIl9hcnIiLCJfbiIsIl9kIiwiY2FsbCIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnIiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJvIiwibWluTGVuIiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZnJvbSIsInRlc3QiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJUeXBlRXJyb3IiLCJfbm9uSXRlcmFibGVSZXN0IiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4Iiwib2JqIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZFN0eWxlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pbmRleCIsInNwbGljZSIsIm1lbW8iLCJpbnNlcnQiLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5IiwiZ2VuZXJhdGVIb21lIiwiY29udGFpbmVyIiwiYXBwZW5kIiwiJCIsImFkZENsYXNzIiwiYXR0ciIsImNsZWFyQ29udGFpbmVyIiwiaHRtbCIsImNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==