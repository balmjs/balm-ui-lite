import multiBootstrap from '../config/multi-bootstrap';
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

const UiListComponents = {
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

multiBootstrap(UiListComponents)

export default UiListComponents;
export {
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
