import UiMenu from './menu/menu';
import UiMenuitem from './menu/menuitem';

const components = {
  UiMenu,
  UiMenuitem
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
