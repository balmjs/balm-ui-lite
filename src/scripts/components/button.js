import UiButton from './common/button';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiButton.name, UiButton);
}

export default UiButton;
