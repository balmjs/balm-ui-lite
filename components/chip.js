!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite_chip=e():t.BalmUILite_chip=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="neP3")}({PE4B:function(t,e,n){"use strict";var r=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===o}(t)}(t)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(t,e){return!1!==e.clone&&e.isMergeableObject(t)?s((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function c(t,e,n){return t.concat(e).map(function(t){return i(t,n)})}function a(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return t.propertyIsEnumerable(e)}):[]}(t))}function u(t,e,n){var r={};return n.isMergeableObject(t)&&a(t).forEach(function(e){r[e]=i(t[e],n)}),a(e).forEach(function(o){n.isMergeableObject(e[o])&&t[o]?r[o]=function(t,e){if(!e.customMerge)return s;var n=e.customMerge(t);return"function"===typeof n?n:s}(o,n)(t[o],e[o],n):r[o]=i(e[o],n)}),r}function s(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||c,n.isMergeableObject=n.isMergeableObject||r;var o=Array.isArray(e);return o===Array.isArray(t)?o?n.arrayMerge(t,e,n):u(t,e,n):i(e,n)}s.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return s(t,n,e)},{})};var l=s;t.exports=l},neP3:function(t,e,n){"use strict";n.r(e);var r=n("PE4B"),o=n.n(r),i=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()},c=function(t,e){Object.keys(e).forEach(function(n){if(void 0!==t.props[n]){var r=t.props[n].default;"object"!==i(r)?t.props[n].default=e[n]:t.props[n].default=o()(r,e[n])}})},a=function(t,e){Object.keys(e).forEach(function(n){if(void 0!==t[n]){var r=t[n],o=e[n];c(r,o)}})},u=function(t){if(Object.defineProperty(t,"config",{get:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(t,e)}}}),"undefined"!==typeof window&&window.Vue)for(var e in t){var n=t[e];window.Vue.component(n.name,n)}},s=function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.className},[this._t("default")],2)};function l(t,e,n,r,o,i,c,a){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}s._withStripped=!0;var f=l({name:"ui-chip",props:{contact:{type:Boolean,default:!1},action:{type:Boolean,default:!1}},computed:{className:function(){return{"mdl-chip":!0,"mdl-chip--contact":this.contact,"mdl-chip--deletable":this.action}}}},s,[],!1,null,null,null);f.options.__file="src/scripts/components/chip/chip.vue";var p=f.exports,d=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"mdl-chip__text"},[this._t("default")],2)};d._withStripped=!0;var h=l({name:"ui-chip-text"},d,[],!1,null,null,null);h.options.__file="src/scripts/components/chip/chip-text.vue";var _=h.exports,v=function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"mdl-chip__action",attrs:{href:"javascript:void(0);"},on:{click:this.handleClick}},[this._t("default",[e("i",{staticClass:"material-icons"},[this._v("cancel")])])],2)};v._withStripped=!0;var y=l({name:"ui-chip-action",methods:{handleClick:function(t){this.$emit("click",t)}}},v,[],!1,null,null,null);y.options.__file="src/scripts/components/chip/chip-action.vue";var m=y.exports,b=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"mdl-chip__contact"},[this._t("default")],2)};b._withStripped=!0;var j=l({name:"ui-chip-contact"},b,[],!1,null,null,null);j.options.__file="src/scripts/components/chip/chip-contact.vue";var g=j.exports;n.d(e,"UiChip",function(){return p}),n.d(e,"UiChipText",function(){return _}),n.d(e,"UiChipAction",function(){return m}),n.d(e,"UiChipContact",function(){return g});var C={UiChip:p,UiChipText:_,UiChipAction:m,UiChipContact:g};u(C);e.default=C}})});