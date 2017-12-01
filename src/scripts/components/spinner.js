import UiSpinner from './loading/spinner';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiSpinner.name, UiSpinner);
}

export default UiSpinner;
