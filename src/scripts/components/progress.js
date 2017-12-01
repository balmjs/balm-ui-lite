import UiProgress from './loading/progress';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiProgress.name, UiProgress);
}

export default UiProgress;
