import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Helpers
 */
import * as BalmUI_Helpers from './helpers';
/**
 * Layout
 */
import UiLayout from './components/layout/layout';
import UiLayoutHeader from './components/layout/layout-header';
import UiLayoutHeaderRow from './components/layout/layout-header-row';
import UiLayoutTitle from './components/layout/layout-title';
import UiLayoutDrawer from './components/layout/layout-drawer';
import UiLayoutContent from './components/layout/layout-content';
import UiLayoutSpacer from './components/layout/layout-spacer';
import UiLayoutTabBar from './components/layout/layout-tab-bar';
import UiLayoutTab from './components/layout/layout-tab';
import UiLayoutTabPanel from './components/layout/layout-tab-panel';
import UiNav from './components/layout/nav';
import UiNavLink from './components/layout/nav-link';
import UiGrid from './components/grid/grid';
import UiCell from './components/grid/cell';
import UiTabs from './components/tabs/tabs';
import UiTabBar from './components/tabs/tab-bar';
import UiTab from './components/tabs/tab';
import UiPanel from './components/tabs/panel';
/**
 * Common
 */
import UiBadge from './components/common/badge';
import UiBadgeLink from './components/common/badge-link';
import UiButton from './components/common/button';
import UiChip from './components/chip/chip';
import UiChipText from './components/chip/chip-text';
import UiChipAction from './components/chip/chip-action';
import UiChipContact from './components/chip/chip-contact';
import UiMenu from './components/menu/menu';
import UiMenuitem from './components/menu/menuitem';
import UiTooltip from './components/common/tooltip';
import UiDivider from './components/common/divider';
import UiIcon from './components/common/icon';
import UiCircle from './components/common/circle';
/**
 * Form
 */
import UiTextfield from './components/form/textfield';
import UiCheckbox from './components/form/checkbox';
import UiRadio from './components/form/radio';
import UiSelect from './components/form/select';
import UiSelectmenu from './components/form/selectmenu';
import UiIconToggle from './components/form/icon-toggle';
import UiSwitch from './components/form/switch';
import UiSlider from './components/form/slider';
import UiAutocomplete from './components/form/autocomplete';
import UiDatepicker from './components/form/datepicker';
import UiRangepicker from './components/form/rangepicker';
import UiFile from './components/form/file';
/**
 * Loading
 */
import UiProgress from './components/loading/progress';
import UiSpinner from './components/loading/spinner';
/**
 * Data
 */
import UiCard from './components/card/card';
import UiCardHead from './components/card/card-head';
import UiCardTitle from './components/card/card-title';
import UiCardSubtitle from './components/card/card-subtitle';
import UiCardMedia from './components/card/card-media';
import UiCardBody from './components/card/card-body';
import UiCardActions from './components/card/card-actions';
import UiCardMenu from './components/card/card-menu';
import UiList from './components/list/list';
import UiItem from './components/list/item';
import UiItemPrimary from './components/list/item-primary';
import UiItemAvatar from './components/list/item-avatar';
import UiItemIcon from './components/list/item-icon';
import UiItemSecondary from './components/list/item-secondary';
import UiItemInfo from './components/list/item-info';
import UiItemAction from './components/list/item-action';
import UiItemBody from './components/list/item-body';
import UiItemSubtitle from './components/list/item-subtitle';
import UiTable from './components/data/table';
import UiPagination from './components/data/pagination';
/**
 * Popup
 */
import UiDialog from './components/dialog/dialog';
import UiDialogTitle from './components/dialog/dialog-title';
import UiDialogContent from './components/dialog/dialog-content';
import UiDialogActions from './components/dialog/dialog-actions';
import UiSnackbar from './components/common/snackbar';
/**
 * Plugins
 */
import event from './plugins/event';
import alert from './plugins/alert';
import confirm from './plugins/confirm';
import prompt from './plugins/prompt';
import toast from './plugins/toast';
import notify from './plugins/notify';
import validator from './plugins/validator';
/**
 * Directives
 */
// import lazyLoad from './directives/lazy-load';

const version = require('../../package.json').version;
const helpers = Object.assign({}, BalmUI_Helpers);

const components = {
  // Layout
  UiLayout,
  UiLayoutHeader,
  UiLayoutHeaderRow,
  UiLayoutTitle,
  UiLayoutDrawer,
  UiLayoutContent,
  UiLayoutSpacer,
  UiLayoutTabBar,
  UiLayoutTab,
  UiLayoutTabPanel,
  UiNav,
  UiNavLink,
  UiGrid,
  UiCell,
  UiTabs,
  UiTabBar,
  UiTab,
  UiPanel,
  // Common
  UiBadge,
  UiBadgeLink,
  UiButton,
  UiChip,
  UiChipText,
  UiChipAction,
  UiChipContact,
  UiMenu,
  UiMenuitem,
  UiTooltip,
  UiDivider,
  UiIcon,
  UiCircle,
  // Form
  UiTextfield,
  UiCheckbox,
  UiRadio,
  UiSelect,
  UiSelectmenu,
  UiIconToggle,
  UiSwitch,
  UiSlider,
  UiAutocomplete,
  UiDatepicker,
  UiRangepicker,
  UiFile,
  // Loading
  UiProgress,
  UiSpinner,
  // Data
  UiCard,
  UiCardHead,
  UiCardTitle,
  UiCardSubtitle,
  UiCardActions,
  UiCardMenu,
  UiCardMedia,
  UiCardBody,
  UiList,
  UiItem,
  UiItemPrimary,
  UiItemAvatar,
  UiItemIcon,
  UiItemSecondary,
  UiItemInfo,
  UiItemAction,
  UiItemBody,
  UiItemSubtitle,
  UiTable,
  UiPagination,
  // Popup
  UiDialog,
  UiDialogTitle,
  UiDialogContent,
  UiDialogActions,
  UiSnackbar
};

const plugins = {
  event,
  alert,
  confirm,
  prompt,
  toast,
  notify,
  validator
};

// const directives = {
//   lazyLoad
// };

const BalmUI = {
  version,
  install(Vue, options = {}) {
    // Configure the components' props
    multiConfigure(components, options);

    // Install the components
    for (let key in components) {
      let Component = components[key];
      Vue.component(Component.name, Component);
    }

    // Install the plugins
    for (let key in plugins) {
      let Plugin = plugins[key];
      if (options[`$${key}`]) {
        Vue.use(Plugin, options[`$${key}`]);
      } else {
        Vue.use(Plugin);
      }
    }
  }
};

autoInstall(BalmUI);

export default BalmUI;
export { helpers };
