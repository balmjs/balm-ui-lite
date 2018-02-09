const Textfield = () => import('../../views/components/textfield');
const Checkbox = () => import('../../views/components/checkbox');
const Radio = () => import('../../views/components/radio');
const Select = () => import('../../views/components/select');
const Selectmenu = () => import('../../views/components/selectmenu');
const IconToggle = () => import('../../views/components/icon-toggle');
const Switch = () => import('../../views/components/switch');
const Slider = () => import('../../views/components/slider');
const File = () => import('../../views/components/file');
const Autocomplete = () => import('../../views/components/autocomplete');
const Datepicker = () => import('../../views/components/datepicker');
const Rangepicker = () => import('../../views/components/rangepicker');

const formRoutes = [
  {
    path: 'textfield',
    name: 'components.textfield',
    component: Textfield
  },
  {
    path: 'checkbox',
    name: 'components.checkbox',
    component: Checkbox
  },
  {
    path: 'radio',
    name: 'components.radio',
    component: Radio
  },
  {
    path: 'select',
    name: 'components.select',
    component: Select
  },
  {
    path: 'selectmenu',
    name: 'components.selectmenu',
    component: Selectmenu
  },
  {
    path: 'icon-toggle',
    name: 'components.icon-toggle',
    component: IconToggle
  },
  {
    path: 'switch',
    name: 'components.switch',
    component: Switch
  },
  {
    path: 'slider',
    name: 'components.slider',
    component: Slider
  },
  {
    path: 'file',
    name: 'components.file',
    component: File
  },
  {
    path: 'autocomplete',
    name: 'components.autocomplete',
    component: Autocomplete
  },
  {
    path: 'datepicker',
    name: 'components.datepicker',
    component: Datepicker
  },
  {
    path: 'rangepicker',
    name: 'components.rangepicker',
    component: Rangepicker
  }
];

export default formRoutes;
