import UiTooltip from './common/tooltip';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiTooltip.name, UiTooltip);
}

export default UiTooltip;
