!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite_switch=t():e.BalmUILite_switch=t()}(window,function(){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="b1ia")}({"72n3":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialRipple=e,e.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},e.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},e.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{if("touchstart"===e.type&&(this.ignoringMouseDown_=!0),this.getFrameCount()>0)return;this.setFrameCount(1);var n,s,i=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)n=Math.round(i.width/2),s=Math.round(i.height/2);else{var r=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;n=Math.round(r-i.left),s=Math.round(o-i.top)}this.setRippleXY(n,s),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},e.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},e.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var n,s,i="translate("+this.x_+"px, "+this.y_+"px)";t?(s=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(s=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",e&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+i+s,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:e,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},L0bC:function(e,t,n){"use strict";(function(e){n("jh+B");var s="[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV,i=window.componentHandler;s&&(e.componentHandler=i,i=e.componentHandler),t.a={data:function(){return{$mdl:i}},created:function(){this.$mdl||(this.$mdl=i)}}}).call(this,n("yLpj"))},PE4B:function(e,t,n){"use strict";var s=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===i}(e)}(e)};var i="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function o(e,t,n){return e.concat(t).map(function(e){return r(e,n)})}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function l(e,t,n){var s={};return n.isMergeableObject(e)&&a(e).forEach(function(t){s[t]=r(e[t],n)}),a(t).forEach(function(i){n.isMergeableObject(t[i])&&e[i]?s[i]=function(e,t){if(!t.customMerge)return c;var n=t.customMerge(e);return"function"===typeof n?n:c}(i,n)(e[i],t[i],n):s[i]=r(t[i],n)}),s}function c(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||o,n.isMergeableObject=n.isMergeableObject||s;var i=Array.isArray(t);return i===Array.isArray(e)?i?n.arrayMerge(e,t,n):l(e,t,n):r(t,n)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return c(e,n,t)},{})};var d=c;e.exports=d},b1ia:function(e,t,n){"use strict";n.r(t);var s=n("PE4B"),i=n.n(s),r=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()},o=function(e,t){Object.keys(t).forEach(function(n){if(void 0!==e.props[n]){var s=e.props[n].default;"object"!==r(s)?e.props[n].default=t[n]:e.props[n].default=i()(s,t[n])}})},a=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)},l=n("L0bC");n("t/X3"),n("72n3");var c=function(e,t,n,s,i,r,o,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}({name:"ui-switch",mixins:[l.a],model:{prop:"model",event:"change"},props:{model:Boolean,id:String,name:String,disabled:{type:Boolean,default:!1},label:String,noRipple:{type:Boolean,default:!1}},data:function(){return{currentValue:this.model}},computed:{className:function(){return{"mdl-switch":!0,"mdl-js-switch":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple,"is-upgraded":!0,"is-checked":this.isChecked,"mdl-switch--disabled":this.disabled}},isChecked:function(){return!0===this.currentValue}},watch:{model:function(e){this.currentValue=e}},methods:{handleChange:function(){this.$emit("change",this.currentValue)}},mounted:function(){this.$mdl.upgradeElements(this.$el)}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.className},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{change:[function(t){var n=e.currentValue,s=t.target,i=!!s.checked;if(Array.isArray(n)){var r=e._i(n,null);s.checked?r<0&&(e.currentValue=n.concat([null])):r>-1&&(e.currentValue=n.slice(0,r).concat(n.slice(r+1)))}else e.currentValue=i},e.handleChange]}}),e._v(" "),n("span",{staticClass:"mdl-switch__label"},[e._t("default",[e._v(e._s(e.label))])],2)])},[],!1,null,null,null).exports;a(c);t.default=c},"jh+B":function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[],n="mdlComponentConfigInternal_";function s(t,n){for(var s=0;s<e.length;s++)if(e[s].className===t)return"undefined"!==typeof n&&(e[s]=n),e[s];return!1}function i(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function r(e,t){return-1!==i(e).indexOf(t)}function o(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var s=document.createEvent("Events");return s.initEvent(e,t,n),s}function a(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var i=0;i<e.length;i++)a(e[i].className,e[i].cssClass);else{var r=t;if("undefined"===typeof n){var o=s(r);o&&(n=o.cssClass)}for(var c=document.querySelectorAll("."+n),d=0;d<c.length;d++)l(c[d],r)}}function l(a,l){if(!("object"===typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=o("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(c),!c.defaultPrevented){var d=i(a),u=[];if(l)r(a,l)||u.push(s(l));else{var p=a.classList;e.forEach(function(e){p.contains(e.cssClass)&&-1===u.indexOf(e)&&!r(a,e.className)&&u.push(e)})}for(var h,f=0,m=u.length;f<m;f++){if(!(h=u[f]))throw new Error("Unable to find a registered component for the given class.");d.push(h.className),a.setAttribute("data-upgraded",d.join(","));var _=new h.classConstructor(a);_[n]=h,t.push(_);for(var E=0,g=h.callbacks.length;E<g;E++)h.callbacks[E](a);h.widget&&(a[h.className]=_);var C=o("mdl-componentupgraded",!0,!1);a.dispatchEvent(C)}}}function c(e){if(e){var s=t.indexOf(e);t.splice(s,1);var i=e.element_.getAttribute("data-upgraded").split(","),r=i.indexOf(e[n].classAsString);i.splice(r,1),e.element_.setAttribute("data-upgraded",i.join(","));var a=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:l,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,s=0,i=t.length;s<i;s++)(n=t[s])instanceof HTMLElement&&(l(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=s(e);n&&n.callbacks.push(t)},register:function(t){var i=!0;"undefined"===typeof t.widget&&"undefined"===typeof t.widget||(i=t.widget||t.widget);var r={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(e.forEach(function(e){if(e.cssClass===r.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===r.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");s(t.classAsString,r)||e.push(r)},downgradeElements:function(e){var n=function(e){t.filter(function(t){return t.element_===e}).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)n(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},"t/X3":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialSwitch=e,e.prototype.Constant_={TINY_TIMEOUT:.001},e.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},e.prototype.onChange_=function(e){this.updateClasses_()},e.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},e.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.onMouseUp_=function(e){this.blur_()},e.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},e.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},e.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},e.prototype.checkDisabled=e.prototype.checkDisabled,e.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},e.prototype.checkToggleState=e.prototype.checkToggleState,e.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},e.prototype.enable=e.prototype.enable,e.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},e.prototype.on=e.prototype.on,e.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},e.prototype.off=e.prototype.off,e.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var n=document.createElement("span");if(n.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(n),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var s=document.createElement("span");s.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(s),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0})}()},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(s){"object"===typeof window&&(n=window)}e.exports=n}})});