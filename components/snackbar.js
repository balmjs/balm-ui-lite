!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI_snackbar=t():e.BalmUI_snackbar=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="pv2Q")}({L0bC:function(e,t,n){"use strict";(function(e){n("jh+B");var r="[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV,i=window.componentHandler;r&&(e.componentHandler=i,i=e.componentHandler),t.a={data:function(){return{$mdl:i}},created:function(){this.$mdl||(this.$mdl=i)}}}).call(this,n("yLpj"))},PE4B:function(e,t,n){"use strict";var r=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===i}(e)}(e)};var i="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?u((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function o(e,t,n){return e.concat(t).map(function(e){return a(e,n)})}function s(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function c(e,t,n){var r={};return n.isMergeableObject(e)&&s(e).forEach(function(t){r[t]=a(e[t],n)}),s(t).forEach(function(i){n.isMergeableObject(t[i])&&e[i]?r[i]=function(e,t){if(!t.customMerge)return u;var n=t.customMerge(e);return"function"===typeof n?n:u}(i,n)(e[i],t[i],n):r[i]=a(t[i],n)}),r}function u(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||r;var i=Array.isArray(t);return i===Array.isArray(e)?i?n.arrayMerge(e,t,n):c(e,t,n):a(t,n)}u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return u(e,n,t)},{})};var l=u;e.exports=l},"jh+B":function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[],n="mdlComponentConfigInternal_";function r(t,n){for(var r=0;r<e.length;r++)if(e[r].className===t)return"undefined"!==typeof n&&(e[r]=n),e[r];return!1}function i(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function a(e,t){return-1!==i(e).indexOf(t)}function o(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function s(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var i=0;i<e.length;i++)s(e[i].className,e[i].cssClass);else{var a=t;if("undefined"===typeof n){var o=r(a);o&&(n=o.cssClass)}for(var u=document.querySelectorAll("."+n),l=0;l<u.length;l++)c(u[l],a)}}function c(s,c){if(!("object"===typeof s&&s instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=o("mdl-componentupgrading",!0,!0);if(s.dispatchEvent(u),!u.defaultPrevented){var l=i(s),d=[];if(c)a(s,c)||d.push(r(c));else{var f=s.classList;e.forEach(function(e){f.contains(e.cssClass)&&-1===d.indexOf(e)&&!a(s,e.className)&&d.push(e)})}for(var p,m=0,h=d.length;m<h;m++){if(!(p=d[m]))throw new Error("Unable to find a registered component for the given class.");l.push(p.className),s.setAttribute("data-upgraded",l.join(","));var g=new p.classConstructor(s);g[n]=p,t.push(g);for(var v=0,b=p.callbacks.length;v<b;v++)p.callbacks[v](s);p.widget&&(s[p.className]=g);var _=o("mdl-componentupgraded",!0,!1);s.dispatchEvent(_)}}}function u(e){if(e){var r=t.indexOf(e);t.splice(r,1);var i=e.element_.getAttribute("data-upgraded").split(","),a=i.indexOf(e[n].classAsString);i.splice(a,1),e.element_.setAttribute("data-upgraded",i.join(","));var s=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(s)}}return{upgradeDom:s,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,r=0,i=t.length;r<i;r++)(n=t[r])instanceof HTMLElement&&(c(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)s(e[t].className)},registerUpgradedCallback:function(e,t){var n=r(e);n&&n.callbacks.push(t)},register:function(t){var i=!0;"undefined"===typeof t.widget&&"undefined"===typeof t.widget||(i=t.widget||t.widget);var a={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(e.forEach(function(e){if(e.cssClass===a.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===a.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");r(t.classAsString,a)||e.push(a)},downgradeElements:function(e){var n=function(e){t.filter(function(t){return t.element_===e}).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var r=0;r<e.length;r++)n(e[r]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},mnCQ:function(e,t){!function(){"use strict";var e=function(e){if(this.element_=e,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=e,e.prototype.Constant_={ANIMATION_LENGTH:250},e.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},e.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},e.prototype.showSnackbar=function(e){if(void 0===e)throw new Error("Please provide a data object with at least a message to display.");if(void 0===e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(e):(this.active=!0,this.message_=e.message,e.timeout?this.timeout_=e.timeout:this.timeout_=2750,e.actionHandler&&(this.actionHandler_=e.actionHandler),e.actionText&&(this.actionText_=e.actionText),this.displaySnackbar_())},e.prototype.showSnackbar=e.prototype.showSnackbar,e.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},e.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},e.prototype.setActionHidden_=function(e){e?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},componentHandler.register({constructor:e,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0})}()},pv2Q:function(e,t,n){"use strict";n.r(t);var r=n("PE4B"),i=n.n(r),a=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()},o=function(e,t){Object.keys(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;"object"!==a(r)?e.props[n].default=t[n]:e.props[n].default=i()(r,t[n])}})},s=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"popup",class:e.className,attrs:{"aria-live":"assertive","aria-atomic":"true","aria-relevant":"text"}},[n("div",{staticClass:"mdl-snackbar__text"},[e._v(e._s(e.currentMessage))]),e._v(" "),n("button",{staticClass:"mdl-snackbar__action",attrs:{type:"button"}},[e._v(e._s(e.actionText))])])};c._withStripped=!0;var u=n("L0bC"),l=(n("mnCQ"),["toast","snackbar"]);var d=function(e,t,n,r,i,a,o,s){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}({name:"ui-snackbar",mixins:[u.a],model:{prop:"active",event:"change"},props:{active:{type:Boolean,default:!1},message:{type:String,required:!0},type:{type:[Number,String],default:0},timeout:{type:Number,default:2750},actionHandler:Function,actionText:String},data:function(){return{currentActive:this.active,currentMessage:this.message}},computed:{className:function(){return{"mdl-snackbar":!0,"mdl-js-snackbar":!0,"mdl-snackbar--active":this.active}},isSnackbar:function(){var e="string"===a(this.type)?l[1]:1;return this.type===e}},watch:{active:function(e){!this.currentActive&&e&&(this.currentActive=e,this.show())},message:function(e){this.currentMessage=e}},methods:{show:function(){var e=this,t={message:this.currentMessage,timeout:this.timeout};this.isSnackbar&&(t.actionHandler=this.actionHandler,t.actionText=this.actionText),this.$refs.popup.MaterialSnackbar.showSnackbar(t),setTimeout(function(){e.currentActive=!1,e.$emit("change",!1),e.$emit("done")},this.timeout)}},created:function(){this.isSnackbar&&(this.actionHandler&&this.actionText||console.warn("`actionHandler` and `actionText` is required in a snackbar."))},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSnackbar")}},c,[],!1,null,null,null);d.options.__file="src/scripts/components/common/snackbar.vue";var f=d.exports;s(f);t.default=f},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}})});