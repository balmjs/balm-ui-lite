!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="J37j")}({"7enz":function(e,t){var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.className})},r=[];e.exports={render:n,staticRenderFns:r}},J37j:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("fBjd"),s=function(e){return e&&e.__esModule?e:{default:e}}(r);"undefined"!==typeof window&&window.Vue&&window.Vue.component(s.default.name,s.default),t.default=s.default},N7H5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("WMYY"),s=function(e){return e&&e.__esModule?e:{default:e}}(r);n("ujq8"),t.default={name:"ui-spinner",mixins:[s.default],props:{active:{type:Boolean,default:!1},singleColor:{type:Boolean,default:!1}},computed:{className:function(){return{"mdl-spinner":!0,"mdl-js-spinner":!0,"is-active":this.active,"mdl-spinner--single-color":this.singleColor}}},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSpinner")}}},"VU/8":function(e,t){e.exports=function(e,t,n,r,s,a){var o,i=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(o=e,i=e.default);var l="function"===typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId=s);var c;if(a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=r),c){var u=l.functional,p=u?l.render:l.beforeCreate;u?(l._injectStyles=c,l.render=function(e,t){return c.call(t),p(e,t)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:o,exports:i,options:l}}},WMYY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("bjur"),t.default={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}},bjur:function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};n=function(){"use strict";function e(e,t){for(var n=0;n<p.length;n++)if(p[n].className===e)return"undefined"!==typeof t&&(p[n]=t),p[n];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function n(e,n){return-1!==t(e).indexOf(n)}function r(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function s(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var r=0;r<p.length;r++)s(p[r].className,p[r].cssClass);else{var o=t;if("undefined"===typeof n){var i=e(o);i&&(n=i.cssClass)}for(var d=document.querySelectorAll("."+n),l=0;l<d.length;l++)a(d[l],o)}}function a(s,a){if(!("object"===typeof s&&s instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var o=r("mdl-componentupgrading",!0,!0);if(s.dispatchEvent(o),!o.defaultPrevented){var i=t(s),d=[];if(a)n(s,a)||d.push(e(a));else{var l=s.classList;p.forEach(function(e){l.contains(e.cssClass)&&-1===d.indexOf(e)&&!n(s,e.className)&&d.push(e)})}for(var c,u=0,_=d.length;u<_;u++){if(!(c=d[u]))throw new Error("Unable to find a registered component for the given class.");i.push(c.className),s.setAttribute("data-upgraded",i.join(","));var g=new c.classConstructor(s);g[m]=c,f.push(g);for(var v=0,E=c.callbacks.length;v<E;v++)c.callbacks[v](s);c.widget&&(s[c.className]=g);var C=r("mdl-componentupgraded",!0,!1);s.dispatchEvent(C)}}}function o(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,n=0,r=e.length;n<r;n++)(t=e[n])instanceof HTMLElement&&(a(t),t.children.length>0&&o(t.children))}function i(t){var n="undefined"===typeof t.widget&&"undefined"===typeof t.widget,r=!0;n||(r=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(p.forEach(function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(m))throw new Error("MDL component classes must not have "+m+" defined as a property.");e(t.classAsString,s)||p.push(s)}function d(t,n){var r=e(t);r&&r.callbacks.push(n)}function l(){for(var e=0;e<p.length;e++)s(p[e].className)}function c(e){if(e){var t=f.indexOf(e);f.splice(t,1);var n=e.element_.getAttribute("data-upgraded").split(","),s=n.indexOf(e[m].classAsString);n.splice(s,1),e.element_.setAttribute("data-upgraded",n.join(","));var a=r("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}function u(e){var t=function(e){f.filter(function(t){return t.element_===e}).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)t(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var p=[],f=[],m="mdlComponentConfigInternal_";return{upgradeDom:s,upgradeElement:a,upgradeElements:o,upgradeAllRegistered:l,registerUpgradedCallback:d,register:i,downgradeElements:u}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},fBjd:function(e,t,n){var r=n("VU/8"),s=n("N7H5"),a=n("7enz"),o=r(s,a,!1,null,null,null);e.exports=o.exports},ujq8:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialSpinner=e,e.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},e.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},e.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[n,r,s],o=0;o<a.length;o++){var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[o].appendChild(i)}t.appendChild(n),t.appendChild(r),t.appendChild(s),this.element_.appendChild(t)},e.prototype.createLayer=e.prototype.createLayer,e.prototype.stop=function(){this.element_.classList.remove("is-active")},e.prototype.stop=e.prototype.stop,e.prototype.start=function(){this.element_.classList.add("is-active")},e.prototype.start=e.prototype.start,e.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})}()}})});