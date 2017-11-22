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
  component: Slider,
  meta: {
    title: 'BalmUI - Slider',
    keywords: '',
    description: ''
  }
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: Checkbox,
  meta: {
    title: 'BalmUI - Checkbox',
    keywords: '',
    description: ''
  }
}, {
  path: '/radio',
  name: 'radio',
  component: Radio,
  meta: {
    title: 'BalmUI - Radio button',
    keywords: '',
    description: ''
  }
}, {
  path: '/icon-toggle',
  name: 'icon-toggle',
  component: IconToggle,
  meta: {
    title: 'BalmUI - Icon toggle',
    keywords: '',
    description: ''
  }
}, {
  path: '/switch',
  name: 'switch',
  component: Switch,
  meta: {
    title: 'BalmUI - Switch',
    keywords: '',
    description: ''
  }
}, {
  path: '/textfield',
  name: 'textfield',
  component: Textfield,
  meta: {
    title: 'BalmUI - Textfield',
    keywords: '',
    description: ''
  }
}, {
  path: '/select',
  name: 'select',
  component: Select,
  meta: {
    title: 'BalmUI - Select',
    keywords: '',
    description: ''
  }
}, {
  path: '/autocomplete',
  name: 'autocomplete',
  component: Autocomplete,
  meta: {
    title: 'BalmUI - Autocomplete',
    keywords: '',
    description: ''
  }
}, {
  path: '/datepicker',
  name: 'datepicker',
  component: Datepicker,
  meta: {
    title: 'BalmUI - Datepicker',
    keywords: '',
    description: ''
  }
}, {
  path: '/fileupload',
  name: 'fileupload',
  component: Fileupload,
  meta: {
    title: 'BalmUI - Fileupload',
    keywords: '',
    description: ''
  }
}, {
  path: '/rangepicker',
  name: 'rangepicker',
  component: Rangepicker,
  meta: {
    title: 'BalmUI - Rangepicker',
    keywords: '',
    description: ''
  }
}];

export default formRoutes;
