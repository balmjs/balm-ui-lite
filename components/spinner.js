!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI_spinner=t():e.BalmUI_spinner=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="kbXi")}({"+DdP":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialSpinner=e,e.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},e.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},e.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),o.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var s=[n,r,o],i=0;i<s.length;i++){var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),s[i].appendChild(a)}t.appendChild(n),t.appendChild(r),t.appendChild(o),this.element_.appendChild(t)},e.prototype.createLayer=e.prototype.createLayer,e.prototype.stop=function(){this.element_.classList.remove("is-active")},e.prototype.stop=e.prototype.stop,e.prototype.start=function(){this.element_.classList.add("is-active")},e.prototype.start=e.prototype.start,e.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})}()},L0bC:function(e,t,n){"use strict";(function(e){n("jh+B");var r="[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV,o=window.componentHandler;r&&(e.componentHandler=o,o=e.componentHandler),t.a={data:function(){return{$mdl:o}},created:function(){this.$mdl||(this.$mdl=o)}}}).call(this,n("yLpj"))},PE4B:function(e,t,n){"use strict";var r=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function s(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function i(e,t,n){return e.concat(t).map(function(e){return s(e,n)})}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function c(e,t,n){var r={};return n.isMergeableObject(e)&&a(e).forEach(function(t){r[t]=s(e[t],n)}),a(t).forEach(function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=function(e,t){if(!t.customMerge)return l;var n=t.customMerge(e);return"function"===typeof n?n:l}(o,n)(e[o],t[o],n):r[o]=s(t[o],n)}),r}function l(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||i,n.isMergeableObject=n.isMergeableObject||r;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):c(e,t,n):s(t,n)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return l(e,n,t)},{})};var d=l;e.exports=d},"jh+B":function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[],n="mdlComponentConfigInternal_";function r(t,n){for(var r=0;r<e.length;r++)if(e[r].className===t)return"undefined"!==typeof n&&(e[r]=n),e[r];return!1}function o(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,t){return-1!==o(e).indexOf(t)}function i(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function a(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var o=0;o<e.length;o++)a(e[o].className,e[o].cssClass);else{var s=t;if("undefined"===typeof n){var i=r(s);i&&(n=i.cssClass)}for(var l=document.querySelectorAll("."+n),d=0;d<l.length;d++)c(l[d],s)}}function c(a,c){if(!("object"===typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=i("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(l),!l.defaultPrevented){var d=o(a),u=[];if(c)s(a,c)||u.push(r(c));else{var p=a.classList;e.forEach(function(e){p.contains(e.cssClass)&&-1===u.indexOf(e)&&!s(a,e.className)&&u.push(e)})}for(var f,m=0,g=u.length;m<g;m++){if(!(f=u[m]))throw new Error("Unable to find a registered component for the given class.");d.push(f.className),a.setAttribute("data-upgraded",d.join(","));var _=new f.classConstructor(a);_[n]=f,t.push(_);for(var v=0,y=f.callbacks.length;v<y;v++)f.callbacks[v](a);f.widget&&(a[f.className]=_);var h=i("mdl-componentupgraded",!0,!1);a.dispatchEvent(h)}}}function l(e){if(e){var r=t.indexOf(e);t.splice(r,1);var o=e.element_.getAttribute("data-upgraded").split(","),s=o.indexOf(e[n].classAsString);o.splice(s,1),e.element_.setAttribute("data-upgraded",o.join(","));var a=i("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,r=0,o=t.length;r<o;r++)(n=t[r])instanceof HTMLElement&&(c(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=r(e);n&&n.callbacks.push(t)},register:function(t){var o=!0;"undefined"===typeof t.widget&&"undefined"===typeof t.widget||(o=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:o,callbacks:[]};if(e.forEach(function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");r(t.classAsString,s)||e.push(s)},downgradeElements:function(e){var n=function(e){t.filter(function(t){return t.element_===e}).forEach(l)};if(e instanceof Array||e instanceof NodeList)for(var r=0;r<e.length;r++)n(e[r]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},kbXi:function(e,t,n){"use strict";n.r(t);var r=n("PE4B"),o=n.n(r),s=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()},i=function(e,t){Object.keys(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;"object"!==s(r)?e.props[n].default=t[n]:e.props[n].default=o()(r,t[n])}})},a=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)},c=function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className})};c._withStripped=!0;var l=n("L0bC");n("+DdP");var d=function(e,t,n,r,o,s,i,a){var c,l="function"===typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}({name:"ui-spinner",mixins:[l.a],props:{active:{type:Boolean,default:!1},singleColor:{type:Boolean,default:!1}},computed:{className:function(){return{"mdl-spinner":!0,"mdl-js-spinner":!0,"is-active":this.active,"mdl-spinner--single-color":this.singleColor}}},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSpinner")}},c,[],!1,null,null,null);d.options.__file="src/scripts/components/loading/spinner.vue";var u=d.exports;a(u);t.default=u},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}})});