import multiBootstrap from '../config/multi-bootstrap';
import UiMenu from './menu/menu';
import UiMenuitem from './menu/menuitem';

const UiMenuComponents = {
  UiMenu,
  UiMenuitem
};

multiBootstrap(UiMenuComponents);

export default UiMenuComponents;
export { UiMenu, UiMenuitem };
