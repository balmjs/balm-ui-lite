const Slider = () => import('../../views/components/slider');
const Checkbox = () => import('../../views/components/checkbox');
const Radio = () => import('../../views/components/radio');
const IconToggle = () => import('../../views/components/icon-toggle');
const Switch = () => import('../../views/components/switch');
const Textfield = () => import('../../views/components/textfield');
const Select = () => import('../../views/components/select');
const Fileupload = () => import('../../views/components/fileupload');
const Autocomplete = () => import('../../views/components/autocomplete');
const Datepicker = () => import('../../views/components/datepicker');
const Rangepicker = () => import('../../views/components/rangepicker');

const formRoutes = [{
  path: 'slider',
  name: 'components.slider',
  component: Slider
}, {
  path: 'checkbox',
  name: 'components.checkbox',
  component: Checkbox
}, {
  path: 'radio',
  name: 'components.radio',
  component: Radio
}, {
  path: 'icon-toggle',
  name: 'components.icon-toggle',
  component: IconToggle
}, {
  path: 'switch',
  name: 'components.switch',
  component: Switch
}, {
  path: 'textfield',
  name: 'components.textfield',
  component: Textfield
}, {
  path: 'select',
  name: 'components.select',
  component: Select
}, {
  path: 'fileupload',
  name: 'components.fileupload',
  component: Fileupload
}, {
  path: 'autocomplete',
  name: 'components.autocomplete',
  component: Autocomplete
}, {
  path: 'datepicker',
  name: 'components.datepicker',
  component: Datepicker
}, {
  path: 'rangepicker',
  name: 'components.rangepicker',
  component: Rangepicker
}];

export default formRoutes;
