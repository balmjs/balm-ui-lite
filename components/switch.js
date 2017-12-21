!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(this,function(){return function(e){function t(n){if(s[n])return s[n].exports;var i=s[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var s={};return t.m=e,t.c=s,t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="r/AR")}({"5h5s":function(e,t,s){var n=s("VU/8"),i=s("d36i"),r=s("y5mD"),o=n(i,r,!1,null,null,null);e.exports=o.exports},Tgzx:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialSwitch=e,e.prototype.Constant_={TINY_TIMEOUT:.001},e.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},e.prototype.onChange_=function(e){this.updateClasses_()},e.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},e.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.onMouseUp_=function(e){this.blur_()},e.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},e.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},e.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},e.prototype.checkDisabled=e.prototype.checkDisabled,e.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},e.prototype.checkToggleState=e.prototype.checkToggleState,e.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},e.prototype.enable=e.prototype.enable,e.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},e.prototype.on=e.prototype.on,e.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},e.prototype.off=e.prototype.off,e.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var n=document.createElement("span");n.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(n),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0})}()},"VU/8":function(e,t){e.exports=function(e,t,s,n,i,r){var o,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,a=e.default);var d="function"===typeof a?a.options:a;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId=i);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):n&&(c=n),c){var u=d.functional,p=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,t){return c.call(t),p(e,t)}):d.beforeCreate=p?[].concat(p,c):[c]}return{esModule:o,exports:a,options:d}}},WMYY:function(e,t,s){"use strict";var n=s("bjur");s.n(n);t.a={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}},XHyz:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialRipple=e,e.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},e.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},e.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);if(this.getFrameCount()>0)return;this.setFrameCount(1);var s,n,i=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)s=Math.round(i.width/2),n=Math.round(i.height/2);else{var r=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;s=Math.round(r-i.left),n=Math.round(o-i.top)}this.setRippleXY(s,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},e.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},e.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,n,i="translate("+this.x_+"px, "+this.y_+"px)";t?(n=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(n=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",e&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+i+n,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:e,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},bjur:function(e,t){var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};s=function(){"use strict";function e(e,t){for(var s=0;s<p.length;s++)if(p[s].className===e)return"undefined"!==typeof t&&(p[s]=t),p[s];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,s){return-1!==t(e).indexOf(s)}function n(e,t,s){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:s});var n=document.createEvent("Events");return n.initEvent(e,t,s),n}function i(t,s){if("undefined"===typeof t&&"undefined"===typeof s)for(var n=0;n<p.length;n++)i(p[n].className,p[n].cssClass);else{var o=t;if("undefined"===typeof s){var a=e(o);a&&(s=a.cssClass)}for(var l=document.querySelectorAll("."+s),d=0;d<l.length;d++)r(l[d],o)}}function r(i,r){if(!("object"===typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var o=n("mdl-componentupgrading",!0,!0);if(i.dispatchEvent(o),!o.defaultPrevented){var a=t(i),l=[];if(r)s(i,r)||l.push(e(r));else{var d=i.classList;p.forEach(function(e){d.contains(e.cssClass)&&-1===l.indexOf(e)&&!s(i,e.className)&&l.push(e)})}for(var c,u=0,_=l.length;u<_;u++){if(!(c=l[u]))throw new Error("Unable to find a registered component for the given class.");a.push(c.className),i.setAttribute("data-upgraded",a.join(","));var f=new c.classConstructor(i);f[m]=c,h.push(f);for(var E=0,C=c.callbacks.length;E<C;E++)c.callbacks[E](i);c.widget&&(i[c.className]=f);var g=n("mdl-componentupgraded",!0,!1);i.dispatchEvent(g)}}}function o(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,s=0,n=e.length;s<n;s++)(t=e[s])instanceof HTMLElement&&(r(t),t.children.length>0&&o(t.children))}function a(t){var s="undefined"===typeof t.widget&&"undefined"===typeof t.widget,n=!0;s||(n=t.widget||t.widget);var i={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:n,callbacks:[]};if(p.forEach(function(e){if(e.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===i.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(m))throw new Error("MDL component classes must not have "+m+" defined as a property.");e(t.classAsString,i)||p.push(i)}function l(t,s){var n=e(t);n&&n.callbacks.push(s)}function d(){for(var e=0;e<p.length;e++)i(p[e].className)}function c(e){if(e){var t=h.indexOf(e);h.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),i=s.indexOf(e[m].classAsString);s.splice(i,1),e.element_.setAttribute("data-upgraded",s.join(","));var r=n("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(r)}}function u(e){var t=function(e){h.filter(function(t){return t.element_===e}).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)t(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var p=[],h=[],m="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:r,upgradeElements:o,upgradeAllRegistered:d,registerUpgradedCallback:l,register:a,downgradeElements:u}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})})},d36i:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("WMYY"),i=s("Tgzx"),r=(s.n(i),s("XHyz"));s.n(r);t.default={name:"ui-switch",mixins:[n.a],props:{model:Boolean,id:String,name:String,disabled:{type:Boolean,default:!1},label:String,noRipple:{type:Boolean,default:!1}},data:function(){return{currentValue:this.model}},computed:{className:function(){return{"mdl-switch":!0,"mdl-js-switch":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple,"is-upgraded":!0,"is-checked":this.isChecked,"mdl-switch--disabled":this.disabled}},isChecked:function(){return!0===this.currentValue}},watch:{model:function(e){this.currentValue=e}},methods:{handleChange:function(){this.$emit("change",this.currentValue)}},mounted:function(){this.$mdl.upgradeElements(this.$el)}}},"r/AR":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("5h5s"),i=s.n(n);"undefined"!==typeof window&&window.Vue&&window.Vue.component(i.a.name,i.a),t.default=i.a},y5mD:function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{class:e.className},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{change:[function(t){var s=e.currentValue,n=t.target,i=!!n.checked;if(Array.isArray(s)){var r=e._i(s,null);n.checked?r<0&&(e.currentValue=s.concat([null])):r>-1&&(e.currentValue=s.slice(0,r).concat(s.slice(r+1)))}else e.currentValue=i},e.handleChange]}}),e._v(" "),s("span",{staticClass:"mdl-switch__label"},[e._t("default",[e._v(e._s(e.label))])],2)])},n=[];e.exports={render:s,staticRenderFns:n}}})});