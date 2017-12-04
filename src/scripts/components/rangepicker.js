import UiRangepicker from './form/rangepicker';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiRangepicker.name, UiRangepicker);
}

export default UiRangepicker;
