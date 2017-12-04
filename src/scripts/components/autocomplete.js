import UiAutocomplete from './form/autocomplete';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiAutocomplete.name, UiAutocomplete);
}

export default UiAutocomplete;
