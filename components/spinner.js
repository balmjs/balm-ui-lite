!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="kbXi")}({"+DdP":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialSpinner=e,e.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},e.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},e.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),o.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var i=[n,r,o],s=0;s<i.length;s++){var a=document.createElement("div");a.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),i[s].appendChild(a)}t.appendChild(n),t.appendChild(r),t.appendChild(o),this.element_.appendChild(t)},e.prototype.createLayer=e.prototype.createLayer,e.prototype.stop=function(){this.element_.classList.remove("is-active")},e.prototype.stop=e.prototype.stop,e.prototype.start=function(){this.element_.classList.add("is-active")},e.prototype.start=e.prototype.start,e.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})}()},"29s/":function(e,t,n){var r=n("WEpk"),o=n("5T2Y"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n("uOPS")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(e,t,n){var r=n("eaoh");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"2faE":function(e,t,n){var r=n("5K7Z"),o=n("eUtF"),i=n("G8Mo"),s=Object.defineProperty;t.f=n("jmDH")?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},"5K7Z":function(e,t,n){var r=n("93I4");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},"5T2Y":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(e,t,n){var r=n("B+OT"),o=n("NsO/"),i=n("W070")(!1),s=n("VVlx")("IE_PROTO");e.exports=function(e,t){var n,a=o(e),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);for(;t.length>c;)r(a,n=t[c++])&&(~i(u,n)||u.push(n));return u}},"93I4":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},Aqzh:function(e,t,n){e.exports=function(){"use strict";var e=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var n=Object.prototype.toString.call(e);return"[object RegExp]"===n||"[object Date]"===n||function(e){return e.$$typeof===t}(e)}(e)},t="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?o((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function r(e,t,r){return e.concat(t).map(function(e){return n(e,r)})}function o(t,i,s){(s=s||{}).arrayMerge=s.arrayMerge||r,s.isMergeableObject=s.isMergeableObject||e;var a=Array.isArray(i),c=Array.isArray(t),u=a===c;return u?a?s.arrayMerge(t,i,s):function(e,t,r){var i={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(t){i[t]=n(e[t],r)}),Object.keys(t).forEach(function(s){r.isMergeableObject(t[s])&&e[s]?i[s]=o(e[s],t[s],r):i[s]=n(t[s],r)}),i}(t,i,s):n(i,s)}return o.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return o(e,n,t)},{})},o}()},"B+OT":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},D8kY:function(e,t,n){var r=n("Ojgd"),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},FpHa:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(e,t,n){var r=n("93I4");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},GQeE:function(e,t,n){e.exports={default:n("iq4v"),__esModule:!0}},Hsns:function(e,t,n){var r=n("93I4"),o=n("5T2Y").document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},JB68:function(e,t,n){var r=n("Jes0");e.exports=function(e){return Object(r(e))}},Jes0:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},"KHd+":function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(e,t){return c.call(t),f(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}n.d(t,"a",function(){return r})},KUxP:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},L0bC:function(e,t,n){"use strict";(function(e){n("jh+B");var r="[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV,o=window.componentHandler;r&&(e.componentHandler=o,o=e.componentHandler),t.a={data:function(){return{$mdl:o}},created:function(){this.$mdl||(this.$mdl=o)}}}).call(this,n("yLpj"))},M1xp:function(e,t,n){var r=n("a0xu");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},Mqbl:function(e,t,n){var r=n("JB68"),o=n("w6GO");n("zn7N")("keys",function(){return function(e){return o(r(e))}})},NegM:function(e,t,n){var r=n("2faE"),o=n("rr1i");e.exports=n("jmDH")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"NsO/":function(e,t,n){var r=n("M1xp"),o=n("Jes0");e.exports=function(e){return r(o(e))}},Ojgd:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},VVlx:function(e,t,n){var r=n("29s/")("keys"),o=n("YqAc");e.exports=function(e){return r[e]||(r[e]=o(e))}},W070:function(e,t,n){var r=n("NsO/"),o=n("tEej"),i=n("D8kY");e.exports=function(e){return function(t,n,s){var a,c=r(t),u=o(c.length),f=i(s,u);if(e&&n!=n){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((e||f in c)&&c[f]===n)return e||f||0;return!e&&-1}}},WEpk:function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},WuiG:function(e,t,n){"use strict";t.a=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},Y7ZC:function(e,t,n){var r=n("5T2Y"),o=n("WEpk"),i=n("2GTP"),s=n("NegM"),a=n("B+OT"),c=function(e,t,n){var u,f,l,p=e&c.F,d=e&c.G,v=e&c.S,m=e&c.P,g=e&c.B,h=e&c.W,y=d?o:o[t]||(o[t]={}),_=y.prototype,E=d?r:v?r[t]:(r[t]||{}).prototype;for(u in d&&(n=t),n)(f=!p&&E&&void 0!==E[u])&&a(y,u)||(l=f?E[u]:n[u],y[u]=d&&"function"!=typeof E[u]?n[u]:g&&f?i(l,r):h&&E[u]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):m&&"function"==typeof l?i(Function.call,l):l,m&&((y.virtual||(y.virtual={}))[u]=l,e&c.R&&_&&!_[u]&&s(_,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},YqAc:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},a0xu:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},eUtF:function(e,t,n){e.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},gVot:function(e,t,n){"use strict";var r=n("GQeE"),o=n.n(r),i=n("Aqzh"),s=n.n(i),a=n("WuiG");t.a=function(e,t){o()(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;"object"!==Object(a.a)(r)?e.props[n].default=t[n]:e.props[n].default=s()(r,t[n])}})}},iq4v:function(e,t,n){n("Mqbl"),e.exports=n("WEpk").Object.keys},iri3:function(e,t,n){"use strict";var r=n("gVot");t.a=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)}},"jh+B":function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[],n="mdlComponentConfigInternal_";function r(t,n){for(var r=0;r<e.length;r++)if(e[r].className===t)return"undefined"!==typeof n&&(e[r]=n),e[r];return!1}function o(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function i(e,t){return-1!==o(e).indexOf(t)}function s(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function a(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var o=0;o<e.length;o++)a(e[o].className,e[o].cssClass);else{var i=t;if("undefined"===typeof n){var s=r(i);s&&(n=s.cssClass)}for(var u=document.querySelectorAll("."+n),f=0;f<u.length;f++)c(u[f],i)}}function c(a,c){if(!("object"===typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=s("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(u),!u.defaultPrevented){var f=o(a),l=[];if(c)i(a,c)||l.push(r(c));else{var p=a.classList;e.forEach(function(e){p.contains(e.cssClass)&&-1===l.indexOf(e)&&!i(a,e.className)&&l.push(e)})}for(var d,v=0,m=l.length;v<m;v++){if(!(d=l[v]))throw new Error("Unable to find a registered component for the given class.");f.push(d.className),a.setAttribute("data-upgraded",f.join(","));var g=new d.classConstructor(a);g[n]=d,t.push(g);for(var h=0,y=d.callbacks.length;h<y;h++)d.callbacks[h](a);d.widget&&(a[d.className]=g);var _=s("mdl-componentupgraded",!0,!1);a.dispatchEvent(_)}}}function u(e){if(e){var r=t.indexOf(e);t.splice(r,1);var o=e.element_.getAttribute("data-upgraded").split(","),i=o.indexOf(e[n].classAsString);o.splice(i,1),e.element_.setAttribute("data-upgraded",o.join(","));var a=s("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,r=0,o=t.length;r<o;r++)(n=t[r])instanceof HTMLElement&&(c(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=r(e);n&&n.callbacks.push(t)},register:function(t){var o=!0;"undefined"===typeof t.widget&&"undefined"===typeof t.widget||(o=t.widget||t.widget);var i={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:o,callbacks:[]};if(e.forEach(function(e){if(e.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===i.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");r(t.classAsString,i)||e.push(i)},downgradeElements:function(e){var n=function(e){t.filter(function(t){return t.element_===e}).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var r=0;r<e.length;r++)n(e[r]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},jmDH:function(e,t,n){e.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},kbXi:function(e,t,n){"use strict";n.r(t);var r=n("iri3"),o=function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className})};o._withStripped=!0;var i=n("L0bC"),s=(n("+DdP"),{name:"ui-spinner",mixins:[i.a],props:{active:{type:Boolean,default:!1},singleColor:{type:Boolean,default:!1}},computed:{className:function(){return{"mdl-spinner":!0,"mdl-js-spinner":!0,"is-active":this.active,"mdl-spinner--single-color":this.singleColor}}},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialSpinner")}}),a=n("KHd+"),c=Object(a.a)(s,o,[],!1,null,null,null);c.options.__file="src/scripts/components/loading/spinner.vue";var u=c.exports;Object(r.a)(u);t.default=u},rr1i:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},tEej:function(e,t,n){var r=n("Ojgd"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},uOPS:function(e,t){e.exports=!0},w6GO:function(e,t,n){var r=n("5vMV"),o=n("FpHa");e.exports=Object.keys||function(e){return r(e,o)}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},zn7N:function(e,t,n){var r=n("Y7ZC"),o=n("WEpk"),i=n("KUxP");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],s={};s[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}}})});