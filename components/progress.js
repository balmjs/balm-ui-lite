!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite=t():e.BalmUILite=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="zbWV")}({"+vXQ":function(e,t,n){e.exports=!n("C61u")&&!n("S4vA")(function(){return 7!=Object.defineProperty(n("BfU5")("div"),"a",{get:function(){return 7}}).a})},"/F7N":function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},"0WpP":function(e,t,n){var r=n("/F7N"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},"1GvH":function(e,t,n){n("5w6Y"),e.exports=n("VSTI").Object.keys},"5ETA":function(e,t){e.exports=!0},"5w6Y":function(e,t,n){var r=n("CYMq"),o=n("mHY4");n("czaS")("keys",function(){return function(e){return o(r(e))}})},"7whZ":function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},A9a0:function(e,t,n){var r=n("nA4W"),o=n("bKEA"),i=n("Oa1h")(!1),s=n("WpRT")("IE_PROTO");e.exports=function(e,t){var n,a=o(e),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;t.length>u;)r(a,n=t[u++])&&(~i(c,n)||c.push(n));return c}},Aqzh:function(e,t,n){e.exports=function(){"use strict";var e=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var n=Object.prototype.toString.call(e);return"[object RegExp]"===n||"[object Date]"===n||function(e){return e.$$typeof===t}(e)}(e)},t="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function r(e,t,r){return e.concat(t).map(function(e){return n(e,r)})}function o(e,t,r){var o={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(t){o[t]=n(e[t],r)}),Object.keys(t).forEach(function(s){r.isMergeableObject(t[s])&&e[s]?o[s]=function(e,t){if(!t.customMerge)return i;var n=t.customMerge(e);return"function"===typeof n?n:i}(s,r)(e[s],t[s],r):o[s]=n(t[s],r)}),o}function i(t,i,s){(s=s||{}).arrayMerge=s.arrayMerge||r,s.isMergeableObject=s.isMergeableObject||e;var a=Array.isArray(i),u=Array.isArray(t),c=a===u;return c?a?s.arrayMerge(t,i,s):o(t,i,s):n(i,s)}return i.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return i(e,n,t)},{})},i}()},BRsN:function(e,t,n){var r=n("GhSp"),o=n("ENu8");e.exports=n("C61u")?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},BfU5:function(e,t,n){var r=n("ekG2"),o=n("7whZ").document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},C61u:function(e,t,n){e.exports=!n("S4vA")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},CYMq:function(e,t,n){var r=n("yQFZ");e.exports=function(e){return Object(r(e))}},ENu8:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},FgkJ:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},GQeE:function(e,t,n){e.exports={default:n("1GvH"),__esModule:!0}},GhSp:function(e,t,n){var r=n("d+lc"),o=n("+vXQ"),i=n("M5dz"),s=Object.defineProperty;t.f=n("C61u")?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},"KHd+":function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,a){var u,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(e,t){return u.call(t),f(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return r})},L0bC:function(e,t,n){"use strict";(function(e){n("jh+B");var r="[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV,o=window.componentHandler;r&&(e.componentHandler=o,o=e.componentHandler),t.a={data:function(){return{$mdl:o}},created:function(){this.$mdl||(this.$mdl=o)}}}).call(this,n("yLpj"))},M5dz:function(e,t,n){var r=n("ekG2");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},Oa1h:function(e,t,n){var r=n("bKEA"),o=n("0WpP"),i=n("nRFE");e.exports=function(e){return function(t,n,s){var a,u=r(t),c=o(u.length),f=i(s,c);if(e&&n!=n){for(;c>f;)if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===n)return e||f||0;return!e&&-1}}},S4vA:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},TYje:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},USwo:function(e,t,n){var r=n("7whZ"),o=n("VSTI"),i=n("nAx8"),s=n("BRsN"),a=n("nA4W"),u=function(e,t,n){var c,f,l,p=e&u.F,d=e&u.G,g=e&u.S,v=e&u.P,h=e&u.B,m=e&u.W,y=d?o:o[t]||(o[t]={}),b=y.prototype,w=d?r:g?r[t]:(r[t]||{}).prototype;for(c in d&&(n=t),n)(f=!p&&w&&void 0!==w[c])&&a(y,c)||(l=f?w[c]:n[c],y[c]=d&&"function"!=typeof w[c]?n[c]:h&&f?i(l,r):m&&w[c]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((y.virtual||(y.virtual={}))[c]=l,e&u.R&&b&&!b[c]&&s(b,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},VSTI:function(e,t){var n=e.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},WpRT:function(e,t,n){var r=n("s2er")("keys"),o=n("ixoo");e.exports=function(e){return r[e]||(r[e]=o(e))}},WuiG:function(e,t,n){"use strict";t.a=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()}},bKEA:function(e,t,n){var r=n("n7vu"),o=n("yQFZ");e.exports=function(e){return r(o(e))}},czaS:function(e,t,n){var r=n("USwo"),o=n("VSTI"),i=n("S4vA");e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],s={};s[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},"d+lc":function(e,t,n){var r=n("ekG2");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},ekG2:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},gVot:function(e,t,n){"use strict";var r=n("GQeE"),o=n.n(r),i=n("Aqzh"),s=n.n(i),a=n("WuiG");t.a=function(e,t){o()(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;"object"!==Object(a.a)(r)?e.props[n].default=t[n]:e.props[n].default=s()(r,t[n])}})}},iri3:function(e,t,n){"use strict";var r=n("gVot");t.a=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)}},ixoo:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},"jh+B":function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[],n="mdlComponentConfigInternal_";function r(t,n){for(var r=0;r<e.length;r++)if(e[r].className===t)return"undefined"!==typeof n&&(e[r]=n),e[r];return!1}function o(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function i(e,t){return-1!==o(e).indexOf(t)}function s(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function a(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var o=0;o<e.length;o++)a(e[o].className,e[o].cssClass);else{var i=t;if("undefined"===typeof n){var s=r(i);s&&(n=s.cssClass)}for(var c=document.querySelectorAll("."+n),f=0;f<c.length;f++)u(c[f],i)}}function u(a,u){if(!("object"===typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=s("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(c),!c.defaultPrevented){var f=o(a),l=[];if(u)i(a,u)||l.push(r(u));else{var p=a.classList;e.forEach(function(e){p.contains(e.cssClass)&&-1===l.indexOf(e)&&!i(a,e.className)&&l.push(e)})}for(var d,g=0,v=l.length;g<v;g++){if(!(d=l[g]))throw new Error("Unable to find a registered component for the given class.");f.push(d.className),a.setAttribute("data-upgraded",f.join(","));var h=new d.classConstructor(a);h[n]=d,t.push(h);for(var m=0,y=d.callbacks.length;m<y;m++)d.callbacks[m](a);d.widget&&(a[d.className]=h);var b=s("mdl-componentupgraded",!0,!1);a.dispatchEvent(b)}}}function c(e){if(e){var r=t.indexOf(e);t.splice(r,1);var o=e.element_.getAttribute("data-upgraded").split(","),i=o.indexOf(e[n].classAsString);o.splice(i,1),e.element_.setAttribute("data-upgraded",o.join(","));var a=s("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:u,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,r=0,o=t.length;r<o;r++)(n=t[r])instanceof HTMLElement&&(u(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=r(e);n&&n.callbacks.push(t)},register:function(t){var o=!0;"undefined"===typeof t.widget&&"undefined"===typeof t.widget||(o=t.widget||t.widget);var i={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:o,callbacks:[]};if(e.forEach(function(e){if(e.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===i.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");r(t.classAsString,i)||e.push(i)},downgradeElements:function(e){var n=function(e){t.filter(function(t){return t.element_===e}).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var r=0;r<e.length;r++)n(e[r]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},l0Kd:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},mHY4:function(e,t,n){var r=n("A9a0"),o=n("l0Kd");e.exports=Object.keys||function(e){return r(e,o)}},n7vu:function(e,t,n){var r=n("TYje");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},nA4W:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},nAx8:function(e,t,n){var r=n("FgkJ");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},nRFE:function(e,t,n){var r=n("/F7N"),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},s2er:function(e,t,n){var r=n("VSTI"),o=n("7whZ"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n("5ETA")?"pure":"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})},wEip:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialProgress=e,e.prototype.Constant_={},e.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},e.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},e.prototype.setProgress=e.prototype.setProgress,e.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},e.prototype.setBuffer=e.prototype.setBuffer,e.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})}()},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===typeof window&&(n=window)}e.exports=n},yQFZ:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},zbWV:function(e,t,n){"use strict";n.r(t);var r=n("iri3"),o=function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className})};o._withStripped=!0;var i=n("L0bC"),s=(n("wEip"),{name:"ui-progress",mixins:[i.a],props:{active:{type:Boolean,default:!1},progress:{type:[Number,String],default:0},buffer:{type:[Number,String],default:0}},data:function(){return{$progress:null}},watch:{progress:function(e){this.$progress.setProgress(e)},buffer:function(e){this.$progress.setBuffer(e)}},computed:{className:function(){return{"mdl-progress":!0,"mdl-js-progress":!0,"mdl-progress--indeterminate":this.active}}},mounted:function(){this.$mdl.upgradeElement(this.$el,"MaterialProgress"),this.$progress||(this.$progress=this.$el.MaterialProgress,this.progress&&this.$progress.setProgress(this.progress),this.buffer&&this.$progress.setBuffer(this.buffer))}}),a=n("KHd+"),u=Object(a.a)(s,o,[],!1,null,null,null);u.options.__file="src/scripts/components/loading/progress.vue";var c=u.exports;Object(r.a)(c);t.default=c}})});