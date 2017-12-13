import configure from './configure';
/**
 * Helpers
 */
import * as BalmUI_Helpers from './helpers';
/**
 * Mixins
 */
import * as BalmUI_Mixins from './mixins';
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
// Deprecated: <ui-footer-X>
// import UiFooter from './components/footer/footer';
// import UiFooterTop from './components/footer/footer-top';
// import UiFooterLeft from './components/footer/footer-left';
// import UiFooterSocialBtn from './components/footer/footer-social-btn';
// import UiFooterRight from './components/footer/footer-right';
// import UiFooterMiddle from './components/footer/footer-middle';
// import UiFooterDropDown from './components/footer/footer-drop-down';
// import UiFooterHeading from './components/footer/footer-heading';
// import UiFooterLinkList from './components/footer/footer-link-list';
// import UiFooterBottom from './components/footer/footer-bottom';
// import UiLogo from './components/footer/logo';
// import UiMiniFooter from './components/footer/mini-footer';
// import UiMiniFooterLeft from './components/footer/mini-footer-left';
// import UiMiniFooterLinkList from './components/footer/mini-footer-link-list';
// import UiMiniFooterRight from './components/footer/mini-footer-right';
// import UiMiniFooterSocialBtn from './components/footer/min-footer-social-btn';
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
import UiMenuItem from './components/menu/menuitem';
import UiTooltip from './components/common/tooltip';
import UiDivider from './components/common/divider';
import UiIcon from './components/common/icon';
/**
 * Form
 */
import UiSlider from './components/form/slider';
import UiCheckbox from './components/form/checkbox';
import UiRadio from './components/form/radio';
import UiIconToggle from './components/form/icon-toggle';
import UiSwitch from './components/form/switch';
import UiTextfield from './components/form/textfield';
import UiSelect from './components/form/select';
import UiAutocomplete from './components/form/autocomplete';
import UiDatepicker from './components/form/datepicker';
import UiFileupload from './components/form/fileupload';
import UiRangepicker from './components/form/rangepicker';
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
import UiItemAvatar from './components/list/item-avatar';
import UiItemIcon from './components/list/item-icon';
import UiItemSubtitle from './components/list/item-subtitle';
import UiItemInfo from './components/list/item-info';
import UiItemAction from './components/list/item-action';
import UiItemBody from './components/list/item-body';
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
import toast from './plugins/toast';
import notify from './plugins/notify';
import validator from './plugins/validator';

const version = require('../../package.json').version;
const helpers = Object.assign({}, BalmUI_Helpers);
const mixins = Object.assign({}, BalmUI_Mixins);

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
  UiMenuItem,
  UiTooltip,
  UiDivider,
  UiIcon,
  // Form
  UiSlider,
  UiCheckbox,
  UiRadio,
  UiIconToggle,
  UiSwitch,
  UiTextfield,
  UiSelect,
  UiAutocomplete,
  UiDatepicker,
  UiFileupload,
  UiRangepicker,
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
  UiItemAvatar,
  UiItemIcon,
  UiItemSubtitle,
  UiItemInfo,
  UiItemAction,
  UiItemBody,
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
  toast,
  notify,
  validator
};

const registers = {
  install(Vue, options = {}) {
    // Configure the component props
    Object.keys(options).forEach(key => {
      if (BalmUI.components[key] === undefined) {
        return;
      }

      const Component = BalmUI.components[key];
      const props = options[key];

      configure(Component, props);
    });

    // Install the components
    for (let key in BalmUI.components) {
      let Component = BalmUI.components[key];
      Vue.component(Component.name, Component);
    }
  }
};

const BalmUI = Object.assign(
  {},
  { version },
  { helpers },
  { mixins },
  { components },
  { plugins },
  registers
);

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
  for (let key in BalmUI.plugins) {
    window.Vue.use(BalmUI.plugins[key]);
  }
}

export default BalmUI;

export { helpers, mixins };
