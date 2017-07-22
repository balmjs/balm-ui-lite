/**
 * Core
 */
import './scripts/material-design-lite/mdlComponentHandler';
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
import UiNavigation from './scripts/components/layout/navigation';
import UiGrid from './scripts/components/grid/grid';
import UiCell from './scripts/components/grid/cell';
import UiTabs from './scripts/components/tabs/tabs';
import UiTabBar from './scripts/components/tabs/tab-bar';
import UiTab from './scripts/components/tabs/tab';
import UiPanel from './scripts/components/tabs/panel';
import UiFooter from './scripts/components/footer/footer';
import UiMiniFooter from './scripts/components/footer/mini-footer';
/**
 * Common
 */
import UiBadge from './scripts/components/common/badge';
import UiButton from './scripts/components/common/button';
import UiCard from './scripts/components/common/card/card';
import UiCardTitle from './scripts/components/common/card/card-title';
import UiCardActions from './scripts/components/common/card/card-actions';
import UiCardMenu from './scripts/components/common/card/card-menu';
import UiCardMedia from './scripts/components/common/card/card-media';
import UiCardText from './scripts/components/common/card/card-text';
import UiChip from './scripts/components/common/chip/chip';
import UiChipText from './scripts/components/common/chip/chip-text';
import UiChipAction from './scripts/components/common/chip/chip-action';
import UiChipContact from './scripts/components/common/chip/chip-contact';
import UiDivider from './scripts/components/common/divider';
import UiLoading from './scripts/components/common/loading';
import UiMenu from './scripts/components/common/menu/menu';
import UiMenuItem from './scripts/components/common/menu/menuitem';
import UiTooltip from './scripts/components/common/tooltip';
import UiIcon from './scripts/components/icon';
/**
 * Form
 */
import UiTextfield from './scripts/components/form/textfield';
import UiCheckbox from './scripts/components/form/checkbox';
import UiRadio from './scripts/components/form/radio';
import UiIconToggle from './scripts/components/form/icon-toggle';
import UiSwitch from './scripts/components/form/switch';
import UiSlider from './scripts/components/form/slider';
import UiSelect from './scripts/components/form/select';
import UiAutocomplete from './scripts/components/form/autocomplete';
import UiDatepicker from './scripts/components/form/datepicker';
import UiFileupload from './scripts/components/form/fileupload';
/**
 * Data
 */
import UiList from './scripts/components/data/list/list';
import UiItem from './scripts/components/data/list/item';
import UiTable from './scripts/components/data/table';
import UiPagination from './scripts/components/data/pagination';
/**
 * Popup
 */
import UiDialog from './scripts/components/popup/dialog';
import UiConfirm from './scripts/components/popup/confirm';
import UiAlert from './scripts/components/popup/alert';
import UiSnackbar from './scripts/components/popup/snackbar';

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
  UiNavigation,
  UiGrid,
  UiCell,
  UiTabs,
  UiTabBar,
  UiTab,
  UiPanel,
  UiFooter,
  UiMiniFooter,
  // Common
  UiBadge,
  UiButton,
  UiCard,
  UiCardTitle,
  UiCardActions,
  UiCardMenu,
  UiCardMedia,
  UiCardText,
  UiChip,
  UiChipText,
  UiChipAction,
  UiChipContact,
  UiDivider,
  UiLoading,
  UiMenu,
  UiMenuItem,
  UiTooltip,
  UiIcon,
  // Form
  UiTextfield,
  UiCheckbox,
  UiRadio,
  UiIconToggle,
  UiSwitch,
  UiSlider,
  UiSelect,
  UiAutocomplete,
  UiDatepicker,
  UiFileupload,
  // Data
  UiList,
  UiItem,
  UiTable,
  UiPagination,
  // Popup
  UiDialog,
  UiConfirm,
  UiAlert,
  UiSnackbar
};

const BalmUI_Register = {
  install(Vue) {
    Vue.prototype.$mdl = window.componentHandler;

    for (let key in BalmUI) {
      let component = BalmUI[key];
      if (component && component !== 'install' && component.name) {
        Vue.component(component.name, component);
      }
    }
  }
};

const BalmUI = Object.assign({}, BalmUI_Components, BalmUI_Register);

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
}

export default BalmUI;
