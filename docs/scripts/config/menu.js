const FOUNDATION = [
  'helpers',
  'mixins',
  'plugins'
];

const COMPONENTS = {
  layout: [
    'layout',
    'grid',
    'tabs',
    // 'footer'
  ],
  common: [
    'badge',
    'button',
    'chip',
    'loading',
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
    // 'fileupload'
  ],
  data: [
    'card',
    'list',
    'table',
    'pagination'
  ],
  popup: [
    'dialog',
    'snackbar'
  ]
};

let menu = [{
  name: 'components.foundation',
  components: FOUNDATION.map(item => {
    return {
      url: item,
      name: `foundation.${item}`
    };
  })
}];
for (let groupName in COMPONENTS) {
  let components = COMPONENTS[groupName];
  let items = {
    name: `components.${groupName}`,
    components: components.map(component => {
      return {
        url: component,
        name: `components.${component}` // component.substring(0, 1).toUpperCase() + component.substring(1) // capitalize
      };
    })
  };
  menu.push(items);
}

export default menu;
