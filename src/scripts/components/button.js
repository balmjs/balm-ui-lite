import configure from '../configure';
import UiButton from './common/button';

Object.defineProperty(UiButton, 'config', {
  get() {
    return function(props = {}) {
      configure(UiButton, props);
    };
  }
});

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiButton.name, UiButton);
}

export default UiButton;
