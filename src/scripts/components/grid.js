import UiGrid from './grid/grid';
import UiCell from './grid/cell';

const components = {
  UiGrid,
  UiCell
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
