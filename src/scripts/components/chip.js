import UiChip from './chip/chip';
import UiChipText from './chip/chip-text';
import UiChipAction from './chip/chip-action';
import UiChipContact from './chip/chip-contact';

const components = {
  UiChip,
  UiChipText,
  UiChipAction,
  UiChipContact
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
