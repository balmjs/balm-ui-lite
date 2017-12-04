import UiSelect from './form/select';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiSelect.name, UiSelect);
}

export default UiSelect;
