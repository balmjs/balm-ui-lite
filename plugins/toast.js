!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUILite=e():t.BalmUILite=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="ux2C")}({"29s/":function(t,e,n){var r=n("WEpk"),o=n("5T2Y"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("uOPS")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(t,e,n){var r=n("eaoh");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"2faE":function(t,e,n){var r=n("5K7Z"),o=n("eUtF"),i=n("G8Mo"),s=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"5K7Z":function(t,e,n){var r=n("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(t,e,n){var r=n("B+OT"),o=n("NsO/"),i=n("W070")(!1),s=n("VVlx")("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(u,n)||u.push(n));return u}},"93I4":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},D8kY:function(t,e,n){var r=n("Ojgd"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},FpHa:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Hsns:function(t,e,n){var r=n("93I4"),o=n("5T2Y").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},JB68:function(t,e,n){var r=n("Jes0");t.exports=function(t){return Object(r(t))}},Jes0:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},L0bC:function(t,e,n){"use strict";(function(t){n("jh+B");var r="[object process]"===Object.prototype.toString.call("undefined"!==typeof t.process?t.process:0)&&"test"===t.process.env.NODE_ENV,o=window.componentHandler;r&&(t.componentHandler=o,o=t.componentHandler),e.a={data:function(){return{$mdl:o}},created:function(){this.$mdl||(this.$mdl=o)}}}).call(this,n("yLpj"))},M1xp:function(t,e,n){var r=n("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},NV0k:function(t,e){e.f={}.propertyIsEnumerable},NegM:function(t,e,n){var r=n("2faE"),o=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"NsO/":function(t,e,n){var r=n("M1xp"),o=n("Jes0");t.exports=function(t){return r(o(t))}},Ojgd:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},P2sY:function(t,e,n){t.exports={default:n("UbbE"),__esModule:!0}},UbbE:function(t,e,n){n("o8NH"),t.exports=n("WEpk").Object.assign},VVlx:function(t,e,n){var r=n("29s/")("keys"),o=n("YqAc");t.exports=function(t){return r[t]||(r[t]=o(t))}},W070:function(t,e,n){var r=n("NsO/"),o=n("tEej"),i=n("D8kY");t.exports=function(t){return function(e,n,s){var a,c=r(e),u=o(c.length),l=i(s,u);if(t&&n!=n){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},WEpk:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},WuiG:function(t,e,n){"use strict";e.a=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},Y7ZC:function(t,e,n){var r=n("5T2Y"),o=n("WEpk"),i=n("2GTP"),s=n("NegM"),a=n("B+OT"),c=function(t,e,n){var u,l,f,d=t&c.F,p=t&c.G,h=t&c.S,m=t&c.P,v=t&c.B,g=t&c.W,b=p?o:o[e]||(o[e]={}),_=b.prototype,y=p?r:h?r[e]:(r[e]||{}).prototype;for(u in p&&(n=e),n)(l=!d&&y&&void 0!==y[u])&&a(b,u)||(f=l?y[u]:n[u],b[u]=p&&"function"!=typeof y[u]?n[u]:v&&l?i(f,r):g&&y[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?i(Function.call,f):f,m&&((b.virtual||(b.virtual={}))[u]=f,t&c.R&&_&&!_[u]&&s(_,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},YqAc:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},a0xu:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"jh+B":function(t,e){var n={upgradeDom:function(t,e){},upgradeElement:function(t,e){},upgradeElements:function(t){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(t,e){},register:function(t){},downgradeElements:function(t){}};(n=function(){"use strict";var t=[],e=[],n="mdlComponentConfigInternal_";function r(e,n){for(var r=0;r<t.length;r++)if(t[r].className===e)return"undefined"!==typeof n&&(t[r]=n),t[r];return!1}function o(t){var e=t.getAttribute("data-upgraded");return null===e?[""]:e.split(",")}function i(t,e){return-1!==o(t).indexOf(e)}function s(t,e,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(t,{bubbles:e,cancelable:n});var r=document.createEvent("Events");return r.initEvent(t,e,n),r}function a(e,n){if("undefined"===typeof e&&"undefined"===typeof n)for(var o=0;o<t.length;o++)a(t[o].className,t[o].cssClass);else{var i=e;if("undefined"===typeof n){var s=r(i);s&&(n=s.cssClass)}for(var u=document.querySelectorAll("."+n),l=0;l<u.length;l++)c(u[l],i)}}function c(a,c){if(!("object"===typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=s("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(u),!u.defaultPrevented){var l=o(a),f=[];if(c)i(a,c)||f.push(r(c));else{var d=a.classList;t.forEach(function(t){d.contains(t.cssClass)&&-1===f.indexOf(t)&&!i(a,t.className)&&f.push(t)})}for(var p,h=0,m=f.length;h<m;h++){if(!(p=f[h]))throw new Error("Unable to find a registered component for the given class.");l.push(p.className),a.setAttribute("data-upgraded",l.join(","));var v=new p.classConstructor(a);v[n]=p,e.push(v);for(var g=0,b=p.callbacks.length;g<b;g++)p.callbacks[g](a);p.widget&&(a[p.className]=v);var _=s("mdl-componentupgraded",!0,!1);a.dispatchEvent(_)}}}function u(t){if(t){var r=e.indexOf(t);e.splice(r,1);var o=t.element_.getAttribute("data-upgraded").split(","),i=o.indexOf(t[n].classAsString);o.splice(i,1),t.element_.setAttribute("data-upgraded",o.join(","));var a=s("mdl-componentdowngraded",!0,!1);t.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:c,upgradeElements:function t(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var n,r=0,o=e.length;r<o;r++)(n=e[r])instanceof HTMLElement&&(c(n),n.children.length>0&&t(n.children))},upgradeAllRegistered:function(){for(var e=0;e<t.length;e++)a(t[e].className)},registerUpgradedCallback:function(t,e){var n=r(t);n&&n.callbacks.push(e)},register:function(e){var o=!0;"undefined"===typeof e.widget&&"undefined"===typeof e.widget||(o=e.widget||e.widget);var i={classConstructor:e.constructor||e.constructor,className:e.classAsString||e.classAsString,cssClass:e.cssClass||e.cssClass,widget:o,callbacks:[]};if(t.forEach(function(t){if(t.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+t.cssClass);if(t.className===i.className)throw new Error("The provided className has already been registered")}),e.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");r(e.classAsString,i)||t.push(i)},downgradeElements:function(t){var n=function(t){e.filter(function(e){return e.element_===t}).forEach(u)};if(t instanceof Array||t instanceof NodeList)for(var r=0;r<t.length;r++)n(t[r]);else{if(!(t instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(t)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},jmDH:function(t,e,n){t.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},kwZ1:function(t,e,n){"use strict";var r=n("w6GO"),o=n("mqlF"),i=n("NV0k"),s=n("JB68"),a=n("M1xp"),c=Object.assign;t.exports=!c||n("KUxP")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=s(t),c=arguments.length,u=1,l=o.f,f=i.f;c>u;)for(var d,p=a(arguments[u++]),h=l?r(p).concat(l(p)):r(p),m=h.length,v=0;m>v;)f.call(p,d=h[v++])&&(n[d]=p[d]);return n}:c},mnCQ:function(t,e){!function(){"use strict";var t=function(t){if(this.element_=t,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=t,t.prototype.Constant_={ANIMATION_LENGTH:250},t.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},t.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},t.prototype.showSnackbar=function(t){if(void 0===t)throw new Error("Please provide a data object with at least a message to display.");if(void 0===t.message)throw new Error("Please provide a message to be displayed.");if(t.actionHandler&&!t.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(t):(this.active=!0,this.message_=t.message,t.timeout?this.timeout_=t.timeout:this.timeout_=2750,t.actionHandler&&(this.actionHandler_=t.actionHandler),t.actionText&&(this.actionText_=t.actionText),this.displaySnackbar_())},t.prototype.showSnackbar=t.prototype.showSnackbar,t.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},t.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},t.prototype.setActionHidden_=function(t){t?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},componentHandler.register({constructor:t,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0})}()},mqlF:function(t,e){e.f=Object.getOwnPropertySymbols},o8NH:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F,"Object",{assign:n("kwZ1")})},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},tEej:function(t,e,n){var r=n("Ojgd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},uOPS:function(t,e){t.exports=!0},ux2C:function(t,e,n){"use strict";n.r(e);var r=n("P2sY"),o=n.n(r),i=n("kUbF"),s=n("WuiG"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"popup",class:t.className,attrs:{"aria-live":"assertive","aria-atomic":"true","aria-relevant":"text"}},[n("div",{staticClass:"mdl-snackbar__text"},[t._v(t._s(t.currentMessage))]),t._v(" "),n("button",{staticClass:"mdl-snackbar__action",attrs:{type:"button"}},[t._v(t._s(t.actionText))])])};a._withStripped=!0;var c=n("L0bC"),u=(n("mnCQ"),["toast","snackbar"]),l={name:"ui-snackbar",mixins:[c.a],model:{prop:"active",event:"change"},props:{active:{type:Boolean,default:!1},message:{type:String,required:!0},type:{type:[Number,String],default:0},timeout:{type:Number,default:2750},actionHandler:Function,actionText:String},data:function(){return{currentActive:this.active,currentMessage:this.message}},computed:{className:function(){return{"mdl-snackbar":!0,"mdl-js-snackbar":!0,"mdl-snackbar--active":this.active}},isSnackbar:function(){var t="string"===Object(s.a)(this.type)?u[1]:1;return this.type===t}},watch:{active:function(t){!this.currentActive&&t&&(this.currentActive=t,this.show())},message:function(t){this.currentMessage=t}},methods:{show:function(){var t=this,e={message:this.currentMessage,timeout:this.timeout};this.isSnackbar&&(e.actionHandler=this.actionHandler,e.actionText=this.actionText),this.$refs.popup.MaterialSnackbar.showSnackbar(e),setTimeout(function(){t.currentActive=!1,t.$emit("change",!1),t.$emit("done")},this.timeout)}},created:function(){this.isSnackbar&&(this.actionHandler&&this.actionText||console.warn("`actionHandler` and `actionText` is required in a snackbar."))},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSnackbar")}},f=n("KHd+"),d=Object(f.a)(l,a,[],!1,null,null,null);d.options.__file="src/scripts/components/common/snackbar.vue";var p=d.exports,h={className:"",message:"",timeout:2750},m={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0,r=o()({},h,e);t.prototype.$toast=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};document.querySelector(".mdl-toast")||(n=new t({components:{UiSnackbar:p},el:document.createElement("div"),template:'<ui-snackbar\n  :class="[\'mdl-toast\', options.className]"\n  :active="active"\n  :message="options.message"\n  :timeout="options.timeout">\n</ui-snackbar>',data:{active:!1,options:r},created:function(){"object"===Object(s.a)(e)?this.options=o()({},this.options,e):this.options.message=""+e,this.$nextTick(function(){var t=this;document.body.appendChild(this.$el),setTimeout(function(){t.active=!0},200),setTimeout(function(){t.active=!1,setTimeout(function(){document.body.removeChild(t.$el),n=null},200)},n.options.timeout)})}}))}}};Object(i.a)(m);e.default=m},w6GO:function(t,e,n){var r=n("5vMV"),o=n("FpHa");t.exports=Object.keys||function(t){return r(t,o)}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n}})});