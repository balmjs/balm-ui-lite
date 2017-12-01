import UiRadio from './form/radio';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiRadio.name, UiRadio);
}

export default UiRadio;
