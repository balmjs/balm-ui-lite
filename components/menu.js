!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(this,function(){return function(t){function e(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s="xcvc")}({"+MZ2":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"+SdG":function(t,e,n){var s=n("a/OS")("keys"),i=n("GmwO");t.exports=function(t){return s[t]||(s[t]=i(t))}},"+VX5":function(t,e,n){var s=n("W6Rd"),i=Math.max,r=Math.min;t.exports=function(t,e){return t=s(t),t<0?i(t+e,0):r(t,e)}},"/Tr3":function(t,e,n){var s=n("VU/8"),i=n("lz4A"),r=n("Be4v"),o=s(i,r,!1,null,null,null);t.exports=o.exports},"30vf":function(t,e,n){var s=n("Wdy1"),i=n("iANj"),r=n("zyKz");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),s(s.S+s.F*r(function(){n(1)}),"Object",o)}},"3fMt":function(t,e,n){var s=n("SWGL");t.exports=function(t,e,n){if(s(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,s){return t.call(e,n,s)};case 3:return function(n,s,i){return t.call(e,n,s,i)}}return function(){return t.apply(e,arguments)}}},"8ANE":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"9MbE":function(t,e,n){var s=n("8ANE");t.exports=function(t,e){if(!s(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!s(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!s(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!s(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},B5V0:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},Be4v:function(t,e){var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:[t.menuClassName,t.positionClassName],attrs:{"data-mdl-for":t.dropdownId}},[t._t("default",t._l(t.currentMenu,function(e,s){return n("ui-menuitem",{key:s,attrs:{item:"object"===t.getType(e)?e:{}},on:{click:function(n){t.handleItem(e)}}})}))],2)},s=[];t.exports={render:n,staticRenderFns:s}},DvwR:function(t,e,n){var s=n("x//u"),i=n("ksFB"),r=n("PbQV")(!1),o=n("+SdG")("IE_PROTO");t.exports=function(t,e){var n,a=i(t),l=0,c=[];for(n in a)n!=o&&s(a,n)&&c.push(n);for(;e.length>l;)s(a,n=e[l++])&&(~r(c,n)||c.push(n));return c}},Eif7:function(t,e,n){n("JyN8"),t.exports=n("iANj").Object.assign},FAxf:function(t,e){var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{class:t.className,attrs:{disabled:t.item.disabled||null},on:{click:t.handleClick}},[t._t("default",[t._v(t._s(t.item[t.label]))])],2)},s=[];t.exports={render:n,staticRenderFns:s}},FCHA:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return!!t&&"object"===typeof t}function e(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||n(t)}function n(t){return t.$$typeof===u}function s(t){return Array.isArray(t)?[]:{}}function i(t,e){return e&&!1===e.clone||!l(t)?t:a(s(t),t,e)}function r(t,e,n){return t.concat(e).map(function(t){return i(t,n)})}function o(t,e,n){var s={};return l(t)&&Object.keys(t).forEach(function(e){s[e]=i(t[e],n)}),Object.keys(e).forEach(function(r){l(e[r])&&t[r]?s[r]=a(t[r],e[r],n):s[r]=i(e[r],n)}),s}function a(t,e,n){var s=Array.isArray(e),a=Array.isArray(t),l=n||{arrayMerge:r};if(s===a)return s?(l.arrayMerge||r)(t,e,n):o(t,e,n);return i(e,n)}var l=function(n){return t(n)&&!e(n)},c="function"===typeof Symbol&&Symbol.for,u=c?Symbol.for("react.element"):60103;return a.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return a(t,n,e)},{})},a})},FKWp:function(t,e,n){var s=n("8ANE");t.exports=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t}},GCs6:function(t,e,n){var s=n("FKWp"),i=n("LocR"),r=n("9MbE"),o=Object.defineProperty;e.f=n("qs+f")?Object.defineProperty:function(t,e,n){if(s(t),e=r(e,!0),s(n),i)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},GhAV:function(t,e,n){var s=n("W6Rd"),i=Math.min;t.exports=function(t){return t>0?i(s(t),9007199254740991):0}},GmwO:function(t,e){var n=0,s=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+s).toString(36))}},H9gW:function(t,e,n){"use strict";var s=n("fZjL"),i=n.n(s),r=n("JWkr"),o=function(t,e){i()(e).forEach(function(n){if(void 0!==t[n]){var s=t[n],i=e[n];Object(r.a)(s,i)}})},a=o,l=function(t){if(Object.defineProperty(t,"config",{get:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(t,e)}}}),"undefined"!==typeof window&&window.Vue)for(var e in t){var n=t[e];window.Vue.component(n.name,n)}};e.a=l},HvOH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"ui-menuitem",props:{item:{type:Object,default:function(){return{}}},label:{type:String,default:"label"},divider:{type:Boolean,default:!1}},computed:{hasDivider:function(){return this.divider||this.item.divider},className:function(){return{"mdl-menu__item":!0,"mdl-menu__item--full-bleed-divider":this.hasDivider||!1}}},methods:{handleClick:function(t){this.$emit("click",t)}}}},IMsp:function(t,e){!function(){"use strict";var t=function(t){this.element_=t,this.init()};window.MaterialMenu=t,t.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},t.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},t.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},t.prototype.init=function(){if(this.element_){var t=document.createElement("div");t.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_),this.container_=t;var e=document.createElement("div");e.classList.add(this.CssClasses_.OUTLINE),this.outline_=e,t.insertBefore(e,this.element_);var n=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),s=null;n&&(s=document.getElementById(n))&&(this.forElement_=s,s.addEventListener("click",this.handleForClick_.bind(this)),s.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this)));var i=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var r=0;r<i.length;r++)i[r].addEventListener("click",this.boundItemClick_),i[r].tabIndex="-1",i[r].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),r=0;r<i.length;r++){var o=i[r],a=document.createElement("span");a.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var l=document.createElement("span");l.classList.add(this.CssClasses_.RIPPLE),a.appendChild(l),o.appendChild(a),o.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),t.classList.add(this.CssClasses_.IS_UPGRADED)}},t.prototype.handleForClick_=function(t){if(this.element_&&this.forElement_){var e=this.forElement_.getBoundingClientRect(),n=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=n.right-e.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=n.bottom-e.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=n.right-e.right+"px",this.container_.style.bottom=n.bottom-e.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(t)},t.prototype.handleForKeyboardEvent_=function(t){if(this.element_&&this.container_&&this.forElement_){var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");e&&e.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(t.keyCode===this.Keycodes_.UP_ARROW?(t.preventDefault(),e[e.length-1].focus()):t.keyCode===this.Keycodes_.DOWN_ARROW&&(t.preventDefault(),e[0].focus()))}},t.prototype.handleItemKeyboardEvent_=function(t){if(this.element_&&this.container_){var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(e&&e.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var n=Array.prototype.slice.call(e).indexOf(t.target);if(t.keyCode===this.Keycodes_.UP_ARROW)t.preventDefault(),n>0?e[n-1].focus():e[e.length-1].focus();else if(t.keyCode===this.Keycodes_.DOWN_ARROW)t.preventDefault(),e.length>n+1?e[n+1].focus():e[0].focus();else if(t.keyCode===this.Keycodes_.SPACE||t.keyCode===this.Keycodes_.ENTER){t.preventDefault();var s=new MouseEvent("mousedown");t.target.dispatchEvent(s),s=new MouseEvent("mouseup"),t.target.dispatchEvent(s),t.target.click()}else t.keyCode===this.Keycodes_.ESCAPE&&(t.preventDefault(),this.hide())}}},t.prototype.handleItemClick_=function(t){t.target.hasAttribute("disabled")?t.stopPropagation():(this.closing_=!0,window.setTimeout(function(t){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},t.prototype.applyClip_=function(t,e){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+e+"px 0 "+e+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+t+"px 0 "+t+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+t+"px "+e+"px "+t+"px "+e+"px)":this.element_.style.clip=""},t.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(t.prototype.CssClasses_.IS_ANIMATING)},t.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},t.prototype.show=function(t){if(this.element_&&this.container_&&this.outline_){var e=this.element_.getBoundingClientRect().height,n=this.element_.getBoundingClientRect().width;this.container_.style.width=n+"px",this.container_.style.height=e+"px",this.outline_.style.width=n+"px",this.outline_.style.height=e+"px";for(var s=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,i=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),r=0;r<i.length;r++){var o=null;o=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(e-i[r].offsetTop-i[r].offsetHeight)/e*s+"s":i[r].offsetTop/e*s+"s",i[r].style.transitionDelay=o}this.applyClip_(e,n),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+n+"px "+e+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var a=function(e){e===t||this.closing_||e.target.parentNode===this.element_||(document.removeEventListener("click",a),this.hide())}.bind(this);document.addEventListener("click",a)}},t.prototype.show=t.prototype.show,t.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),e=0;e<t.length;e++)t[e].style.removeProperty("transition-delay");var n=this.element_.getBoundingClientRect(),s=n.height,i=n.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(s,i),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},t.prototype.hide=t.prototype.hide,t.prototype.toggle=function(t){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(t)},t.prototype.toggle=t.prototype.toggle,componentHandler.register({constructor:t,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0})}()},JWkr:function(t,e,n){"use strict";var s=n("fZjL"),i=n.n(s),r=n("FCHA"),o=n.n(r),a=n("um+A"),l=function(t,e){i()(e).forEach(function(n){if(void 0!==t.props[n]){var s=t.props[n].default;if("object"===Object(a.a)(s))return void(t.props[n].default=o()(s,e[n]));t.props[n].default=e[n]}})};e.a=l},JyN8:function(t,e,n){var s=n("Wdy1");s(s.S+s.F,"Object",{assign:n("xVc6")})},LocR:function(t,e,n){t.exports=!n("qs+f")&&!n("zyKz")(function(){return 7!=Object.defineProperty(n("PY1i")("div"),"a",{get:function(){return 7}}).a})},NZra:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},PY1i:function(t,e,n){var s=n("8ANE"),i=n("YjQv").document,r=s(i)&&s(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},PbQV:function(t,e,n){var s=n("ksFB"),i=n("GhAV"),r=n("+VX5");t.exports=function(t){return function(e,n,o){var a,l=s(e),c=i(l.length),u=r(o,c);if(t&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}}},SWGL:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},THEY:function(t,e){e.f=Object.getOwnPropertySymbols},"VU/8":function(t,e){t.exports=function(t,e,n,s,i,r){var o,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,a=t.default);var c="function"===typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var u;if(r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):s&&(u=s),u){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(t,e){return u.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:o,exports:a,options:c}}},W6Rd:function(t,e){var n=Math.ceil,s=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?s:n)(t)}},WMYY:function(t,e,n){"use strict";var s=n("bjur");n.n(s);e.a={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}},Wdy1:function(t,e,n){var s=n("YjQv"),i=n("iANj"),r=n("3fMt"),o=n("aLzV"),a=function(t,e,n){var l,c,u,d=t&a.F,f=t&a.G,p=t&a.S,h=t&a.P,_=t&a.B,m=t&a.W,E=f?i:i[e]||(i[e]={}),v=E.prototype,y=f?s:p?s[e]:(s[e]||{}).prototype;f&&(n=e);for(l in n)(c=!d&&y&&void 0!==y[l])&&l in E||(u=c?y[l]:n[l],E[l]=f&&"function"!=typeof y[l]?n[l]:_&&c?r(u,s):m&&y[l]==u?function(t){var e=function(e,n,s){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,s)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):h&&"function"==typeof u?r(Function.call,u):u,h&&((E.virtual||(E.virtual={}))[l]=u,t&a.R&&v&&!v[l]&&o(v,l,u)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},XHyz:function(t,e){!function(){"use strict";var t=function(t){this.element_=t,this.init()};window.MaterialRipple=t,t.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},t.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},t.prototype.downHandler_=function(t){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var e=this.element_.getBoundingClientRect();this.boundHeight=e.height,this.boundWidth=e.width,this.rippleSize_=2*Math.sqrt(e.width*e.width+e.height*e.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===t.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===t.type&&(this.ignoringMouseDown_=!0);if(this.getFrameCount()>0)return;this.setFrameCount(1);var n,s,i=t.currentTarget.getBoundingClientRect();if(0===t.clientX&&0===t.clientY)n=Math.round(i.width/2),s=Math.round(i.height/2);else{var r=void 0!==t.clientX?t.clientX:t.touches[0].clientX,o=void 0!==t.clientY?t.clientY:t.touches[0].clientY;n=Math.round(r-i.left),s=Math.round(o-i.top)}this.setRippleXY(n,s),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},t.prototype.upHandler_=function(t){t&&2!==t.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},t.prototype.init=function(){if(this.element_){var t=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(t){this.frameCount_=t},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(t,e){this.x_=t,this.y_=e},this.setRippleStyles=function(e){if(null!==this.rippleElement_){var n,s,i="translate("+this.x_+"px, "+this.y_+"px)";e?(s=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(s=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",t&&(i="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),n="translate(-50%, -50%) "+i+s,this.rippleElement_.style.webkitTransform=n,this.rippleElement_.style.msTransform=n,this.rippleElement_.style.transform=n,e?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:t,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},YTz9:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},YjQv:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},ZhOs:function(t,e,n){n("rZAI"),t.exports=n("iANj").Object.keys},"a/OS":function(t,e,n){var s=n("YjQv"),i=s["__core-js_shared__"]||(s["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},aLzV:function(t,e,n){var s=n("GCs6"),i=n("YTz9");t.exports=n("qs+f")?function(t,e,n){return s.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},bSeU:function(t,e){e.f={}.propertyIsEnumerable},bjur:function(t,e){var n={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};n=function(){"use strict";function t(t,e){for(var n=0;n<f.length;n++)if(f[n].className===t)return"undefined"!==typeof e&&(f[n]=e),f[n];return!1}function e(t){var e=t.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function n(t,n){return-1!==e(t).indexOf(n)}function s(t,e,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(t,{bubbles:e,cancelable:n});var s=document.createEvent("Events");return s.initEvent(t,e,n),s}function i(e,n){if("undefined"===typeof e&&"undefined"===typeof n)for(var s=0;s<f.length;s++)i(f[s].className,f[s].cssClass);else{var o=e;if("undefined"===typeof n){var a=t(o);a&&(n=a.cssClass)}for(var l=document.querySelectorAll("."+n),c=0;c<l.length;c++)r(l[c],o)}}function r(i,r){if(!("object"===typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var o=s("mdl-componentupgrading",!0,!0);if(i.dispatchEvent(o),!o.defaultPrevented){var a=e(i),l=[];if(r)n(i,r)||l.push(t(r));else{var c=i.classList;f.forEach(function(t){c.contains(t.cssClass)&&-1===l.indexOf(t)&&!n(i,t.className)&&l.push(t)})}for(var u,d=0,_=l.length;d<_;d++){if(!(u=l[d]))throw new Error("Unable to find a registered component for the given class.");a.push(u.className),i.setAttribute("data-upgraded",a.join(","));var m=new u.classConstructor(i);m[h]=u,p.push(m);for(var E=0,v=u.callbacks.length;E<v;E++)u.callbacks[E](i);u.widget&&(i[u.className]=m);var y=s("mdl-componentupgraded",!0,!1);i.dispatchEvent(y)}}}function o(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var e,n=0,s=t.length;n<s;n++)(e=t[n])instanceof HTMLElement&&(r(e),e.children.length>0&&o(e.children))}function a(e){var n="undefined"===typeof e.widget&&"undefined"===typeof e.widget,s=!0;n||(s=e.widget||e.widget);var i={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:s,callbacks:[]};if(f.forEach(function(t){if(t.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+t.cssClass);if(t.className===i.className)throw new Error("The provided className has already been registered")}),e.constructor.prototype.hasOwnProperty(h))throw new Error("MDL component classes must not have "+h+" defined as a property.");t(e.classAsString,i)||f.push(i)}function l(e,n){var s=t(e);s&&s.callbacks.push(n)}function c(){for(var t=0;t<f.length;t++)i(f[t].className)}function u(t){if(t){var e=p.indexOf(t);p.splice(e,1);var n=t.element_.getAttribute("data-upgraded").split(","),i=n.indexOf(t[h].classAsString);n.splice(i,1),t.element_.setAttribute("data-upgraded",n.join(","));var r=s("mdl-componentdowngraded",!0,!1);t.element_.dispatchEvent(r)}}function d(t){var e=function(t){p.filter(function(e){return e.element_===t}).forEach(u)};if(t instanceof Array||t instanceof NodeList)for(var n=0;n<t.length;n++)e(t[n]);else{if(!(t instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");e(t)}}var f=[],p=[],h="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:r,upgradeElements:o,upgradeAllRegistered:c,registerUpgradedCallback:l,register:a,downgradeElements:d}}(),n.ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},fZjL:function(t,e,n){t.exports={default:n("ZhOs"),__esModule:!0}},iANj:function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},ksFB:function(t,e,n){var s=n("wiaE"),i=n("+MZ2");t.exports=function(t){return s(i(t))}},lz4A:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("woOf"),i=n.n(s),r=n("WMYY"),o=n("IMsp"),a=(n.n(o),n("XHyz")),l=(n.n(a),n("um+A")),c=n("tGWO"),u=n.n(c),d=["top-left","top-right","bottom-left","bottom-right"];e.default={name:"ui-menu",mixins:[r.a],components:{UiMenuitem:u.a},props:{menu:{type:Array,default:function(){return[]}},dropdownId:{type:String,required:!0},noRipple:{type:Boolean,default:!1},position:{type:[Number,String],default:0}},data:function(){return{getType:l.a,currentMenu:this.menu}},computed:{menuClassName:function(){return{"mdl-menu":!0,"mdl-js-menu":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-js-ripple-effect--ignore-events":!this.noRipple}},positionClassName:function(){var t="string"===Object(l.a)(this.position)?d.indexOf(this.position)+1:this.position,e=t>0&&t<=d.length&&d[t-1];return e?"mdl-menu--"+e:""}},watch:{menu:function(t){this.currentMenu=t}},methods:{handleItem:function(t){t.disabled||this.$emit("selected",i()({},t))}},mounted:function(){this.$mdl.upgradeElements(this.$el)}}},pEGt:function(t,e,n){var s=n("DvwR"),i=n("B5V0");t.exports=Object.keys||function(t){return s(t,i)}},"qs+f":function(t,e,n){t.exports=!n("zyKz")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rZAI:function(t,e,n){var s=n("wXdB"),i=n("pEGt");n("30vf")("keys",function(){return function(t){return i(s(t))}})},tGWO:function(t,e,n){var s=n("VU/8"),i=n("HvOH"),r=n("FAxf"),o=s(i,r,!1,null,null,null);t.exports=o.exports},"um+A":function(t,e,n){"use strict";var s=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};e.a=s},wXdB:function(t,e,n){var s=n("+MZ2");t.exports=function(t){return Object(s(t))}},wiaE:function(t,e,n){var s=n("NZra");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==s(t)?t.split(""):Object(t)}},woOf:function(t,e,n){t.exports={default:n("Eif7"),__esModule:!0}},"x//u":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},xVc6:function(t,e,n){"use strict";var s=n("pEGt"),i=n("THEY"),r=n("bSeU"),o=n("wXdB"),a=n("wiaE"),l=Object.assign;t.exports=!l||n("zyKz")(function(){var t={},e={},n=Symbol(),s="abcdefghijklmnopqrst";return t[n]=7,s.split("").forEach(function(t){e[t]=t}),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=s})?function(t,e){for(var n=o(t),l=arguments.length,c=1,u=i.f,d=r.f;l>c;)for(var f,p=a(arguments[c++]),h=u?s(p).concat(u(p)):s(p),_=h.length,m=0;_>m;)d.call(p,f=h[m++])&&(n[f]=p[f]);return n}:l},xcvc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("H9gW"),i=n("/Tr3"),r=n.n(i),o=n("tGWO"),a=n.n(o);n.d(e,"UiMenu",function(){return r.a}),n.d(e,"UiMenuitem",function(){return a.a});var l={UiMenu:r.a,UiMenuitem:a.a};Object(s.a)(l),e.default=l},zyKz:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}}})});