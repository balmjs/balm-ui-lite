!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="ux2C")}({"+vXQ":function(t,e,n){t.exports=!n("C61u")&&!n("S4vA")(function(){return 7!=Object.defineProperty(n("BfU5")("div"),"a",{get:function(){return 7}}).a})},"/F7N":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"/tXR":function(t,e){e.f=Object.getOwnPropertySymbols},"0WpP":function(t,e,n){var r=n("/F7N"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"5Qd4":function(t,e,n){var r=n("USwo");r(r.S+r.F,"Object",{assign:n("By1P")})},"7whZ":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},A9a0:function(t,e,n){var r=n("nA4W"),o=n("bKEA"),i=n("Oa1h")(!1),a=n("WpRT")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(u,n)||u.push(n));return u}},BRsN:function(t,e,n){var r=n("GhSp"),o=n("ENu8");t.exports=n("C61u")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},BfU5:function(t,e,n){var r=n("ekG2"),o=n("7whZ").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},By1P:function(t,e,n){"use strict";var r=n("mHY4"),o=n("/tXR"),i=n("GRew"),a=n("CYMq"),s=n("n7vu"),c=Object.assign;t.exports=!c||n("S4vA")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,u=1,l=o.f,f=i.f;c>u;)for(var d,p=s(arguments[u++]),h=l?r(p).concat(l(p)):r(p),m=h.length,v=0;m>v;)f.call(p,d=h[v++])&&(n[d]=p[d]);return n}:c},C61u:function(t,e,n){t.exports=!n("S4vA")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},CYMq:function(t,e,n){var r=n("yQFZ");t.exports=function(t){return Object(r(t))}},ENu8:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},FgkJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},GRew:function(t,e){e.f={}.propertyIsEnumerable},GhSp:function(t,e,n){var r=n("d+lc"),o=n("+vXQ"),i=n("M5dz"),a=Object.defineProperty;e.f=n("C61u")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},L0bC:function(t,e,n){"use strict";(function(t){n("jh+B");var r="[object process]"===Object.prototype.toString.call("undefined"!==typeof t.process?t.process:0)&&"test"===t.process.env.NODE_ENV,o=window.componentHandler;r&&(t.componentHandler=o,o=t.componentHandler),e.a={data:function(){return{$mdl:o}},created:function(){this.$mdl||(this.$mdl=o)}}}).call(this,n("yLpj"))},M5dz:function(t,e,n){var r=n("ekG2");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Oa1h:function(t,e,n){var r=n("bKEA"),o=n("0WpP"),i=n("nRFE");t.exports=function(t){return function(e,n,a){var s,c=r(e),u=o(c.length),l=i(a,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},P2sY:function(t,e,n){t.exports={default:n("uccp"),__esModule:!0}},S4vA:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},TYje:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},USwo:function(t,e,n){var r=n("7whZ"),o=n("VSTI"),i=n("nAx8"),a=n("BRsN"),s=function(t,e,n){var c,u,l,f=t&s.F,d=t&s.G,p=t&s.S,h=t&s.P,m=t&s.B,v=t&s.W,g=d?o:o[e]||(o[e]={}),b=g.prototype,_=d?r:p?r[e]:(r[e]||{}).prototype;for(c in d&&(n=e),n)(u=!f&&_&&void 0!==_[c])&&c in g||(l=u?_[c]:n[c],g[c]=d&&"function"!=typeof _[c]?n[c]:m&&u?i(l,r):v&&_[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[c]=l,t&s.R&&b&&!b[c]&&a(b,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},VSTI:function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},WpRT:function(t,e,n){var r=n("s2er")("keys"),o=n("ixoo");t.exports=function(t){return r[t]||(r[t]=o(t))}},WuiG:function(t,e,n){"use strict";e.a=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},bKEA:function(t,e,n){var r=n("n7vu"),o=n("yQFZ");t.exports=function(t){return r(o(t))}},"d+lc":function(t,e,n){var r=n("ekG2");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ekG2:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},ixoo:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"jh+B":function(t,e){var n={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};(n=function(){"use strict";var t=[],e=[],n="mdlComponentConfigInternal_";function r(e,n){for(var r=0;r<t.length;r++)if(t[r].className===e)return"undefined"!==typeof n&&(t[r]=n),t[r];return!1}function o(t){var e=t.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function i(t,e){return-1!==o(t).indexOf(e)}function a(t,e,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(t,{bubbles:e,cancelable:n});var r=document.createEvent("Events");return r.initEvent(t,e,n),r}function s(e,n){if("undefined"===typeof e&&"undefined"===typeof n)for(var o=0;o<t.length;o++)s(t[o].className,t[o].cssClass);else{var i=e;if("undefined"===typeof n){var a=r(i);a&&(n=a.cssClass)}for(var u=document.querySelectorAll("."+n),l=0;l<u.length;l++)c(u[l],i)}}function c(s,c){if(!("object"===typeof s&&s instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=a("mdl-componentupgrading",!0,!0);if(s.dispatchEvent(u),!u.defaultPrevented){var l=o(s),f=[];if(c)i(s,c)||f.push(r(c));else{var d=s.classList;t.forEach(function(t){d.contains(t.cssClass)&&-1===f.indexOf(t)&&!i(s,t.className)&&f.push(t)})}for(var p,h=0,m=f.length;h<m;h++){if(!(p=f[h]))throw new Error("Unable to find a registered component for the given class.");l.push(p.className),s.setAttribute("data-upgraded",l.join(","));var v=new p.classConstructor(s);v[n]=p,e.push(v);for(var g=0,b=p.callbacks.length;g<b;g++)p.callbacks[g](s);p.widget&&(s[p.className]=v);var _=a("mdl-componentupgraded",!0,!1);s.dispatchEvent(_)}}}function u(t){if(t){var r=e.indexOf(t);e.splice(r,1);var o=t.element_.getAttribute("data-upgraded").split(","),i=o.indexOf(t[n].classAsString);o.splice(i,1),t.element_.setAttribute("data-upgraded",o.join(","));var s=a("mdl-componentdowngraded",!0,!1);t.element_.dispatchEvent(s)}}return{upgradeDom:s,upgradeElement:c,upgradeElements:function t(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var n,r=0,o=e.length;r<o;r++)(n=e[r])instanceof HTMLElement&&(c(n),n.children.length>0&&t(n.children))},upgradeAllRegistered:function(){for(var e=0;e<t.length;e++)s(t[e].className)},registerUpgradedCallback:function(t,e){var n=r(t);n&&n.callbacks.push(e)},register:function(e){var o=!0;"undefined"===typeof e.widget&&"undefined"===typeof e.widget||(o=e.widget||e.widget);var i={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:o,callbacks:[]};if(t.forEach(function(t){if(t.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+t.cssClass);if(t.className===i.className)throw new Error("The provided className has already been registered")}),e.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");r(e.classAsString,i)||t.push(i)},downgradeElements:function(t){var n=function(t){e.filter(function(e){return e.element_===t}).forEach(u)};if(t instanceof Array||t instanceof NodeList)for(var r=0;r<t.length;r++)n(t[r]);else{if(!(t instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(t)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},l0Kd:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},mHY4:function(t,e,n){var r=n("A9a0"),o=n("l0Kd");t.exports=Object.keys||function(t){return r(t,o)}},mnCQ:function(t,e){!function(){"use strict";var t=function(t){if(this.element_=t,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=t,t.prototype.Constant_={ANIMATION_LENGTH:250},t.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},t.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},t.prototype.showSnackbar=function(t){if(void 0===t)throw new Error("Please provide a data object with at least a message to display.");if(void 0===t.message)throw new Error("Please provide a message to be displayed.");if(t.actionHandler&&!t.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(t):(this.active=!0,this.message_=t.message,t.timeout?this.timeout_=t.timeout:this.timeout_=2750,t.actionHandler&&(this.actionHandler_=t.actionHandler),t.actionText&&(this.actionText_=t.actionText),this.displaySnackbar_())},t.prototype.showSnackbar=t.prototype.showSnackbar,t.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},t.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},t.prototype.setActionHidden_=function(t){t?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},componentHandler.register({constructor:t,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0})}()},n7vu:function(t,e,n){var r=n("TYje");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},nA4W:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},nAx8:function(t,e,n){var r=n("FgkJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},nRFE:function(t,e,n){var r=n("/F7N"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},s2er:function(t,e,n){var r=n("7whZ"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},uccp:function(t,e,n){n("5Qd4"),t.exports=n("VSTI").Object.assign},ux2C:function(t,e,n){"use strict";n.r(e);var r=n("P2sY"),o=n.n(r),i=n("WuiG"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"popup",class:t.className,attrs:{"aria-live":"assertive","aria-atomic":"true","aria-relevant":"text"}},[n("div",{staticClass:"mdl-snackbar__text"},[t._v(t._s(t.currentMessage))]),t._v(" "),n("button",{staticClass:"mdl-snackbar__action",attrs:{type:"button"}},[t._v(t._s(t.actionText))])])};a._withStripped=!0;var s=n("L0bC"),c=(n("mnCQ"),["toast","snackbar"]),u={name:"ui-snackbar",mixins:[s.a],model:{prop:"active",event:"change"},props:{active:{type:Boolean,default:!1},message:{type:String,required:!0},type:{type:[Number,String],default:0},timeout:{type:Number,default:2750},actionHandler:Function,actionText:String},data:function(){return{currentActive:this.active,currentMessage:this.message}},computed:{className:function(){return{"mdl-snackbar":!0,"mdl-js-snackbar":!0,"mdl-snackbar--active":this.active}},isSnackbar:function(){var t="string"===Object(i.a)(this.type)?c[1]:1;return this.type===t}},watch:{active:function(t){!this.currentActive&&t&&(this.currentActive=t,this.show())},message:function(t){this.currentMessage=t}},methods:{show:function(){var t=this,e={message:this.currentMessage,timeout:this.timeout};this.isSnackbar&&(e.actionHandler=this.actionHandler,e.actionText=this.actionText),this.$refs.popup.MaterialSnackbar.showSnackbar(e),setTimeout(function(){t.currentActive=!1,t.$emit("change",!1),t.$emit("done")},this.timeout)}},created:function(){this.isSnackbar&&(this.actionHandler&&this.actionText||console.warn("`actionHandler` and `actionText` is required in a snackbar."))},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSnackbar")}},l=n("KHd+"),f=Object(l.a)(u,a,[],!1,null,null,null);f.options.__file="src/scripts/components/common/snackbar.vue";var d=f.exports,p={className:"",message:"",timeout:2750},h={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0,r=o()({},p,e);t.prototype.$toast=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};document.querySelector(".mdl-toast")||(n=new t({components:{UiSnackbar:d},el:document.createElement("div"),template:'<ui-snackbar\n  :class="[\'mdl-toast\', options.className]"\n  :active="active"\n  :message="options.message"\n  :timeout="options.timeout">\n</ui-snackbar>',data:{active:!1,options:r},created:function(){"object"===Object(i.a)(e)?this.options=o()({},this.options,e):this.options.message=""+e,this.$nextTick(function(){var t=this;document.body.appendChild(this.$el),setTimeout(function(){t.active=!0},200),setTimeout(function(){t.active=!1,setTimeout(function(){document.body.removeChild(t.$el),n=null},200)},n.options.timeout)})}}))}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(h);e.default=h},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},yQFZ:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}}})});