!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUI_notify=n():t.BalmUI_notify=n()}(window,function(){return function(t){var n={};function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s="TmCi")}({TmCi:function(t,n,o){"use strict";o.r(n);var e=o("cDf5"),i=o.n(e),r=o("kUbF"),s=function(t){return Object.prototype.toString.call(t).replace(/\[object\s(.*)\]/,"$1").toLowerCase()},a='<div class="mdl-notify" v-if="open">\n  <transition-group class="mdl-notify__list" :name="transitionName" tag="div">\n    <div :class="[\n    \'mdl-notify__item\',\n    notify.className,\n    notify.type + \'-type\',\n    {\n      \'with-avatar\': notify.avatar,\n      \'with-buttons\': notify.buttons && notify.buttons.length\n    }]"\n    v-for="(notify, index) in notifies"\n    :key="notify.id">\n      <div class="mdl-notify__container">\n        <div class="avatar" v-if="notify.avatar"><span :style="$_setBackgroundImage(notify.avatar)"></span></div>\n        <div class="body">\n          <div class="title" v-if="notify.title">{{ notify.title }}</div>\n          <div class="content">{{ notify.content }}</div>\n        </div>\n        <div class="mdl-notify__buttons"\n             v-if="notify.buttons && notify.buttons.length">\n          <div :class="[\'btn-item\', btn.className]"\n               v-for="(btn, index) in notify.buttons"\n               :key="index"\n               @click="$_buttonHandler(btn, notify)">{{ btn.text }}</div>\n        </div>\n      </div>\n      <div class="progress-bar" v-if="$_hasProgress(notify)">\n        <span :style="$_setProgressStyle(notify)"\n              @animationend="$_autoClose(notify)"\n              @webkitAnimationEnd="$_autoClose(notify)"></span>\n      </div>\n    </div>\n  </transition-group>\n</div>',u={type:"info",timeout:5e3,avatar:"",className:"",title:"",content:"",progressColor:"",buttons:[{className:"",text:"Close",autoClose:!0}]},f={},c=function(){return Math.floor(65536*(1+Math.random())).toString(16)},l={},d={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=document.createElement("div"),e=Object.assign({},f,n);"number"===s(e.timeout)&&(u.timeout=e.timeout),e.cancelText&&(u.buttons[0].text=e.cancelText);var r="string"===s(e.transitionName)?e.transitionName:"notify-list",d=e.progressColor||"#3f51b5",y=function(){return{open:!0,progressColor:d,transitionName:r,notifies:[]}},p={setProgressColor:function(t){this.progressColor=t},setTransitionName:function(t){this.transitionName=t},resetTransitionName:function(){this.transitionName=e.transitionName},resetProgressColor:function(){this.progressColor=e.progressColor},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.open&&console.warn("[BalmUI]:Plugin $notify has not open yet. use 'this.$notify.open = true' to open the notify plugin in Vue instance."),"object"!==s(t)){var n=""+t;t={content:n}}return t=Object.assign({id:"".concat(c(),"-").concat(Date.now())},u,t),this.notifies.push(t),{id:t.id}},addButtonHandler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,o=s(t),e={object:function(){var n=t.name,o=t.method;l[n]=o},string:function(){"function"===s(n)?l[t]=n:console.error("[BalmUI]:Plugin $notify added method '".concat(t,"' failed. The 2nd argument should be a 'function' type, but got '").concat(s(n),"'."))},array:function(){t.forEach(function(t){l[t.name]=t.method})}}[o];e&&e()},findNotifyIndex:function(t){return this.notifies.findIndex(function(n){return t.id===n.id})},findNotify:function(t){return this.notifies.find(function(n){return t.id===n.id})},close:function(t){var n=this.findNotifyIndex(t);"number"===s(n)&&this.notifies.splice(n,1)},$_hasProgress:function(t){var n=t.timeout;return n&&"number"===s(n)},$_buttonHandler:function(t,n){var o=t.handler,e=t.autoClose;switch(i()(o)){case"string":l[o]&&l[o](n);break;case"function":o(n)}!1!==e&&this.close(n)},$_setBackgroundImage:function(t){return{backgroundImage:"url(".concat(t,")")}},$_setProgressStyle:function(t){var n=t.timeout,o=t.progressColor,e="".concat(n,"ms");return{backgroundColor:o||this.progressColor,animationDuration:e,webkitAnimationDuration:e}},$_autoClose:function(t){this.$_hasProgress(t)&&this.close(t)}},m=function(){document.body.appendChild(o)};t.prototype.$notify=new t({el:o,template:a,data:y,methods:p,created:m})}};Object(r.a)(d);n.default=d},cDf5:function(t,n){function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(n){return"function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?t.exports=e=function(t){return o(t)}:t.exports=e=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},e(n)}t.exports=e},kUbF:function(t,n,o){"use strict";(function(t){n.a=function(n){var o=null;"undefined"!==typeof window?o=window.Vue:"undefined"!==typeof t&&(o=t.Vue),o&&o.use(n)}}).call(this,o("yLpj"))},yLpj:function(t,n){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===typeof window&&(o=window)}t.exports=o}})});