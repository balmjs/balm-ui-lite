/**
 * Layout
 */
import UiLayout from './scripts/components/layout/layout';
import UiLayoutHeader from './scripts/components/layout/layout-header';
import UiLayoutHeaderRow from './scripts/components/layout/layout-header-row';
import UiLayoutTitle from './scripts/components/layout/layout-title';
import UiLayoutDrawer from './scripts/components/layout/layout-drawer';
import UiLayoutContent from './scripts/components/layout/layout-content';
import UiLayoutSpacer from './scripts/components/layout/layout-spacer';
import UiLayoutTabBar from './scripts/components/layout/layout-tab-bar';
import UiLayoutTab from './scripts/components/layout/layout-tab';
import UiLayoutTabPanel from './scripts/components/layout/layout-tab-panel';
import UiNav from './scripts/components/layout/nav';
import UiNavLink from './scripts/components/layout/nav-link';
import UiGrid from './scripts/components/grid/grid';
import UiCell from './scripts/components/grid/cell';
import UiTabs from './scripts/components/tabs/tabs';
import UiTabBar from './scripts/components/tabs/tab-bar';
import UiTab from './scripts/components/tabs/tab';
import UiPanel from './scripts/components/tabs/panel';
// Deprecated: <ui-footer-X>
// import UiFooter from './scripts/components/footer/footer';
// import UiFooterTop from './scripts/components/footer/footer-top';
// import UiFooterLeft from './scripts/components/footer/footer-left';
// import UiFooterSocialBtn from './scripts/components/footer/footer-social-btn';
// import UiFooterRight from './scripts/components/footer/footer-right';
// import UiFooterMiddle from './scripts/components/footer/footer-middle';
// import UiFooterDropDown from './scripts/components/footer/footer-drop-down';
// import UiFooterHeading from './scripts/components/footer/footer-heading';
// import UiFooterLinkList from './scripts/components/footer/footer-link-list';
// import UiFooterBottom from './scripts/components/footer/footer-bottom';
// import UiLogo from './scripts/components/footer/logo';
// import UiMiniFooter from './scripts/components/footer/mini-footer';
// import UiMiniFooterLeft from './scripts/components/footer/mini-footer-left';
// import UiMiniFooterLinkList from './scripts/components/footer/mini-footer-link-list';
// import UiMiniFooterRight from './scripts/components/footer/mini-footer-right';
// import UiMiniFooterSocialBtn from './scripts/components/footer/min-footer-social-btn';
/**
 * Common
 */
import UiBadge from './scripts/components/common/badge';
import UiBadgeLink from './scripts/components/common/badge-link';
import UiButton from './scripts/components/common/button';
import UiChip from './scripts/components/chip/chip';
import UiChipText from './scripts/components/chip/chip-text';
import UiChipAction from './scripts/components/chip/chip-action';
import UiChipContact from './scripts/components/chip/chip-contact';
import UiLoading from './scripts/components/common/loading';
import UiMenu from './scripts/components/menu/menu';
import UiMenuItem from './scripts/components/menu/menuitem';
import UiTooltip from './scripts/components/common/tooltip';
import UiDivider from './scripts/components/common/divider';
import UiIcon from './scripts/components/icon';
/**
 * Form
 */
import UiSlider from './scripts/components/form/slider';
import UiCheckbox from './scripts/components/form/checkbox';
import UiRadio from './scripts/components/form/radio';
import UiIconToggle from './scripts/components/form/icon-toggle';
import UiSwitch from './scripts/components/form/switch';
import UiTextfield from './scripts/components/form/textfield';
import UiSelect from './scripts/components/form/select';
import UiAutocomplete from './scripts/components/form/autocomplete';
import UiDatepicker from './scripts/components/form/datepicker';
import UiFileupload from './scripts/components/form/fileupload';
/**
 * Data
 */
import UiCard from './scripts/components/card/card';
import UiCardTitle from './scripts/components/card/card-title';
import UiCardActions from './scripts/components/card/card-actions';
import UiCardMenu from './scripts/components/card/card-menu';
import UiCardMedia from './scripts/components/card/card-media';
import UiCardText from './scripts/components/card/card-text';
import UiList from './scripts/components/list/list';
import UiItem from './scripts/components/list/item';
import UiItemAvatar from './scripts/components/list/item-avatar';
import UiItemIcon from './scripts/components/list/item-icon';
import UiItemSubtitle from './scripts/components/list/item-subtitle';
import UiItemInfo from './scripts/components/list/item-info';
import UiItemAction from './scripts/components/list/item-action';
import UiItemTextbody from './scripts/components/list/item-textbody';
import UiTable from './scripts/components/data/table';
import UiPagination from './scripts/components/data/pagination';
/**
 * Popup
 */
import UiDialog from './scripts/components/dialog/dialog';
import UiDialogTitle from './scripts/components/dialog/dialog-title';
import UiDialogContent from './scripts/components/dialog/dialog-content';
import UiDialogActions from './scripts/components/dialog/dialog-actions';
import UiSnackbar from './scripts/components/dialog/snackbar';
/**
 * Plugins
 */
// import helper from './scripts/plugins/helper';
import event from './scripts/plugins/event';
import alert from './scripts/plugins/alert';
import confirm from './scripts/plugins/confirm';
import toast from './scripts/plugins/toast';

const BalmUI_Components = {
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
  UiLoading,
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
  // Data
  UiCard,
  UiCardTitle,
  UiCardActions,
  UiCardMenu,
  UiCardMedia,
  UiCardText,
  UiList,
  UiItem,
  UiItemAvatar,
  UiItemIcon,
  UiItemSubtitle,
  UiItemInfo,
  UiItemAction,
  UiItemTextbody,
  UiTable,
  UiPagination,
  // Popup
  UiDialog,
  UiDialogTitle,
  UiDialogContent,
  UiDialogActions,
  UiSnackbar
};

const BalmUI_Plugins = {
  plugins: {
    event,
    alert,
    confirm,
    toast
  }
};

const BalmUI_Register = {
  install(Vue) {
    for (let key in BalmUI) {
      let component = BalmUI[key];
      if (component && component !== 'install' && component.name) {
        Vue.component(component.name, component);
      }
    }
  }
};

const BalmUI = Object.assign({}, BalmUI_Components, BalmUI_Plugins, BalmUI_Register);

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
  for (let key in BalmUI.plugins) {
    window.Vue.use(BalmUI.plugins[key]);
  }
}

export default BalmUI;

export {
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
  UiLoading,
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
  // Data
  UiCard,
  UiCardTitle,
  UiCardActions,
  UiCardMenu,
  UiCardMedia,
  UiCardText,
  UiList,
  UiItem,
  UiItemAvatar,
  UiItemIcon,
  UiItemSubtitle,
  UiItemInfo,
  UiItemAction,
  UiItemTextbody,
  UiTable,
  UiPagination,
  // Popup
  UiDialog,
  UiDialogTitle,
  UiDialogContent,
  UiDialogActions,
  UiSnackbar
};
