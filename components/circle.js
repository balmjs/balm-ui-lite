!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="REGF")}({"+vXQ":function(t,e,r){t.exports=!r("C61u")&&!r("S4vA")(function(){return 7!=Object.defineProperty(r("BfU5")("div"),"a",{get:function(){return 7}}).a})},"/F7N":function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},"0WpP":function(t,e,r){var n=r("/F7N"),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},"1GvH":function(t,e,r){r("5w6Y"),t.exports=r("VSTI").Object.keys},"5w6Y":function(t,e,r){var n=r("CYMq"),o=r("mHY4");r("czaS")("keys",function(){return function(t){return o(n(t))}})},"7whZ":function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},A9a0:function(t,e,r){var n=r("nA4W"),o=r("bKEA"),i=r("Oa1h")(!1),u=r("WpRT")("IE_PROTO");t.exports=function(t,e){var r,c=o(t),f=0,a=[];for(r in c)r!=u&&n(c,r)&&a.push(r);for(;e.length>f;)n(c,r=e[f++])&&(~i(a,r)||a.push(r));return a}},Aqzh:function(t,e,r){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var r=Object.prototype.toString.call(t);return"[object RegExp]"===r||"[object Date]"===r||function(t){return t.$$typeof===e}(t)}(t)},e="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(t,e){return!1!==e.clone&&e.isMergeableObject(t)?o((r=t,Array.isArray(r)?[]:{}),t,e):t;var r}function n(t,e,n){return t.concat(e).map(function(t){return r(t,n)})}function o(e,i,u){(u=u||{}).arrayMerge=u.arrayMerge||n,u.isMergeableObject=u.isMergeableObject||t;var c=Array.isArray(i),f=Array.isArray(e),a=c===f;return a?c?u.arrayMerge(e,i,u):function(t,e,n){var i={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(e){i[e]=r(t[e],n)}),Object.keys(e).forEach(function(u){n.isMergeableObject(e[u])&&t[u]?i[u]=o(t[u],e[u],n):i[u]=r(e[u],n)}),i}(e,i,u):r(i,u)}return o.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,r){return o(t,r,e)},{})},o}()},BRsN:function(t,e,r){var n=r("GhSp"),o=r("ENu8");t.exports=r("C61u")?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},BfU5:function(t,e,r){var n=r("ekG2"),o=r("7whZ").document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},C61u:function(t,e,r){t.exports=!r("S4vA")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},CYMq:function(t,e,r){var n=r("yQFZ");t.exports=function(t){return Object(n(t))}},ENu8:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},FgkJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},GQeE:function(t,e,r){t.exports={default:r("1GvH"),__esModule:!0}},GhSp:function(t,e,r){var n=r("d+lc"),o=r("+vXQ"),i=r("M5dz"),u=Object.defineProperty;e.f=r("C61u")?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},JFUb:function(t,e,r){"use strict";function n(t,e,r,n,o,i,u,c){var f=typeof(t=t||{}).default;"object"!==f&&"function"!==f||(t=t.default);var a,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId=i),u?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=a):o&&(a=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var p=s.render;s.render=function(t,e){return a.call(e),p(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:s}}r.d(e,"a",function(){return n})},M5dz:function(t,e,r){var n=r("ekG2");t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Oa1h:function(t,e,r){var n=r("bKEA"),o=r("0WpP"),i=r("nRFE");t.exports=function(t){return function(e,r,u){var c,f=n(e),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},REGF:function(t,e,r){"use strict";r.r(e);var n=r("iri3"),o={name:"ui-circle",props:{animate:{type:Boolean,default:!0},size:{type:[Number,String],default:"100%"},strokeWidth:{type:[Number,String],default:20},strokeLinecap:{type:[Number,String],default:"round"},stroke:{type:String,default:"#e4e7f6"},progressColor:{type:String,default:"#ff4081"},progress:{default:0,validator:function(t){return 0<=t&&t<=100}},progressWidth:{type:[Number,String],default:function(){return this.strokeWidth}}},data:function(){return{r:175}},computed:{perimeter:function(){return Math.round(2*Math.PI*this.r)},strokeDashoffset:function(){var t=+this.progress;return Math.round((100-t)/100*this.perimeter)},lineStyle:function(){return"number"===typeof this.strokeLinecap?["butt","round","square"][this.strokeLinecap]:this.strokeLinecap}}},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"mdl-circle",attrs:{width:t.size,height:t.size,viewBox:"-25 -25 400 400"}},[r("circle",{staticClass:"mdl-circle__bg",attrs:{cx:t.r,cy:t.r,r:t.r,"stroke-width":t.strokeWidth,stroke:t.stroke}}),t._v(" "),r("circle",{class:["mdl-circle__front",{"no-transition":!t.animate}],attrs:{cx:t.r,cy:t.r,r:t.r,transform:"rotate(-90, "+t.r+", "+t.r+")","stroke-linecap":t.lineStyle,stroke:t.progressColor,"stroke-width":t.progressWidth,"stroke-dasharray":t.perimeter,"stroke-dashoffset":t.strokeDashoffset}}),t._v(" "),r("text",{attrs:{dx:"-25",x:"50%",y:"50%"}},[t._t("default")],2)])};i._withStripped=!0;var u=r("JFUb"),c=Object(u.a)(o,i,[],!1,null,null,null);c.options.__file="src/scripts/components/common/circle.vue";var f=c.exports;Object(n.a)(f);e.default=f},S4vA:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},TYje:function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},USwo:function(t,e,r){var n=r("7whZ"),o=r("VSTI"),i=r("nAx8"),u=r("BRsN"),c=function(t,e,r){var f,a,s,p=t&c.F,l=t&c.G,d=t&c.S,y=t&c.P,v=t&c.B,h=t&c.W,b=l?o:o[e]||(o[e]={}),x=b.prototype,_=l?n:d?n[e]:(n[e]||{}).prototype;for(f in l&&(r=e),r)(a=!p&&_&&void 0!==_[f])&&f in b||(s=a?_[f]:r[f],b[f]=l&&"function"!=typeof _[f]?r[f]:v&&a?i(s,n):h&&_[f]==s?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):y&&"function"==typeof s?i(Function.call,s):s,y&&((b.virtual||(b.virtual={}))[f]=s,t&c.R&&x&&!x[f]&&u(x,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},VSTI:function(t,e){var r=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=r)},WpRT:function(t,e,r){var n=r("s2er")("keys"),o=r("ixoo");t.exports=function(t){return n[t]||(n[t]=o(t))}},WuiG:function(t,e,r){"use strict";e.a=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},bKEA:function(t,e,r){var n=r("n7vu"),o=r("yQFZ");t.exports=function(t){return n(o(t))}},czaS:function(t,e,r){var n=r("USwo"),o=r("VSTI"),i=r("S4vA");t.exports=function(t,e){var r=(o.Object||{})[t]||Object[t],u={};u[t]=e(r),n(n.S+n.F*i(function(){r(1)}),"Object",u)}},"d+lc":function(t,e,r){var n=r("ekG2");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},ekG2:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},gVot:function(t,e,r){"use strict";var n=r("GQeE"),o=r.n(n),i=r("Aqzh"),u=r.n(i),c=r("WuiG");e.a=function(t,e){o()(e).forEach(function(r){if(void 0!==t.props[r]){var n=t.props[r].default;"object"!==Object(c.a)(n)?t.props[r].default=e[r]:t.props[r].default=u()(n,e[r])}})}},iri3:function(t,e,r){"use strict";var n=r("gVot");e.a=function(t){Object.defineProperty(t,"config",{get:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(n.a)(t,e)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(t.name,t)}},ixoo:function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},l0Kd:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},mHY4:function(t,e,r){var n=r("A9a0"),o=r("l0Kd");t.exports=Object.keys||function(t){return n(t,o)}},n7vu:function(t,e,r){var n=r("TYje");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},nA4W:function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},nAx8:function(t,e,r){var n=r("FgkJ");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},nRFE:function(t,e,r){var n=r("/F7N"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},s2er:function(t,e,r){var n=r("7whZ"),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},yQFZ:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}}})});