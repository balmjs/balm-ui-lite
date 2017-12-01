import UiTextfield from './form/textfield';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiTextfield.name, UiTextfield);
}

export default UiTextfield;
