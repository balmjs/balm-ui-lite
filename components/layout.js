!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var r=s[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var s={};return e.m=t,e.c=s,e.d=function(t,s,n){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s="2g57")}({"+MZ2":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"+SdG":function(t,e,s){var n=s("a/OS")("keys"),r=s("GmwO");t.exports=function(t){return n[t]||(n[t]=r(t))}},"+VX5":function(t,e,s){var n=s("W6Rd"),r=Math.max,a=Math.min;t.exports=function(t,e){return t=n(t),t<0?r(t+e,0):a(t,e)}},"00Up":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"ui-layout-tab-bar",props:{noRipple:{type:Boolean,default:!1},manualSwitch:{type:Boolean,default:!1}},data:function(){return{tabs:[],panels:[]}},computed:{className:function(){return{"mdl-layout__tab-bar":!0,"mdl-js-ripple-effect":!this.noRipple,"mdl-layout__tab-manual-switch":this.manualSwitch}}},methods:{handleChange:function(t){this.$emit("change",+t)}}}},"0i5d":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("5cFp");e.default={name:"ui-layout-spacer",mixins:[n.a]}},"2QS9":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ui-layout-tab-panel"}},"2g57":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("H9gW"),r=s("exdS"),a=s.n(r),i=s("nnqT"),o=s.n(i),l=s("VRtv"),c=s.n(l),u=s("NlQq"),d=s.n(u),_=s("3wTc"),f=s.n(_),h=s("6qet"),p=s.n(h),m=s("RvF+"),C=s.n(m),E=s("46/a"),v=s.n(E),y=s("ok/Q"),A=s.n(y),L=s("PV+C"),b=s.n(L),S=s("AbRk"),g=s.n(S),w=s("4sQh"),T=s.n(w);s.d(e,"UiLayout",function(){return a.a}),s.d(e,"UiLayoutHeader",function(){return o.a}),s.d(e,"UiLayoutHeaderRow",function(){return c.a}),s.d(e,"UiLayoutTitle",function(){return d.a}),s.d(e,"UiLayoutSpacer",function(){return f.a}),s.d(e,"UiLayoutDrawer",function(){return p.a}),s.d(e,"UiLayoutContent",function(){return C.a}),s.d(e,"UiLayoutTabBar",function(){return v.a}),s.d(e,"UiLayoutTab",function(){return A.a}),s.d(e,"UiLayoutTabPanel",function(){return b.a}),s.d(e,"UiNav",function(){return g.a}),s.d(e,"UiNavLink",function(){return T.a});var R={UiLayout:a.a,UiLayoutHeader:o.a,UiLayoutHeaderRow:c.a,UiLayoutTitle:d.a,UiLayoutSpacer:f.a,UiLayoutDrawer:p.a,UiLayoutContent:C.a,UiLayoutTabBar:v.a,UiLayoutTab:A.a,UiLayoutTabPanel:b.a,UiNav:g.a,UiNavLink:T.a};Object(n.a)(R),e.default=R},"2vql":function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"mdl-layout__tab",attrs:{href:"javascript:void(0);"},on:{click:function(e){e.preventDefault(),t.$parent.handleChange(t.$vnode.key)}}},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},"30vf":function(t,e,s){var n=s("Wdy1"),r=s("iANj"),a=s("zyKz");t.exports=function(t,e){var s=(r.Object||{})[t]||Object[t],i={};i[t]=e(s),n(n.S+n.F*a(function(){s(1)}),"Object",i)}},"3fMt":function(t,e,s){var n=s("SWGL");t.exports=function(t,e,s){if(n(t),void 0===e)return t;switch(s){case 1:return function(s){return t.call(e,s)};case 2:return function(s,n){return t.call(e,s,n)};case 3:return function(s,n,r){return t.call(e,s,n,r)}}return function(){return t.apply(e,arguments)}}},"3wTc":function(t,e,s){var n=s("VU/8"),r=s("0i5d"),a=s("qGTm"),i=n(r,a,!1,null,null,null);t.exports=i.exports},"46/a":function(t,e,s){var n=s("VU/8"),r=s("00Up"),a=s("wwac"),i=n(r,a,!1,null,null,null);t.exports=i.exports},"4sQh":function(t,e,s){var n=s("VU/8"),r=s("5Dwq"),a=s("InAz"),i=n(r,a,!1,null,null,null);t.exports=i.exports},"5Dwq":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ui-nav-link"}},"5cFp":function(t,e,s){"use strict";e.a={props:{largeScreenOnly:{type:Boolean,default:!1},smallScreenOnly:{type:Boolean,default:!1}},computed:{screenClassName:function(){return{"mdl-layout--large-screen-only":this.largeScreenOnly,"mdl-layout--small-screen-only":this.smallScreenOnly}}}}},"5x0J":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("WMYY"),r=s("d041"),a=(s.n(r),s("XHyz"));s.n(a);e.default={name:"ui-layout",mixins:[n.a],props:{active:{type:Number,default:-1},fixedDrawer:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!1},noDrawerButton:{type:Boolean,default:!1},noDesktopDrawerButton:{type:Boolean,default:!1},fixedTabs:{type:Boolean,default:!1}},data:function(){return{tabs:null,panels:null}},computed:{className:function(){return{"mdl-layout":!0,"mdl-js-layout":!0,"mdl-layout--fixed-drawer":this.fixedDrawer,"mdl-layout--fixed-header":this.fixedHeader,"mdl-layout--no-drawer-button":this.noDrawerButton,"mdl-layout--no-desktop-drawer-button":this.noDesktopDrawerButton,"mdl-layout--fixed-tabs":this.fixedTabs}}},methods:{activeItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.length&&e.forEach(function(e,s){s!==+t||e.classList.contains("is-active")?e.classList.remove("is-active"):e.classList.add("is-active")})},activeTab:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.active;this.activeItem(t,this.tabs),this.activeItem(t,this.panels)}},watch:{active:function(t){this.tabs&&this.panels&&this.activeTab(t)}},mounted:function(){this.$mdl.upgradeElements(this.$el),this.active>-1&&(this.tabs=this.$el.querySelectorAll(".mdl-layout__tab"),this.panels=this.$el.querySelectorAll(".mdl-layout__tab-panel"),this.activeTab())}}},"6qet":function(t,e,s){var n=s("VU/8"),r=s("kbc1"),a=s("J6f7"),i=n(r,a,!1,null,null,null);t.exports=i.exports},"8ANE":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"9MbE":function(t,e,s){var n=s("8ANE");t.exports=function(t,e){if(!n(t))return t;var s,r;if(e&&"function"==typeof(s=t.toString)&&!n(r=s.call(t)))return r;if("function"==typeof(s=t.valueOf)&&!n(r=s.call(t)))return r;if(!e&&"function"==typeof(s=t.toString)&&!n(r=s.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},AbRk:function(t,e,s){var n=s("VU/8"),r=s("sQ+G"),a=s("VjLD"),i=n(r,a,!1,null,null,null);t.exports=i.exports},B5V0:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},DvwR:function(t,e,s){var n=s("x//u"),r=s("ksFB"),a=s("PbQV")(!1),i=s("+SdG")("IE_PROTO");t.exports=function(t,e){var s,o=r(t),l=0,c=[];for(s in o)s!=i&&n(o,s)&&c.push(s);for(;e.length>l;)n(o,s=e[l++])&&(~a(c,s)||c.push(s));return c}},FCHA:function(t,e,s){!function(e,s){t.exports=s()}(0,function(){"use strict";function t(t){return!!t&&"object"===typeof t}function e(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||s(t)}function s(t){return t.$$typeof===u}function n(t){return Array.isArray(t)?[]:{}}function r(t,e){return e&&!1===e.clone||!l(t)?t:o(n(t),t,e)}function a(t,e,s){return t.concat(e).map(function(t){return r(t,s)})}function i(t,e,s){var n={};return l(t)&&Object.keys(t).forEach(function(e){n[e]=r(t[e],s)}),Object.keys(e).forEach(function(a){l(e[a])&&t[a]?n[a]=o(t[a],e[a],s):n[a]=r(e[a],s)}),n}function o(t,e,s){var n=Array.isArray(e),o=Array.isArray(t),l=s||{arrayMerge:a};if(n===o)return n?(l.arrayMerge||a)(t,e,s):i(t,e,s);return r(e,s)}var l=function(s){return t(s)&&!e(s)},c="function"===typeof Symbol&&Symbol.for,u=c?Symbol.for("react.element"):60103;return o.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,s){return o(t,s,e)},{})},o})},FKWp:function(t,e,s){var n=s("8ANE");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},GCs6:function(t,e,s){var n=s("FKWp"),r=s("LocR"),a=s("9MbE"),i=Object.defineProperty;e.f=s("qs+f")?Object.defineProperty:function(t,e,s){if(n(t),e=a(e,!0),n(s),r)try{return i(t,e,s)}catch(t){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(t[e]=s.value),t}},GhAV:function(t,e,s){var n=s("W6Rd"),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},GmwO:function(t,e){var s=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++s+n).toString(36))}},H9gW:function(t,e,s){"use strict";var n=s("fZjL"),r=s.n(n),a=s("JWkr"),i=function(t,e){r()(e).forEach(function(s){if(void 0!==t[s]){var n=t[s],r=e[s];Object(a.a)(n,r)}})},o=i,l=function(t){if(Object.defineProperty(t,"config",{get:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(t,e)}}}),"undefined"!==typeof window&&window.Vue)for(var e in t){var s=t[e];window.Vue.component(s.name,s)}};e.a=l},InAz:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"mdl-navigation__link"},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},J2GG:function(t,e){var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{class:t.className},[s("div",{staticClass:"mdl-layout-icon"},[t._t("icon")],2),t._v(" "),t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},J6f7:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"mdl-layout__drawer"},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},JWkr:function(t,e,s){"use strict";var n=s("fZjL"),r=s.n(n),a=s("FCHA"),i=s.n(a),o=s("um+A"),l=function(t,e){r()(e).forEach(function(s){if(void 0!==t.props[s]){var n=t.props[s].default;if("object"===Object(o.a)(n))return void(t.props[s].default=i()(n,e[s]));t.props[s].default=e[s]}})};e.a=l},Jg4A:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["mdl-layout__title",t.screenClassName]},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},LocR:function(t,e,s){t.exports=!s("qs+f")&&!s("zyKz")(function(){return 7!=Object.defineProperty(s("PY1i")("div"),"a",{get:function(){return 7}}).a})},NZra:function(t,e){var s={}.toString;t.exports=function(t){return s.call(t).slice(8,-1)}},NlQq:function(t,e,s){var n=s("VU/8"),r=s("ZB79"),a=s("Jg4A"),i=n(r,a,!1,null,null,null);t.exports=i.exports},"PV+C":function(t,e,s){var n=s("VU/8"),r=s("2QS9"),a=s("d6H/"),i=n(r,a,!1,null,null,null);t.exports=i.exports},PY1i:function(t,e,s){var n=s("8ANE"),r=s("YjQv").document,a=n(r)&&n(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},PbQV:function(t,e,s){var n=s("ksFB"),r=s("GhAV"),a=s("+VX5");t.exports=function(t){return function(e,s,i){var o,l=n(e),c=r(l.length),u=a(i,c);if(t&&s!=s){for(;c>u;)if((o=l[u++])!=o)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===s)return t||u||0;return!t&&-1}}},"RvF+":function(t,e,s){var n=s("VU/8"),r=s("gDG5"),a=s("onra"),i=n(r,a,!1,null,null,null);t.exports=i.exports},SWGL:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},VRtv:function(t,e,s){var n=s("VU/8"),r=s("k0zh"),a=s("ahBH"),i=n(r,a,!1,null,null,null);t.exports=i.exports},"VU/8":function(t,e){t.exports=function(t,e,s,n,r,a){var i,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(i=t,o=t.default);var c="function"===typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),s&&(c.functional=!0),r&&(c._scopeId=r);var u;if(a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):n&&(u=n),u){var d=c.functional,_=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(t,e){return u.call(e),_(t,e)}):c.beforeCreate=_?[].concat(_,u):[u]}return{esModule:i,exports:o,options:c}}},VjLD:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("nav",{class:["mdl-navigation",t.screenClassName]},[t._t("default",null,{className:t.CLASSNAME_LINK})],2)},n=[];t.exports={render:s,staticRenderFns:n}},W6Rd:function(t,e){var s=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:s)(t)}},WMYY:function(t,e,s){"use strict";var n=s("bjur");s.n(n);e.a={data:function(){return{$mdl:window.componentHandler}},created:function(){this.$mdl||(this.$mdl=window.componentHandler)}}},Wdy1:function(t,e,s){var n=s("YjQv"),r=s("iANj"),a=s("3fMt"),i=s("aLzV"),o=function(t,e,s){var l,c,u,d=t&o.F,_=t&o.G,f=t&o.S,h=t&o.P,p=t&o.B,m=t&o.W,C=_?r:r[e]||(r[e]={}),E=C.prototype,v=_?n:f?n[e]:(n[e]||{}).prototype;_&&(s=e);for(l in s)(c=!d&&v&&void 0!==v[l])&&l in C||(u=c?v[l]:s[l],C[l]=_&&"function"!=typeof v[l]?s[l]:p&&c?a(u,n):m&&v[l]==u?function(t){var e=function(e,s,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,s)}return new t(e,s,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):h&&"function"==typeof u?a(Function.call,u):u,h&&((C.virtual||(C.virtual={}))[l]=u,t&o.R&&E&&!E[l]&&i(E,l,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},XHyz:function(t,e){!function(){"use strict";var t=function(t){this.element_=t,this.init()};window.MaterialRipple=t,t.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},t.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},t.prototype.downHandler_=function(t){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var e=this.element_.getBoundingClientRect();this.boundHeight=e.height,this.boundWidth=e.width,this.rippleSize_=2*Math.sqrt(e.width*e.width+e.height*e.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===t.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===t.type&&(this.ignoringMouseDown_=!0);if(this.getFrameCount()>0)return;this.setFrameCount(1);var s,n,r=t.currentTarget.getBoundingClientRect();if(0===t.clientX&&0===t.clientY)s=Math.round(r.width/2),n=Math.round(r.height/2);else{var a=void 0!==t.clientX?t.clientX:t.touches[0].clientX,i=void 0!==t.clientY?t.clientY:t.touches[0].clientY;s=Math.round(a-r.left),n=Math.round(i-r.top)}this.setRippleXY(s,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},t.prototype.upHandler_=function(t){t&&2!==t.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},t.prototype.init=function(){if(this.element_){var t=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(t){this.frameCount_=t},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(t,e){this.x_=t,this.y_=e},this.setRippleStyles=function(e){if(null!==this.rippleElement_){var s,n,r="translate("+this.x_+"px, "+this.y_+"px)";e?(n=this.Constant_.INITIAL_SCALE,this.Constant_.INITIAL_SIZE):(n=this.Constant_.FINAL_SCALE,this.rippleSize_+"px",t&&(r="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+r+n,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,e?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},componentHandler.register({constructor:t,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}()},YTz9:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},YjQv:function(t,e){var s=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},ZB79:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("5cFp");e.default={name:"ui-layout-title",mixins:[n.a]}},ZhOs:function(t,e,s){s("rZAI"),t.exports=s("iANj").Object.keys},"a/OS":function(t,e,s){var n=s("YjQv"),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},aLzV:function(t,e,s){var n=s("GCs6"),r=s("YTz9");t.exports=s("qs+f")?function(t,e,s){return n.f(t,e,r(1,s))}:function(t,e,s){return t[e]=s,t}},ahBH:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["mdl-layout__header-row",t.screenClassName]},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},bjur:function(t,e){var s={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};s=function(){"use strict";function t(t,e){for(var s=0;s<_.length;s++)if(_[s].className===t)return"undefined"!==typeof e&&(_[s]=e),_[s];return!1}function e(t){var e=t.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function s(t,s){return-1!==e(t).indexOf(s)}function n(t,e,s){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(t,{bubbles:e,cancelable:s});var n=document.createEvent("Events");return n.initEvent(t,e,s),n}function r(e,s){if("undefined"===typeof e&&"undefined"===typeof s)for(var n=0;n<_.length;n++)r(_[n].className,_[n].cssClass);else{var i=e;if("undefined"===typeof s){var o=t(i);o&&(s=o.cssClass)}for(var l=document.querySelectorAll("."+s),c=0;c<l.length;c++)a(l[c],i)}}function a(r,a){if(!("object"===typeof r&&r instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var i=n("mdl-componentupgrading",!0,!0);if(r.dispatchEvent(i),!i.defaultPrevented){var o=e(r),l=[];if(a)s(r,a)||l.push(t(a));else{var c=r.classList;_.forEach(function(t){c.contains(t.cssClass)&&-1===l.indexOf(t)&&!s(r,t.className)&&l.push(t)})}for(var u,d=0,p=l.length;d<p;d++){if(!(u=l[d]))throw new Error("Unable to find a registered component for the given class.");o.push(u.className),r.setAttribute("data-upgraded",o.join(","));var m=new u.classConstructor(r);m[h]=u,f.push(m);for(var C=0,E=u.callbacks.length;C<E;C++)u.callbacks[C](r);u.widget&&(r[u.className]=m);var v=n("mdl-componentupgraded",!0,!1);r.dispatchEvent(v)}}}function i(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var e,s=0,n=t.length;s<n;s++)(e=t[s])instanceof HTMLElement&&(a(e),e.children.length>0&&i(e.children))}function o(e){var s="undefined"===typeof e.widget&&"undefined"===typeof e.widget,n=!0;s||(n=e.widget||e.widget);var r={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:n,callbacks:[]};if(_.forEach(function(t){if(t.cssClass===r.cssClass)throw new Error("The provided cssClass has already been registered: "+t.cssClass);if(t.className===r.className)throw new Error("The provided className has already been registered")}),e.constructor.prototype.hasOwnProperty(h))throw new Error("MDL component classes must not have "+h+" defined as a property.");t(e.classAsString,r)||_.push(r)}function l(e,s){var n=t(e);n&&n.callbacks.push(s)}function c(){for(var t=0;t<_.length;t++)r(_[t].className)}function u(t){if(t){var e=f.indexOf(t);f.splice(e,1);var s=t.element_.getAttribute("data-upgraded").split(","),r=s.indexOf(t[h].classAsString);s.splice(r,1),t.element_.setAttribute("data-upgraded",s.join(","));var a=n("mdl-componentdowngraded",!0,!1);t.element_.dispatchEvent(a)}}function d(t){var e=function(t){f.filter(function(e){return e.element_===t}).forEach(u)};if(t instanceof Array||t instanceof NodeList)for(var s=0;s<t.length;s++)e(t[s]);else{if(!(t instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");e(t)}}var _=[],f=[],h="mdlComponentConfigInternal_";return{upgradeDom:r,upgradeElement:a,upgradeElements:i,upgradeAllRegistered:c,registerUpgradedCallback:l,register:o,downgradeElements:d}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})})},d041:function(t,e){!function(){"use strict";function t(t,e,s,n){function r(){var r=t.href.split("#")[1],a=n.content_.querySelector("#"+r);n.resetTabState_(e),n.resetPanelState_(s),t.classList.add(n.CssClasses_.IS_ACTIVE),a.classList.add(n.CssClasses_.IS_ACTIVE)}if(n.tabBar_.classList.contains(n.CssClasses_.JS_RIPPLE_EFFECT)){var a=document.createElement("span");a.classList.add(n.CssClasses_.RIPPLE_CONTAINER),a.classList.add(n.CssClasses_.JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(n.CssClasses_.RIPPLE),a.appendChild(i),t.appendChild(a)}n.tabBar_.classList.contains(n.CssClasses_.TAB_MANUAL_SWITCH)||t.addEventListener("click",function(e){"#"===t.getAttribute("href").charAt(0)&&(e.preventDefault(),r())}),t.show=r}var e=function(t){this.element_=t,this.init()};window.MaterialLayout=e,e.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},e.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},e.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},e.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",TAB_MANUAL_SWITCH:"mdl-layout__tab-manual-switch",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},e.prototype.contentScrollHandler_=function(){if(!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){var t=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),t&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),t&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING))}},e.prototype.keyboardEventHandler_=function(t){t.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)&&this.toggleDrawer()},e.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},e.prototype.drawerToggleHandler_=function(t){if(t&&"keydown"===t.type){if(t.keyCode!==this.Keycodes_.SPACE&&t.keyCode!==this.Keycodes_.ENTER)return;t.preventDefault()}this.toggleDrawer()},e.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},e.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},e.prototype.resetTabState_=function(t){for(var e=0;e<t.length;e++)t[e].classList.remove(this.CssClasses_.IS_ACTIVE)},e.prototype.resetPanelState_=function(t){for(var e=0;e<t.length;e++)t[e].classList.remove(this.CssClasses_.IS_ACTIVE)},e.prototype.toggleDrawer=function(){var t=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),t.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),t.setAttribute("aria-expanded","false"))},e.prototype.toggleDrawer=e.prototype.toggleDrawer,e.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER);var s=this.element_.querySelector(":focus");this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),s&&s.focus();for(var n=this.element_.childNodes,r=n.length,a=0;a<r;a++){var i=n[a];i.classList&&i.classList.contains(this.CssClasses_.HEADER)&&(this.header_=i),i.classList&&i.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=i),i.classList&&i.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=i)}window.addEventListener("pageshow",function(t){t.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var o=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?o=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(o=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(o=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),o===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.SEAMED||o===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var l=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!l){l=document.createElement("div"),l.setAttribute("aria-expanded","false"),l.setAttribute("role","button"),l.setAttribute("tabindex","0"),l.classList.add(this.CssClasses_.DRAWER_BTN);var c=document.createElement("i");c.classList.add(this.CssClasses_.ICON),c.innerHTML=this.Constant_.MENU_ICON,l.appendChild(c)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?l.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&l.classList.add(this.CssClasses_.ON_SMALL_SCREEN),l.addEventListener("click",this.drawerToggleHandler_.bind(this)),l.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(l,this.header_.firstChild):this.element_.insertBefore(l,this.content_);var u=document.createElement("div");u.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(u),u.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=u,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var d=document.createElement("div");d.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(d,this.tabBar_),this.header_.removeChild(this.tabBar_);var _=document.createElement("div");_.classList.add(this.CssClasses_.TAB_BAR_BUTTON),_.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var f=document.createElement("i");f.classList.add(this.CssClasses_.ICON),f.textContent=this.Constant_.CHEVRON_LEFT,_.appendChild(f),_.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_BAR_BUTTON),h.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var p=document.createElement("i");p.classList.add(this.CssClasses_.ICON),p.textContent=this.Constant_.CHEVRON_RIGHT,h.appendChild(p),h.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),d.appendChild(_),d.appendChild(this.tabBar_),d.appendChild(h);var m=function(){this.tabBar_.scrollLeft>0?_.classList.add(this.CssClasses_.IS_ACTIVE):_.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?h.classList.add(this.CssClasses_.IS_ACTIVE):h.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",m),m();var C=function(){this.resizeTimeoutId_&&clearTimeout(this.resizeTimeoutId_),this.resizeTimeoutId_=setTimeout(function(){m(),this.resizeTimeoutId_=null}.bind(this),this.Constant_.RESIZE_TIMEOUT)}.bind(this);window.addEventListener("resize",C),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var E=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),v=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),y=0;y<E.length;y++)new t(E[y],E,v,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=t,componentHandler.register({constructor:e,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"})}()},"d6H/":function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"mdl-layout__tab-panel"},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},exdS:function(t,e,s){var n=s("VU/8"),r=s("5x0J"),a=s("kkm3"),i=n(r,a,!1,null,null,null);t.exports=i.exports},fZjL:function(t,e,s){t.exports={default:s("ZhOs"),__esModule:!0}},gDG5:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ui-layout-content"}},iANj:function(t,e){var s=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=s)},k0zh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("5cFp");e.default={name:"ui-layout-header-row",mixins:[n.a]}},kbc1:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ui-layout-drawer",watch:{$route:function(t){"false"===this.$el.getAttribute("aria-hidden")&&this.$parent.$el.MaterialLayout.toggleDrawer()}}}},kkm3:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.className},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},ksFB:function(t,e,s){var n=s("wiaE"),r=s("+MZ2");t.exports=function(t){return n(r(t))}},nnqT:function(t,e,s){var n=s("VU/8"),r=s("zsaz"),a=s("J2GG"),i=n(r,a,!1,null,null,null);t.exports=i.exports},"ok/Q":function(t,e,s){var n=s("VU/8"),r=s("x1dC"),a=s("2vql"),i=n(r,a,!1,null,null,null);t.exports=i.exports},onra:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"mdl-layout__content"},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},pEGt:function(t,e,s){var n=s("DvwR"),r=s("B5V0");t.exports=Object.keys||function(t){return n(t,r)}},qGTm:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["mdl-layout-spacer",t.screenClassName]})},n=[];t.exports={render:s,staticRenderFns:n}},"qs+f":function(t,e,s){t.exports=!s("zyKz")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},rZAI:function(t,e,s){var n=s("wXdB"),r=s("pEGt");s("30vf")("keys",function(){return function(t){return r(n(t))}})},"sQ+G":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("5cFp");e.default={name:"ui-nav",mixins:[n.a],data:function(){return{CLASSNAME_LINK:"mdl-navigation__link"}}}},"um+A":function(t,e,s){"use strict";var n=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()};e.a=n},wXdB:function(t,e,s){var n=s("+MZ2");t.exports=function(t){return Object(n(t))}},wiaE:function(t,e,s){var n=s("NZra");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},wwac:function(t,e){var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.className},[t._t("default")],2)},n=[];t.exports={render:s,staticRenderFns:n}},"x//u":function(t,e){var s={}.hasOwnProperty;t.exports=function(t,e){return s.call(t,e)}},x1dC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ui-layout-tab"}},zsaz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ui-layout-header",props:{scroll:{type:Boolean,default:!1},waterfall:{type:Boolean,default:!1},waterfallHideTop:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},seamed:{type:Boolean,default:!1}},computed:{className:function(){return{"mdl-layout__header":!0,"mdl-layout__header--scroll":this.scroll,"mdl-layout__header--waterfall":this.waterfall||this.waterfallHideTop,"mdl-layout__header--waterfall-hide-top":this.waterfallHideTop,"mdl-layout__header--transparent":this.transparent,"mdl-layout__header--seamed":this.seamed}}}}},zyKz:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}}})});