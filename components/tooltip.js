!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUILite_tooltip=t():e.BalmUILite_tooltip=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="ettI")}({"8YyU":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialTooltip=e,e.prototype.Constant_={},e.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},e.prototype.handleMouseEnter_=function(e){var t=e.target.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,o=this.element_.offsetWidth/2*-1,s=this.element_.offsetHeight/2*-1;this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(n=t.width/2,r+s<0?(this.element_.style.top="0",this.element_.style.marginTop="0"):(this.element_.style.top=r+"px",this.element_.style.marginTop=s+"px")):n+o<0?(this.element_.style.left="0",this.element_.style.marginLeft="0"):(this.element_.style.left=n+"px",this.element_.style.marginLeft=o+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=t.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=t.left+t.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=t.left-this.element_.offsetWidth-10+"px":this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},e.prototype.hideTooltip_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},e.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveAndScrollHandler=this.hideTooltip_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveAndScrollHandler,!1),window.addEventListener("scroll",this.boundMouseLeaveAndScrollHandler,!0),window.addEventListener("touchstart",this.boundMouseLeaveAndScrollHandler))}},componentHandler.register({constructor:e,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"})}()},L0bC:function(e,t,n){"use strict";(function(e){n("jh+B");var r="[object process]"===Object.prototype.toString.call("undefined"!==typeof e.process?e.process:0)&&"test"===e.process.env.NODE_ENV,o=window.componentHandler;r&&(e.componentHandler=o,o=e.componentHandler),t.a={data:function(){return{$mdl:o}},created:function(){this.$mdl||(this.$mdl=o)}}}).call(this,n("yLpj"))},PE4B:function(e,t,n){"use strict";var r=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function s(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function i(e,t,n){return e.concat(t).map(function(e){return s(e,n)})}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function l(e,t,n){var r={};return n.isMergeableObject(e)&&a(e).forEach(function(t){r[t]=s(e[t],n)}),a(t).forEach(function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=function(e,t){if(!t.customMerge)return c;var n=t.customMerge(e);return"function"===typeof n?n:c}(o,n)(e[o],t[o],n):r[o]=s(t[o],n)}),r}function c(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||i,n.isMergeableObject=n.isMergeableObject||r;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):l(e,t,n):s(t,n)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return c(e,n,t)},{})};var u=c;e.exports=u},ettI:function(e,t,n){"use strict";n.r(t);var r=n("PE4B"),o=n.n(r),s=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.*)\]/,"$1").toLowerCase()},i=function(e,t){Object.keys(t).forEach(function(n){if(void 0!==e.props[n]){var r=e.props[n].default;"object"!==s(r)?e.props[n].default=t[n]:e.props[n].default=o()(r,t[n])}})},a=function(e){Object.defineProperty(e,"config",{get:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(e,t)}}}),"undefined"!==typeof window&&window.Vue&&window.Vue.component(e.name,e)},l=n("L0bC"),c=(n("8YyU"),["","top","right","bottom","left"]);var u=function(e,t,n,r,o,s,i,a){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}({name:"ui-tooltip",mixins:[l.a],props:{name:{type:String,default:function(){return function(e){for(var t="";t.length<e;t+=Math.random().toString(36).substr(2));return t.substr(0,e)}(8)}},title:String,large:{type:Boolean,default:!1},position:{type:[Number,String],default:0}},computed:{className:function(){return{"mdl-tooltip":!0,"mdl-tooltip--large":this.large}},positionClassName:function(){var e=this.position;"string"===s(e)&&(e=c.indexOf(e));var t=e>0&&e<c.length?c[e]:"";return t?"mdl-tooltip--".concat(t):""}},mounted:function(){this.$mdl.upgradeElement(this.$refs.tooltip,"MaterialTooltip")}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{attrs:{id:"tt-"+e.name}},[e._t("default")],2),e._v(" "),n("div",{ref:"tooltip",class:[e.className,e.positionClassName],attrs:{"data-mdl-for":"tt-"+e.name}},[e._t("title",[e._v(e._s(e.title))])],2)])},[],!1,null,null,null).exports;a(u);t.default=u},"jh+B":function(e,t){var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[],n="mdlComponentConfigInternal_";function r(t,n){for(var r=0;r<e.length;r++)if(e[r].className===t)return"undefined"!==typeof n&&(e[r]=n),e[r];return!1}function o(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,t){return-1!==o(e).indexOf(t)}function i(e,t,n){if("CustomEvent"in window&&"function"===typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:n});var r=document.createEvent("Events");return r.initEvent(e,t,n),r}function a(t,n){if("undefined"===typeof t&&"undefined"===typeof n)for(var o=0;o<e.length;o++)a(e[o].className,e[o].cssClass);else{var s=t;if("undefined"===typeof n){var i=r(s);i&&(n=i.cssClass)}for(var c=document.querySelectorAll("."+n),u=0;u<c.length;u++)l(c[u],s)}}function l(a,l){if(!("object"===typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var c=i("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(c),!c.defaultPrevented){var u=o(a),d=[];if(l)s(a,l)||d.push(r(l));else{var f=a.classList;e.forEach(function(e){f.contains(e.cssClass)&&-1===d.indexOf(e)&&!s(a,e.className)&&d.push(e)})}for(var p,m=0,h=d.length;m<h;m++){if(!(p=d[m]))throw new Error("Unable to find a registered component for the given class.");u.push(p.className),a.setAttribute("data-upgraded",u.join(","));var g=new p.classConstructor(a);g[n]=p,t.push(g);for(var v=0,y=p.callbacks.length;v<y;v++)p.callbacks[v](a);p.widget&&(a[p.className]=g);var b=i("mdl-componentupgraded",!0,!1);a.dispatchEvent(b)}}}function c(e){if(e){var r=t.indexOf(e);t.splice(r,1);var o=e.element_.getAttribute("data-upgraded").split(","),s=o.indexOf(e[n].classAsString);o.splice(s,1),e.element_.setAttribute("data-upgraded",o.join(","));var a=i("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:l,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var n,r=0,o=t.length;r<o;r++)(n=t[r])instanceof HTMLElement&&(l(n),n.children.length>0&&e(n.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=r(e);n&&n.callbacks.push(t)},register:function(t){var o=!0;"undefined"===typeof t.widget&&"undefined"===typeof t.widget||(o=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:o,callbacks:[]};if(e.forEach(function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(n))throw new Error("MDL component classes must not have "+n+" defined as a property.");r(t.classAsString,s)||e.push(s)},downgradeElements:function(e){var n=function(e){t.filter(function(t){return t.element_===e}).forEach(c)};if(e instanceof Array||e instanceof NodeList)for(var r=0;r<e.length;r++)n(e[r]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");n(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})})},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}})});