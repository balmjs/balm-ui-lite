import UiList from './list/list';
import UiItem from './list/item';
import UiItemPrimary from './list/item-primary';
import UiItemAvatar from './list/item-avatar';
import UiItemIcon from './list/item-icon';
import UiItemSecondary from './list/item-secondary';
import UiItemInfo from './list/item-info';
import UiItemAction from './list/item-action';
import UiItemBody from './list/item-body';
import UiItemSubtitle from './list/item-subtitle';

const components = {
  UiList,
  UiItem,
  UiItemPrimary,
  UiItemAvatar,
  UiItemIcon,
  UiItemSecondary,
  UiItemInfo,
  UiItemAction,
  UiItemBody,
  UiItemSubtitle
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in components) {
    let component = components[key];
    window.Vue.component(component.name, component);
  }
}

export default components;
