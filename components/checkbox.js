!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="Q4lY")}({"6Qfc":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialCheckbox=e,e.prototype.Constant_={TINY_TIMEOUT:.001},e.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},e.prototype.onChange_=function(e){this.updateClasses_()},e.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},e.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.onMouseUp_=function(e){this.blur_()},e.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},e.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},e.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},e.prototype.checkToggleState=e.prototype.checkToggleState,e.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},e.prototype.checkDisabled=e.prototype.checkDisabled,e.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},e.prototype.enable=e.prototype.enable,e.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},e.prototype.check=e.prototype.check,e.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},e.prototype.uncheck=e.prototype.uncheck,e.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var n=document.createElement("span");if(n.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(n),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var s=document.createElement("span");s.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(s),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},componentHandler.register({constructor:e,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0})}()},KK3e:function(e,t,n){var s=n("VU/8"),i=n("W4oQ"),r=n("v5IT"),o=s(i,r,!1,null,null,null);e.exports=o.exports},Q4lY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("KK3e"),i=n.n(s);"undefined"!==typeof window&&window.Vue&&window.Vue.component(i.a.name,i.a),t.default=i.a},"VU/8":function(e,t){e.exports=function(e,t,n,s,i,r){var o,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,a=e.default);var d="function"===typeof a?a.options:a;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),i&&(d._scopeId=i);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):s&&(c=s),c){var u=d.functional,p=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,t){return c.call(t),p(e,t)}):d.beforeCreate=p?[].concat(p,c):[c]}return{esModule:o,exports:a,options:d}}},W4oQ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("WMYY"),i=n("6Qfc"),r=(n.n(i),n("XHyz")),o=(n.n(r),n("um+A"));t.default={name:"ui-checkbox",mixins:[s.a],props:{model:{type:[Array,String,Number,Boolean],default:!1},id:String,name:String,disabled:{type:Boolean,default:!1},value:[String,Number,Boolean],label:String,noRipple:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},filled:{type:Boolean,default:!1}},data:function(){return{currentValue:this.model}},computed:{className:function(){return{"mdl-checkbox":!0,"mdl-js-checkbox":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple,"is-upgraded":!0,"is-checked":this.isChecked,"mdl-checkbox--disabled":this.disabled,"is-filled":this.filled}},isChecked:function(){return"array"===Object(o.a)(this.currentValue)?this.currentValue.indexOf(this.value)>-1:this.currentValue==this.value||!0===this.currentValue}},watch:{model:function(e){this.currentValue=e}},methods:{handleChange:function(){this.$emit("change",this.currentValue)}},mounted:function(){this.$mdl.upgradeElements(this.$el)}}},WMYY:function(e,t,n){"use strict";var s=n("bjur");n.n(s);t.a={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}},XHyz:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialRipple=e,e.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},e.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},e.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);if(this.getFrameCount()>0)return;this.setFrameCount(1);var n,s,i=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)n=Math.round(i.width/2),s=Math.round(i.height/2);else{var r=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;n=Math.round(r-i.left),s=Math.round(o-i.top)}this.setRippleXY(n,s),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},e.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},e.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var n,s,i="translate("+this.x_+"px, "+this.y_+"px)";t?(s=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(s=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",e&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+i+s,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:e,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},bjur:function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};n=function(){"use strict";function e(e,t){for(var n=0;n<p.length;n++)if(p[n].className===e)return"undefined"!==typeof t&&(p[n]=t),p[n];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function n(e,n){return-1!==t(e).indexOf(n)}function s(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var s=document.createEvent("Events");return s.initEvent(e,t,n),s}function i(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var s=0;s<p.length;s++)i(p[s].className,p[s].cssClass);else{var o=t;if("undefined"===typeof n){var a=e(o);a&&(n=a.cssClass)}for(var l=document.querySelectorAll("."+n),d=0;d<l.length;d++)r(l[d],o)}}function r(i,r){if(!("object"===typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var o=s("mdl-componentupgrading",!0,!0);if(i.dispatchEvent(o),!o.defaultPrevented){var a=t(i),l=[];if(r)n(i,r)||l.push(e(r));else{var d=i.classList;p.forEach(function(e){d.contains(e.cssClass)&&-1===l.indexOf(e)&&!n(i,e.className)&&l.push(e)})}for(var c,u=0,_=l.length;u<_;u++){if(!(c=l[u]))throw new Error("Unable to find a registered component for the given class.");a.push(c.className),i.setAttribute("data-upgraded",a.join(","));var f=new c.classConstructor(i);f[m]=c,h.push(f);for(var E=0,C=c.callbacks.length;E<C;E++)c.callbacks[E](i);c.widget&&(i[c.className]=f);var g=s("mdl-componentupgraded",!0,!1);i.dispatchEvent(g)}}}function o(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,n=0,s=e.length;n<s;n++)(t=e[n])instanceof HTMLElement&&(r(t),t.children.length>0&&o(t.children))}function a(t){var n="undefined"===typeof t.widget&&"undefined"===typeof t.widget,s=!0;n||(s=t.widget||t.widget);var i={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:s,callbacks:[]};if(p.forEach(function(e){if(e.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===i.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(m))throw new Error("MDL component classes must not have "+m+" defined as a property.");e(t.classAsString,i)||p.push(i)}function l(t,n){var s=e(t);s&&s.callbacks.push(n)}function d(){for(var e=0;e<p.length;e++)i(p[e].className)}function c(e){if(e){var t=h.indexOf(e);h.splice(t,1);var n=e.element_.getAttribute("data-upgraded").split(","),i=n.indexOf(e[m].classAsString);n.splice(i,1),e.element_.setAttribute("data-upgraded",n.join(","));var r=s("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(r)}}function u(e){var t=function(e){h.filter(function(t){return t.element_===e}).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)t(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var p=[],h=[],m="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:r,upgradeElements:o,upgradeAllRegistered:d,registerUpgradedCallback:l,register:a,downgradeElements:u}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},"um+A":function(e,t,n){"use strict";var s=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};t.a=s},v5IT:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.className},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"mdl-checkbox__input",attrs:{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled},domProps:{value:e.value,checked:Array.isArray(e.currentValue)?e._i(e.currentValue,e.value)>-1:e.currentValue},on:{change:[function(t){var n=e.currentValue,s=t.target,i=!!s.checked;if(Array.isArray(n)){var r=e.value,o=e._i(n,r);s.checked?o<0&&(e.currentValue=n.concat([r])):o>-1&&(e.currentValue=n.slice(0,o).concat(n.slice(o+1)))}else e.currentValue=i},e.handleChange]}}),e._v(" "),e.hideLabel?e._e():n("span",{staticClass:"mdl-checkbox__label"},[e._t("default",[e._v(e._s(e.label))])],2)])},s=[];e.exports={render:n,staticRenderFns:s}}})});