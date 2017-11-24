const Slider = () => import('../views/slider');
const Checkbox = () => import('../views/checkbox');
const Radio = () => import('../views/radio');
const IconToggle = () => import('../views/icon-toggle');
const Switch = () => import('../views/switch');
const Textfield = () => import('../views/textfield');
const Select = () => import('../views/select');
const Autocomplete = () => import('../views/autocomplete');
const Datepicker = () => import('../views/datepicker');
const Fileupload = () => import('../views/fileupload');
const Rangepicker = () => import('../views/rangepicker');

const formRoutes = [{
  path: '/slider',
  name: 'slider',
  component: Slider
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: Checkbox
}, {
  path: '/radio',
  name: 'radio',
  component: Radio
}, {
  path: '/icon-toggle',
  name: 'icon-toggle',
  component: IconToggle
}, {
  path: '/switch',
  name: 'switch',
  component: Switch
}, {
  path: '/textfield',
  name: 'textfield',
  component: Textfield
}, {
  path: '/select',
  name: 'select',
  component: Select
}, {
  path: '/autocomplete',
  name: 'autocomplete',
  component: Autocomplete
}, {
  path: '/datepicker',
  name: 'datepicker',
  component: Datepicker
}, {
  path: '/fileupload',
  name: 'fileupload',
  component: Fileupload
}, {
  path: '/rangepicker',
  name: 'rangepicker',
  component: Rangepicker
}];

export default formRoutes;
