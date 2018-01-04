//by amdos
//改自饿了么团队，elementui 只测试单个组件 这在业务中远远不够 需要我们根据需要自行添加方法
let exports = {};
import Vue from 'vue';
let id = 0;

const createElm = function() {
  const elm = document.createElement('div');

  elm.id = 'app' + ++id;
  document.body.appendChild(elm);

  return elm;
};

exports.createElm = createElm;

/**
 * 回收 vm
 * @param  {Object} vm
 */
exports.destroyVM = function(vm) {
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el);
};

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
exports.createVue = function(Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo };
  }
  return new Vue(Compo).$mount(mounted === false ? null : createElm());
};

exports.createVueInstance = function(Compo, propsData = {},mounted = false){
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo };
  }
  const Ctor = Vue.extend(Compo);
  return new Ctor({ propsData });
}

/**
 * 挂载一个 Vue 的实例对象
 * @param  {Object|String}  vue  new 出来的vue实例
 * @param  {Boolean=false} el mounted 到DOM 上
 * @return {Object} vm
 */
exports.mountedVue = function(vue,el){
  return  vue.$mount(el== false ? createElm():el);
}
/**
 * 创建一个测试组件实例
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} mounted  - 是否添加到 DOM 上
 * @el     {Object}  el             -自定义组件挂载对象
 * @return {Object} vm
 */
exports.createTest = function(Compo, propsData = {}, mounted = false,el) {
  if (propsData === true || propsData === false) {
    mounted = propsData;
    propsData = {};
  }
  let elm = createElm();
  elm = el?el:elm;
  const Ctor = Vue.extend(Compo);
  return new Ctor({ propsData }).$mount(mounted === false ? null : elm);
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
exports.triggerEvent = function(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
};

/**
 * 触发 “mouseup” 和 “mousedown” 事件
 * @param {Element} elm
 * @param {*} opts
 */
exports.triggerClick = function(elm, ...opts) {
  exports.triggerEvent(elm, 'mousedown', ...opts);
  exports.triggerEvent(elm, 'mouseup', ...opts);

  return elm;
};
exports.Vue = Vue;

export default exports;
