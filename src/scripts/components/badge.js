import UiBadge from './common/badge';
import UiBadgeLink from './common/badge-link';

const components = {
  UiBadge,
  UiBadgeLink
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
