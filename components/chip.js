!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUILite=n():t.BalmUILite=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="neP3")}({"+vXQ":function(t,n,e){t.exports=!e("C61u")&&!e("S4vA")(function(){return 7!=Object.defineProperty(e("BfU5")("div"),"a",{get:function(){return 7}}).a})},"/F7N":function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},"0WpP":function(t,n,e){var r=e("/F7N"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"1GvH":function(t,n,e){e("5w6Y"),t.exports=e("VSTI").Object.keys},"5w6Y":function(t,n,e){var r=e("CYMq"),o=e("mHY4");e("czaS")("keys",function(){return function(t){return o(r(t))}})},"7whZ":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},A9a0:function(t,n,e){var r=e("nA4W"),o=e("bKEA"),i=e("Oa1h")(!1),c=e("WpRT")("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)e!=c&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},Aqzh:function(t,n,e){t.exports=function(){"use strict";var t=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===n}(t)}(t)},n="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function e(t,n){return!1!==n.clone&&n.isMergeableObject(t)?o((e=t,Array.isArray(e)?[]:{}),t,n):t;var e}function r(t,n,r){return t.concat(n).map(function(t){return e(t,r)})}function o(n,i,c){(c=c||{}).arrayMerge=c.arrayMerge||r,c.isMergeableObject=c.isMergeableObject||t;var u=Array.isArray(i),a=Array.isArray(n),f=u===a;return f?u?c.arrayMerge(n,i,c):function(t,n,r){var i={};return r.isMergeableObject(t)&&Object.keys(t).forEach(function(n){i[n]=e(t[n],r)}),Object.keys(n).forEach(function(c){r.isMergeableObject(n[c])&&t[c]?i[c]=o(t[c],n[c],r):i[c]=e(n[c],r)}),i}(n,i,c):e(i,c)}return o.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,e){return o(t,e,n)},{})},o}()},BRsN:function(t,n,e){var r=e("GhSp"),o=e("ENu8");t.exports=e("C61u")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},BfU5:function(t,n,e){var r=e("ekG2"),o=e("7whZ").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},C61u:function(t,n,e){t.exports=!e("S4vA")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},CYMq:function(t,n,e){var r=e("yQFZ");t.exports=function(t){return Object(r(t))}},ENu8:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},FgkJ:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},GQeE:function(t,n,e){t.exports={default:e("1GvH"),__esModule:!0}},GhSp:function(t,n,e){var r=e("d+lc"),o=e("+vXQ"),i=e("M5dz"),c=Object.defineProperty;n.f=e("C61u")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},"KHd+":function(t,n,e){"use strict";function r(t,n,e,r,o,i,c,u){var a,f="function"===typeof t?t.options:t;if(n&&(f.render=n,f.staticRenderFns=e,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(t,n){return a.call(n),s(t,n)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:f}}e.d(n,"a",function(){return r})},M5dz:function(t,n,e){var r=e("ekG2");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Oa1h:function(t,n,e){var r=e("bKEA"),o=e("0WpP"),i=e("nRFE");t.exports=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},PSzo:function(t,n,e){"use strict";var r=e("GQeE"),o=e.n(r),i=e("gVot"),c=function(t,n){o()(n).forEach(function(e){if(void 0!==t[e]){var r=t[e],o=n[e];Object(i.a)(r,o)}})};n.a=function(t){if(Object.defineProperty(t,"config",{get:function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(t,n)}}}),"undefined"!==typeof window&&window.Vue)for(var n in t){var e=t[n];window.Vue.component(e.name,e)}}},S4vA:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},TYje:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},USwo:function(t,n,e){var r=e("7whZ"),o=e("VSTI"),i=e("nAx8"),c=e("BRsN"),u=function(t,n,e){var a,f,s,p=t&u.F,l=t&u.G,d=t&u.S,h=t&u.P,v=t&u.B,y=t&u.W,b=l?o:o[n]||(o[n]={}),_=b.prototype,m=l?r:d?r[n]:(r[n]||{}).prototype;for(a in l&&(e=n),e)(f=!p&&m&&void 0!==m[a])&&a in b||(s=f?m[a]:e[a],b[a]=l&&"function"!=typeof m[a]?e[a]:v&&f?i(s,r):y&&m[a]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):h&&"function"==typeof s?i(Function.call,s):s,h&&((b.virtual||(b.virtual={}))[a]=s,t&u.R&&_&&!_[a]&&c(_,a,s)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},VSTI:function(t,n){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},WpRT:function(t,n,e){var r=e("s2er")("keys"),o=e("ixoo");t.exports=function(t){return r[t]||(r[t]=o(t))}},WuiG:function(t,n,e){"use strict";n.a=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},bKEA:function(t,n,e){var r=e("n7vu"),o=e("yQFZ");t.exports=function(t){return r(o(t))}},czaS:function(t,n,e){var r=e("USwo"),o=e("VSTI"),i=e("S4vA");t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],c={};c[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",c)}},"d+lc":function(t,n,e){var r=e("ekG2");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ekG2:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},gVot:function(t,n,e){"use strict";var r=e("GQeE"),o=e.n(r),i=e("Aqzh"),c=e.n(i),u=e("WuiG");n.a=function(t,n){o()(n).forEach(function(e){if(void 0!==t.props[e]){var r=t.props[e].default;"object"!==Object(u.a)(r)?t.props[e].default=n[e]:t.props[e].default=c()(r,n[e])}})}},ixoo:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},l0Kd:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},mHY4:function(t,n,e){var r=e("A9a0"),o=e("l0Kd");t.exports=Object.keys||function(t){return r(t,o)}},n7vu:function(t,n,e){var r=e("TYje");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},nA4W:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},nAx8:function(t,n,e){var r=e("FgkJ");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},nRFE:function(t,n,e){var r=e("/F7N"),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},neP3:function(t,n,e){"use strict";e.r(n);var r=e("PSzo"),o=function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.className},[this._t("default")],2)};o._withStripped=!0;var i={name:"ui-chip",props:{contact:{type:Boolean,default:!1},action:{type:Boolean,default:!1}},computed:{className:function(){return{"mdl-chip":!0,"mdl-chip--contact":this.contact,"mdl-chip--deletable":this.action}}}},c=e("KHd+"),u=Object(c.a)(i,o,[],!1,null,null,null);u.options.__file="src/scripts/components/chip/chip.vue";var a=u.exports,f=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"mdl-chip__text"},[this._t("default")],2)};f._withStripped=!0;var s={name:"ui-chip-text"},p=Object(c.a)(s,f,[],!1,null,null,null);p.options.__file="src/scripts/components/chip/chip-text.vue";var l=p.exports,d=function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"mdl-chip__action",attrs:{href:"javascript:void(0);"},on:{click:this.handleClick}},[this._t("default",[n("i",{staticClass:"material-icons"},[this._v("cancel")])])],2)};d._withStripped=!0;var h={name:"ui-chip-action",methods:{handleClick:function(t){this.$emit("click",t)}}},v=Object(c.a)(h,d,[],!1,null,null,null);v.options.__file="src/scripts/components/chip/chip-action.vue";var y=v.exports,b=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"mdl-chip__contact"},[this._t("default")],2)};b._withStripped=!0;var _={name:"ui-chip-contact"},m=Object(c.a)(_,b,[],!1,null,null,null);m.options.__file="src/scripts/components/chip/chip-contact.vue";var x=m.exports;e.d(n,"UiChip",function(){return a}),e.d(n,"UiChipText",function(){return l}),e.d(n,"UiChipAction",function(){return y}),e.d(n,"UiChipContact",function(){return x});var j={UiChip:a,UiChipText:l,UiChipAction:y,UiChipContact:x};Object(r.a)(j);n.default=j},s2er:function(t,n,e){var r=e("7whZ"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},yQFZ:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}}})});