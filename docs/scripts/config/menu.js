import helpers from '../helpers';

const components = {
  layout: [
    'layout',
    'grid',
    'tabs'
  ],
  common: [
    'badge',
    'button',
    'chip',
    'menu',
    'tooltip',
    'divider',
    'icon'
  ],
  form: [
    'slider',
    'checkbox',
    'radio',
    'icon-toggle',
    'switch',
    'textfield',
    'select',
    'autocomplete',
    'datepicker',
    'fileupload'
  ],
  dataview: [
    'card',
    'list',
    'table',
    'pagination'
  ],
  feedback: [
    'dialog',
    'snackbar'
  ],
  'loading': [
    'progress',
    'spinner'
  ]
};

const MENU = {
  guide: [
    'intro',
    'quickstart',
    'advanced',
    'kill-ie'
  ],
  components,
  plugins: [
    'event',
    'alert',
    'confirm',
    'toast',
    'notify',
    'validator'
  ],
  directives: [
    'lazy-load'
  ],
  helpers: [
    'typeof',
    'detect-ie',
    'other-fn'
  ]
};

let data = [];
for (let key in MENU) {
  let menuitems = MENU[key];
  let items = {};

  if (helpers.isObject(menuitems)) { // components
    items = {
      name: `menu.${key}`
    };

    let subitems = [];
    Object.keys(menuitems).forEach(componentGroupName => {
      // label
      subitems.push({
        name: componentGroupName.toUpperCase(),
        label: true
      });
      // submenu
      let components = menuitems[componentGroupName];
      components.forEach(component => {
        subitems.push({
          url: `/${key}/${component}`,
          name: `menuitem.${component}`
        });
      });
    });

    items.subitems = subitems;
  } else { // others
    items = {
      name: `menu.${key}`,
      subitems: menuitems.map(subitem => {
        return {
          url: `/${key}/${subitem}`,
          name: `menuitem.${subitem}`
        };
      })
    };
  }

  data.push(items);
}

export default data;
