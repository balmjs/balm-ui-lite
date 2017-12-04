import UiDivider from './common/divider';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiDivider.name, UiDivider);
}

export default UiDivider;
