import UiDialog from './dialog/dialog';
import UiDialogTitle from './dialog/dialog-title';
import UiDialogContent from './dialog/dialog-content';
import UiDialogActions from './dialog/dialog-actions';

const components = {
  UiDialog,
  UiDialogTitle,
  UiDialogContent,
  UiDialogActions
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
