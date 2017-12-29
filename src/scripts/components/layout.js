import multiBootstrap from '../config/multi-bootstrap';
import UiLayout from './layout/layout';
import UiLayoutHeader from './layout/layout-header';
import UiLayoutHeaderRow from './layout/layout-header-row';
import UiLayoutTitle from './layout/layout-title';
import UiLayoutSpacer from './layout/layout-spacer';
import UiLayoutDrawer from './layout/layout-drawer';
import UiLayoutContent from './layout/layout-content';
import UiLayoutTabBar from './layout/layout-tab-bar';
import UiLayoutTab from './layout/layout-tab';
import UiLayoutTabPanel from './layout/layout-tab-panel';
import UiNav from './layout/nav';
import UiNavLink from './layout/nav-link';

const UiLayoutComponents = {
  UiLayout,
  UiLayoutHeader,
  UiLayoutHeaderRow,
  UiLayoutTitle,
  UiLayoutSpacer,
  UiLayoutDrawer,
  UiLayoutContent,
  UiLayoutTabBar,
  UiLayoutTab,
  UiLayoutTabPanel,
  UiNav,
  UiNavLink
};

multiBootstrap(UiLayoutComponents);

export default UiLayoutComponents;
export {
  UiLayout,
  UiLayoutHeader,
  UiLayoutHeaderRow,
  UiLayoutTitle,
  UiLayoutSpacer,
  UiLayoutDrawer,
  UiLayoutContent,
  UiLayoutTabBar,
  UiLayoutTab,
  UiLayoutTabPanel,
  UiNav,
  UiNavLink
};
