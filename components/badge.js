!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUILite=n():t.BalmUILite=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="jExP")}({"29s/":function(t,n,e){var r=e("5T2Y"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},"2GTP":function(t,n,e){var r=e("eaoh");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"2faE":function(t,n,e){var r=e("5K7Z"),o=e("eUtF"),i=e("G8Mo"),u=Object.defineProperty;n.f=e("jmDH")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},"5K7Z":function(t,n,e){var r=e("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"5vMV":function(t,n,e){var r=e("B+OT"),o=e("NsO/"),i=e("W070")(!1),u=e("VVlx")("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},"93I4":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},Aqzh:function(t,n,e){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===n}(t)}(t)},n="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function e(t,n){return!1!==n.clone&&n.isMergeableObject(t)?o((e=t,Array.isArray(e)?[]:{}),t,n):t;var e}function r(t,n,r){return t.concat(n).map(function(t){return e(t,r)})}function o(n,i,u){(u=u||{}).arrayMerge=u.arrayMerge||r,u.isMergeableObject=u.isMergeableObject||t;var c=Array.isArray(i),a=Array.isArray(n),f=c===a;return f?c?u.arrayMerge(n,i,u):function(t,n,r){var i={};return r.isMergeableObject(t)&&Object.keys(t).forEach(function(n){i[n]=e(t[n],r)}),Object.keys(n).forEach(function(u){r.isMergeableObject(n[u])&&t[u]?i[u]=o(t[u],n[u],r):i[u]=e(n[u],r)}),i}(n,i,u):e(i,u)}return o.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,e){return o(t,e,n)},{})},o}()},"B+OT":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},D8kY:function(t,n,e){var r=e("Ojgd"),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},FpHa:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,n,e){var r=e("93I4");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},GQeE:function(t,n,e){t.exports={default:e("iq4v"),__esModule:!0}},Hsns:function(t,n,e){var r=e("93I4"),o=e("5T2Y").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},JB68:function(t,n,e){var r=e("Jes0");t.exports=function(t){return Object(r(t))}},JFUb:function(t,n,e){"use strict";function r(t,n,e,r,o,i,u,c){var a=typeof(t=t||{}).default;"object"!==a&&"function"!==a||(t=t.default);var f,s="function"===typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId=i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(s.functional){s._injectStyles=f;var l=s.render;s.render=function(t,n){return f.call(n),l(t,n)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:s}}e.d(n,"a",function(){return r})},Jes0:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},KUxP:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},M1xp:function(t,n,e){var r=e("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},Mqbl:function(t,n,e){var r=e("JB68"),o=e("w6GO");e("zn7N")("keys",function(){return function(t){return o(r(t))}})},NegM:function(t,n,e){var r=e("2faE"),o=e("rr1i");t.exports=e("jmDH")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},"NsO/":function(t,n,e){var r=e("M1xp"),o=e("Jes0");t.exports=function(t){return r(o(t))}},Ojgd:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},PSzo:function(t,n,e){"use strict";var r=e("GQeE"),o=e.n(r),i=e("gVot"),u=function(t,n){o()(n).forEach(function(e){if(void 0!==t[e]){var r=t[e],o=n[e];Object(i.a)(r,o)}})};n.a=function(t){if(Object.defineProperty(t,"config",{get:function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(t,n)}}}),"undefined"!==typeof window&&window.Vue)for(var n in t){var e=t[n];window.Vue.component(e.name,e)}}},VVlx:function(t,n,e){var r=e("29s/")("keys"),o=e("YqAc");t.exports=function(t){return r[t]||(r[t]=o(t))}},W070:function(t,n,e){var r=e("NsO/"),o=e("tEej"),i=e("D8kY");t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},WEpk:function(t,n){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},WuiG:function(t,n,e){"use strict";n.a=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},Y7ZC:function(t,n,e){var r=e("5T2Y"),o=e("WEpk"),i=e("2GTP"),u=e("NegM"),c=function(t,n,e){var a,f,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,y=t&c.B,b=t&c.W,h=p?o:o[n]||(o[n]={}),x=h.prototype,g=p?r:d?r[n]:(r[n]||{}).prototype;for(a in p&&(e=n),e)(f=!l&&g&&void 0!==g[a])&&a in h||(s=f?g[a]:e[a],h[a]=p&&"function"!=typeof g[a]?e[a]:y&&f?i(s,r):b&&g[a]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((h.virtual||(h.virtual={}))[a]=s,t&c.R&&x&&!x[a]&&u(x,a,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},YqAc:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},a0xu:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},eUtF:function(t,n,e){t.exports=!e("jmDH")&&!e("KUxP")(function(){return 7!=Object.defineProperty(e("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},gVot:function(t,n,e){"use strict";var r=e("GQeE"),o=e.n(r),i=e("Aqzh"),u=e.n(i),c=e("WuiG");n.a=function(t,n){o()(n).forEach(function(e){if(void 0!==t.props[e]){var r=t.props[e].default;"object"!==Object(c.a)(r)?t.props[e].default=n[e]:t.props[e].default=u()(r,n[e])}})}},iq4v:function(t,n,e){e("Mqbl"),t.exports=e("WEpk").Object.keys},jExP:function(t,n,e){"use strict";e.r(n);var r=e("PSzo"),o={props:{value:{type:[Number,String],default:0},icon:{type:Boolean,default:!1},noBackground:{type:Boolean,default:!1},overlap:{type:Boolean,default:!1}},computed:{className:function(){return{"material-icons":this.icon,"mdl-badge":!0,"mdl-badge--no-background":this.noBackground,"mdl-badge--overlap":this.overlap,"no-value":!this.value}}}},i={name:"ui-badge",mixins:[o]},u=e("JFUb"),c=Object(u.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.className,attrs:{"data-badge":this.value}},[this._t("default")],2)},[],!1,null,null,null).exports,a={name:"ui-badge-link",mixins:[o]},f=Object(u.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("a",{class:[this.className,"mdl-badge--link"],attrs:{"data-badge":this.value}},[this._t("default")],2)},[],!1,null,null,null).exports;e.d(n,"UiBadge",function(){return c}),e.d(n,"UiBadgeLink",function(){return f});var s={UiBadge:c,UiBadgeLink:f};Object(r.a)(s);n.default=s},jmDH:function(t,n,e){t.exports=!e("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rr1i:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},tEej:function(t,n,e){var r=e("Ojgd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},w6GO:function(t,n,e){var r=e("5vMV"),o=e("FpHa");t.exports=Object.keys||function(t){return r(t,o)}},zn7N:function(t,n,e){var r=e("Y7ZC"),o=e("WEpk"),i=e("KUxP");t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}}})});