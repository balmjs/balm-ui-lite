!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="9O0+")}({"29s/":function(e,t,n){var r=n("WEpk"),i=n("5T2Y"),s=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n("uOPS")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(e,t,n){var r=n("eaoh");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"2faE":function(e,t,n){var r=n("5K7Z"),i=n("eUtF"),s=n("G8Mo"),o=Object.defineProperty;t.f=n("jmDH")?Object.defineProperty:function(e,t,n){if(r(e),t=s(t,!0),r(n),i)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},"5K7Z":function(e,t,n){var r=n("93I4");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"5T2Y":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(e,t,n){var r=n("B+OT"),i=n("NsO/"),s=n("W070")(!1),o=n("VVlx")("IE_PROTO");e.exports=function(e,t){var n,a=i(e),u=0,c=[];for(n in a)n!=o&&r(a,n)&&c.push(n);for(;t.length>u;)r(a,n=t[u++])&&(~s(c,n)||c.push(n));return c}},"72n3":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialRipple=e,e.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},e.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},e.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{if("touchstart"===e.type&&(this.ignoringMouseDown_=!0),this.getFrameCount()>0)return;this.setFrameCount(1);var n,r,i=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)n=Math.round(i.width/2),r=Math.round(i.height/2);else{var s=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;n=Math.round(s-i.left),r=Math.round(o-i.top)}this.setRippleXY(n,r),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},e.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},e.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var n,r,i="translate("+this.x_+"px, "+this.y_+"px)";t?(r=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(r=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",e&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+i+r,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:e,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},"93I4":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"9O0+":function(e,t,n){"use strict";n.r(t);var r=n("iri3"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.className},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"mdl-icon-toggle__input",attrs:{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled},domProps:{value:e.value,checked:Array.isArray(e.currentValue)?e._i(e.currentValue,e.value)>-1:e.currentValue},on:{change:[function(t){var n=e.currentValue,r=t.target,i=!!r.checked;if(Array.isArray(n)){var s=e.value,o=e._i(n,s);r.checked?o<0&&(e.currentValue=n.concat([s])):o>-1&&(e.currentValue=n.slice(0,o).concat(n.slice(o+1)))}else e.currentValue=i},e.handleChange]}}),e._v(" "),e.icon?n("span",{staticClass:"mdl-icon-toggle__label material-icons"},[e._t("default",[e._v(e._s(e.icon))])],2):n("span",{staticClass:"mdl-icon-toggle__label custom-icons"},[e._t("default")],2)])};i._withStripped=!0;var s=n("L0bC"),o=(n("Yw4V"),n("72n3"),n("WuiG")),a={name:"ui-icon-toggle",mixins:[s.a],model:{prop:"model",event:"change"},props:{model:{type:[Array,String,Number,Boolean],required:!0,default:!1},id:String,name:String,disabled:{type:Boolean,default:!1},value:[String,Number,Boolean],noRipple:{type:Boolean,default:!1},icon:{type:[Boolean,String],default:!1}},data:function(){return{currentValue:this.model}},computed:{className:function(){return{"mdl-icon-toggle":!0,"mdl-js-icon-toggle":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple,"is-upgraded":!0,"is-checked":this.isChecked,"mdl-icon-toggle--disabled":this.disabled}},isChecked:function(){return"array"===Object(o.a)(this.currentValue)?this.currentValue.indexOf(this.value)>-1:this.currentValue==this.value||!0===this.currentValue}},watch:{model:function(e){this.currentValue=e}},methods:{handleChange:function(){this.$emit("change",this.currentValue)}},mounted:function(){this.$mdl.upgradeElements(this.$el)}},u=n("KHd+"),c=Object(u.a)(a,i,[],!1,null,null,null);c.options.__file="src/scripts/components/form/icon-toggle.vue";var l=c.exports;Object(r.a)(l);t.default=l},Aqzh:function(e,t,n){e.exports=function(){"use strict";var e=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var n=Object.prototype.toString.call(e);return"[object RegExp]"===n||"[object Date]"===n||function(e){return e.$$typeof===t}(e)}(e)},t="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function r(e,t,r){return e.concat(t).map(function(e){return n(e,r)})}function i(t,s,o){(o=o||{}).arrayMerge=o.arrayMerge||r,o.isMergeableObject=o.isMergeableObject||e;var a=Array.isArray(s),u=Array.isArray(t),c=a===u;return c?a?o.arrayMerge(t,s,o):function(e,t,r){var s={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(t){s[t]=n(e[t],r)}),Object.keys(t).forEach(function(o){r.isMergeableObject(t[o])&&e[o]?s[o]=i(e[o],t[o],r):s[o]=n(t[o],r)}),s}(t,s,o):n(s,o)}return i.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return i(e,n,t)},{})},i}()},"B+OT":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},D8kY:function(e,t,n){var r=n("Ojgd"),i=Math.max,s=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):s(e,t)}},FpHa:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(e,t,n){var r=n("93I4");e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},GQeE:function(e,t,n){e.exports={default:n("iq4v"),__esModule:!0}},Hsns:function(e,t,n){var r=n("93I4"),i=n("5T2Y").document,s=r(i)&&r(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},JB68:function(e,t,n){var r=n("Jes0");e.exports=function(e){return Object(r(e))}},Jes0:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"KHd+":function(e,t,n){"use strict";function r(e,t,n,r,i,s,o,a){var u,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return r})},KUxP:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},L0bC:function(e,t,n){"use strict";(function(e){n("jh+B");var r="[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV,i=window.componentHandler;r&&(e.componentHandler=i,i=e.componentHandler),t.a={data:function(){return{$mdl:i}},created:function(){this.$mdl||(this.$mdl=i)}}}).call(this,n("yLpj"))},M1xp:function(e,t,n){var r=n("a0xu");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},Mqbl:function(e,t,n){var r=n("JB68"),i=n("w6GO");n("zn7N")("keys",function(){return function(e){return i(r(e))}})},NegM:function(e,t,n){var r=n("2faE"),i=n("rr1i");e.exports=n("jmDH")?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"NsO/":function(e,t,n){var r=n("M1xp"),i=n("Jes0");e.exports=function(e){return r(i(e))}},Ojgd:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},VVlx:function(e,t,n){var r=n("29s/")("keys"),i=n("YqAc");e.exports=function(e){return r[e]||(r[e]=i(e))}},W070:function(e,t,n){var r=n("NsO/"),i=n("tEej"),s=n("D8kY");e.exports=function(e){return function(t,n,o){var a,u=r(t),c=i(u.length),l=s(o,c);if(e&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},WEpk:function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},WuiG:function(e,t,n){"use strict";t.a=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},Y7ZC:function(e,t,n){var r=n("5T2Y"),i=n("WEpk"),s=n("2GTP"),o=n("NegM"),a=n("B+OT"),u=function(e,t,n){var c,l,p,d=e&u.F,f=e&u.G,h=e&u.S,m=e&u.P,_=e&u.B,g=e&u.W,E=f?i:i[t]||(i[t]={}),v=E.prototype,y=f?r:h?r[t]:(r[t]||{}).prototype;for(c in f&&(n=t),n)(l=!d&&y&&void 0!==y[c])&&a(E,c)||(p=l?y[c]:n[c],E[c]=f&&"function"!=typeof y[c]?n[c]:_&&l?s(p,r):g&&y[c]==p?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(p):m&&"function"==typeof p?s(Function.call,p):p,m&&((E.virtual||(E.virtual={}))[c]=p,e&u.R&&v&&!v[c]&&o(v,c,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},YqAc:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},Yw4V:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialIconToggle=e,e.prototype.Constant_={TINY_TIMEOUT:.001},e.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},e.prototype.onChange_=function(e){this.updateClasses_()},e.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},e.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.onMouseUp_=function(e){this.blur_()},e.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},e.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},e.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},e.prototype.checkToggleState=e.prototype.checkToggleState,e.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},e.prototype.checkDisabled=e.prototype.checkDisabled,e.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},e.prototype.enable=e.prototype.enable,e.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},e.prototype.check=e.prototype.check,e.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},e.prototype.uncheck=e.prototype.uncheck,e.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0})}()},a0xu:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},eUtF:function(e,t,n){e.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},gVot:function(e,t,n){"use strict";var r=n("GQeE"),i=n.n(r),s=n("Aqzh"),o=n.n(s),a=n("WuiG");t.a=function(e,t){i()(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;"object"!==Object(a.a)(r)?(console.warn("The "+n+" prop cannot be overwritten."),e.props[n].default=t[n]):e.props[n].default=o()(r,t[n])}})}},iq4v:function(e,t,n){n("Mqbl"),e.exports=n("WEpk").Object.keys},iri3:function(e,t,n){"use strict";var r=n("gVot");t.a=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)}},"jh+B":function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[],n="mdlComponentConfigInternal_";function r(t,n){for(var r=0;r<e.length;r++)if(e[r].className===t)return"undefined"!==typeof n&&(e[r]=n),e[r];return!1}function i(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,t){return-1!==i(e).indexOf(t)}function o(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function a(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var i=0;i<e.length;i++)a(e[i].className,e[i].cssClass);else{var s=t;if("undefined"===typeof n){var o=r(s);o&&(n=o.cssClass)}for(var c=document.querySelectorAll("."+n),l=0;l<c.length;l++)u(c[l],s)}}function u(a,u){if(!("object"===typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=o("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(c),!c.defaultPrevented){var l=i(a),p=[];if(u)s(a,u)||p.push(r(u));else{var d=a.classList;e.forEach(function(e){d.contains(e.cssClass)&&-1===p.indexOf(e)&&!s(a,e.className)&&p.push(e)})}for(var f,h=0,m=p.length;h<m;h++){if(!(f=p[h]))throw new Error("Unable to find a registered component for the given class.");l.push(f.className),a.setAttribute("data-upgraded",l.join(","));var _=new f.classConstructor(a);_[n]=f,t.push(_);for(var g=0,E=f.callbacks.length;g<E;g++)f.callbacks[g](a);f.widget&&(a[f.className]=_);var v=o("mdl-componentupgraded",!0,!1);a.dispatchEvent(v)}}}function c(e){if(e){var r=t.indexOf(e);t.splice(r,1);var i=e.element_.getAttribute("data-upgraded").split(","),s=i.indexOf(e[n].classAsString);i.splice(s,1),e.element_.setAttribute("data-upgraded",i.join(","));var a=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:u,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,r=0,i=t.length;r<i;r++)(n=t[r])instanceof HTMLElement&&(u(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=r(e);n&&n.callbacks.push(t)},register:function(t){var i=!0;"undefined"===typeof t.widget&&"undefined"===typeof t.widget||(i=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(e.forEach(function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");r(t.classAsString,s)||e.push(s)},downgradeElements:function(e){var n=function(e){t.filter(function(t){return t.element_===e}).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var r=0;r<e.length;r++)n(e[r]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},jmDH:function(e,t,n){e.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rr1i:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},tEej:function(e,t,n){var r=n("Ojgd"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},uOPS:function(e,t){e.exports=!0},w6GO:function(e,t,n){var r=n("5vMV"),i=n("FpHa");e.exports=Object.keys||function(e){return r(e,i)}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},zn7N:function(e,t,n){var r=n("Y7ZC"),i=n("WEpk"),s=n("KUxP");e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],o={};o[e]=t(n),r(r.S+r.F*s(function(){n(1)}),"Object",o)}}})});