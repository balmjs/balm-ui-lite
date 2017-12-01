import UiSlider from './form/slider';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiSlider.name, UiSlider);
}

export default UiSlider;
