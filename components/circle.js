!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite_circle=t():e.BalmUILite_circle=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="REGF")}({PE4B:function(e,t,r){"use strict";var n=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function u(e,t,r){return e.concat(t).map(function(e){return i(e,r)})}function c(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function a(e,t,r){var n={};return r.isMergeableObject(e)&&c(e).forEach(function(t){n[t]=i(e[t],r)}),c(t).forEach(function(o){r.isMergeableObject(t[o])&&e[o]?n[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"===typeof r?r:s}(o,r)(e[o],t[o],r):n[o]=i(t[o],r)}),n}function s(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||u,r.isMergeableObject=r.isMergeableObject||n;var o=Array.isArray(t);return o===Array.isArray(e)?o?r.arrayMerge(e,t,r):a(e,t,r):i(t,r)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return s(e,r,t)},{})};var f=s;e.exports=f},REGF:function(e,t,r){"use strict";r.r(t);var n=r("PE4B"),o=r.n(n),i=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()},u=function(e,t){Object.keys(t).forEach(function(r){if(void 0!==e.props[r]){var n=e.props[r].default;"object"!==i(n)?e.props[r].default=t[r]:e.props[r].default=o()(n,t[r])}})},c=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)},a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"mdl-circle",attrs:{width:e.size,height:e.size,viewBox:"-25 -25 400 400"}},[r("circle",{staticClass:"mdl-circle__bg",attrs:{cx:e.r,cy:e.r,r:e.r,"stroke-width":e.strokeWidth,stroke:e.stroke}}),e._v(" "),r("circle",{class:["mdl-circle__front",{"no-transition":!e.animate}],attrs:{cx:e.r,cy:e.r,r:e.r,transform:"rotate(-90, "+e.r+", "+e.r+")","stroke-linecap":e.lineStyle,stroke:e.progressColor,"stroke-width":e.progressWidth,"stroke-dasharray":e.perimeter,"stroke-dashoffset":e.strokeDashoffset}}),e._v(" "),r("text",{attrs:{dx:"-25",x:"50%",y:"50%"}},[e._t("default")],2)])};a._withStripped=!0;var s=function(e,t,r,n,o,i,u,c){var a,s="function"===typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=a):o&&(a=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(e,t){return a.call(t),f(e,t)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,a):[a]}return{exports:e,options:s}}({name:"ui-circle",props:{animate:{type:Boolean,default:!0},size:{type:[Number,String],default:"100%"},strokeWidth:{type:[Number,String],default:20},strokeLinecap:{type:[Number,String],default:"round"},stroke:{type:String,default:"#e4e7f6"},progressColor:{type:String,default:"#ff4081"},progress:{default:0,validator:function(e){return 0<=e&&e<=100}},progressWidth:{type:[Number,String],default:function(){return this.strokeWidth}}},data:function(){return{r:175}},computed:{perimeter:function(){return Math.round(2*Math.PI*this.r)},strokeDashoffset:function(){var e=+this.progress;return Math.round((100-e)/100*this.perimeter)},lineStyle:function(){return"number"===typeof this.strokeLinecap?["butt","round","square"][this.strokeLinecap]:this.strokeLinecap}}},a,[],!1,null,null,null);s.options.__file="src/scripts/components/common/circle.vue";var f=s.exports;c(f);t.default=f}})});