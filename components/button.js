!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI=t():e.BalmUI=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="PpJE")}({PpJE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("i+00"),s=function(e){return e&&e.__esModule?e:{default:e}}(i);"undefined"!==typeof window&&window.Vue&&window.Vue.component(s.default.name,s.default),t.default=s.default},PvRK:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialButton=e,e.prototype.Constant_={},e.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},e.prototype.blurHandler_=function(e){e&&this.element_.blur()},e.prototype.disable=function(){this.element_.disabled=!0},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.element_.disabled=!1},e.prototype.enable=e.prototype.enable,e.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:e,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})}()},"VU/8":function(e,t){e.exports=function(e,t,n,i,s,r){var o,l=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,l=e.default);var d="function"===typeof l?l.options:l;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId=s);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=u):i&&(u=i),u){var p=d.functional,c=p?d.render:d.beforeCreate;p?(d._injectStyles=u,d.render=function(e,t){return u.call(t),c(e,t)}):d.beforeCreate=c?[].concat(c,u):[u]}return{esModule:o,exports:l,options:d}}},WMYY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("bjur"),t.default={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}},XHyz:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialRipple=e,e.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},e.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},e.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);if(this.getFrameCount()>0)return;this.setFrameCount(1);var n,i,s=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)n=Math.round(s.width/2),i=Math.round(s.height/2);else{var r=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;n=Math.round(r-s.left),i=Math.round(o-s.top)}this.setRippleXY(n,i),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},e.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},e.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var n,i,s="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",e&&(s="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+s+i,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:e,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},bjur:function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};n=function(){"use strict";function e(e,t){for(var n=0;n<c.length;n++)if(c[n].className===e)return"undefined"!==typeof t&&(c[n]=t),c[n];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function n(e,n){return-1!==t(e).indexOf(n)}function i(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var i=document.createEvent("Events");return i.initEvent(e,t,n),i}function s(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var i=0;i<c.length;i++)s(c[i].className,c[i].cssClass);else{var o=t;if("undefined"===typeof n){var l=e(o);l&&(n=l.cssClass)}for(var a=document.querySelectorAll("."+n),d=0;d<a.length;d++)r(a[d],o)}}function r(s,r){if(!("object"===typeof s&&s instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var o=i("mdl-componentupgrading",!0,!0);if(s.dispatchEvent(o),!o.defaultPrevented){var l=t(s),a=[];if(r)n(s,r)||a.push(e(r));else{var d=s.classList;c.forEach(function(e){d.contains(e.cssClass)&&-1===a.indexOf(e)&&!n(s,e.className)&&a.push(e)})}for(var u,p=0,m=a.length;p<m;p++){if(!(u=a[p]))throw new Error("Unable to find a registered component for the given class.");l.push(u.className),s.setAttribute("data-upgraded",l.join(","));var _=new u.classConstructor(s);_[h]=u,f.push(_);for(var E=0,g=u.callbacks.length;E<g;E++)u.callbacks[E](s);u.widget&&(s[u.className]=_);var b=i("mdl-componentupgraded",!0,!1);s.dispatchEvent(b)}}}function o(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,n=0,i=e.length;n<i;n++)(t=e[n])instanceof HTMLElement&&(r(t),t.children.length>0&&o(t.children))}function l(t){var n="undefined"===typeof t.widget&&"undefined"===typeof t.widget,i=!0;n||(i=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(c.forEach(function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(h))throw new Error("MDL component classes must not have "+h+" defined as a property.");e(t.classAsString,s)||c.push(s)}function a(t,n){var i=e(t);i&&i.callbacks.push(n)}function d(){for(var e=0;e<c.length;e++)s(c[e].className)}function u(e){if(e){var t=f.indexOf(e);f.splice(t,1);var n=e.element_.getAttribute("data-upgraded").split(","),s=n.indexOf(e[h].classAsString);n.splice(s,1),e.element_.setAttribute("data-upgraded",n.join(","));var r=i("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(r)}}function p(e){var t=function(e){f.filter(function(t){return t.element_===e}).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)t(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var c=[],f=[],h="mdlComponentConfigInternal_";return{upgradeDom:s,upgradeElement:r,upgradeElements:o,upgradeAllRegistered:d,registerUpgradedCallback:a,register:l,downgradeElements:p}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},"i+00":function(e,t,n){var i=n("VU/8"),s=n("wB6I"),r=n("wprG"),o=i(s,r,!1,null,null,null);e.exports=o.exports},wB6I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("WMYY"),s=function(e){return e&&e.__esModule?e:{default:e}}(i);n("PvRK"),n("XHyz"),t.default={name:"ui-button",mixins:[s.default],props:{type:{type:String,default:"button"},raised:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},miniFab:{type:Boolean,default:!1},icon:{type:[Boolean,String],default:!1},colored:{type:Boolean,default:!1},primary:{type:Boolean,default:!1},accent:{type:Boolean,default:!1},noRipple:{type:Boolean,default:!1},link:{type:Boolean,default:!1}},computed:{hasRippleEffect:function(){return!this.noRipple&&!this.link},className:function(){return{"mdl-button":!0,"mdl-js-button":!0,"mdl-button--raised":this.raised,"mdl-button--fab":this.fab,"mdl-button--mini-fab":this.miniFab,"mdl-button--icon":this.icon,"mdl-button--colored":this.colored,"mdl-button--primary":this.primary,"mdl-button--accent":this.accent,"mdl-js-ripple-effect":this.hasRippleEffect,"mdl-button--link":this.link}}},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialButton"),this.hasRippleEffect&&this.$mdl.upgradeElement(this.$el,"MaterialRipple")}}},wprG:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.className,attrs:{type:e.type}},[e._t("default",[e.icon?n("i",{staticClass:"material-icons"},[e._v(e._s(e.icon))]):e._e()])],2)},i=[];e.exports={render:n,staticRenderFns:i}}})});