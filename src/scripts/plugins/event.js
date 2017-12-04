const methods = {
  onChange(_property, value, fn = () => {}) {
    new Function('value', `this.${_property} = value;`).call(this, value);
    fn(value);
    return this;
  },
  onOpen(_property, fn = () => {}) {
    new Function(`this.${_property} = true;`).call(this);
    fn();
    return this;
  },
  onClose(_property, fn = () => {}) {
    new Function(`this.${_property} = false;`).call(this);
    fn();
    return this;
  },
  onShow(_property, fn = () => {}) {
    new Function(`this.${_property} = true;`).call(this);
    fn();
    return this;
  },
  onHide(_property, fn = () => {}) {
    new Function(`this.${_property} = false;`).call(this);
    fn();
    return this;
  }
};

export default {
  install(Vue) {
    Object.keys(methods).forEach(key => {
      Vue.prototype[key] = methods[key];
    });
  }
};
