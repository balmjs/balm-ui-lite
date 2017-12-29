import multiBootstrap from '../config/multi-bootstrap';
import UiTabs from './tabs/tabs';
import UiTabBar from './tabs/tab-bar';
import UiTab from './tabs/tab';
import UiPanel from './tabs/panel';

const UiTabsComponents = {
  UiTabs,
  UiTabBar,
  UiTab,
  UiPanel
};

multiBootstrap(UiTabsComponents);

export default UiTabsComponents;
export {
  UiTabs,
  UiTabBar,
  UiTab,
  UiPanel
};
