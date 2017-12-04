import UiDatepicker from './form/datepicker';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiDatepicker.name, UiDatepicker);
}

export default UiDatepicker;
