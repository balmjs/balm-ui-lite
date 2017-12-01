import UiCard from './card/card';
import UiCardTitle from './card/card-title';
import UiCardMedia from './card/card-media';
import UiCardBody from './card/card-body';
import UiCardActions from './card/card-actions';
import UiCardMenu from './card/card-menu';

const components = {
  UiCard,
  UiCardTitle,
  UiCardMedia,
  UiCardBody,
  UiCardActions,
  UiCardMenu
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
