const input = {
  components: './src/scripts/components',
  helpers: './src/scripts/helpers',
  plugins: './src/scripts/plugins',
  directives: './src/scripts/directives'
};

const components = [
  'icon.js',
  // MDL Components
  'badge.js',
  'button.js',
  'card.js',
  'chip.js',
  'dialog.js',
  'layout.js',
  'list.js',
  'progress.js',
  'spinner.js',
  'menu.js',
  'slider.js',
  'snackbar.js',
  'checkbox.js',
  'radio.js',
  'icon-toggle.js',
  'switch.js',
  'table.js',
  'textfield.js',
  'tooltip.js',
  // Plus Components
  'divider.js',
  'pagination.js',
  'select.js',
  'fileupload.js',
  'autocomplete.js',
  'datepicker.js',
  'rangepicker.js'
];
const helpers = [
  'is.js',
  'utils.js',
  'detect-ie.js'
];
const plugins = [
  'event.js',
  'alert.js',
  'confirm.js',
  'toast.js',
  'notify.js',
  'validator.js'
];
const directives = ['lazy-load.js'];

const output = {
  components: './components',
  helpers: './helpers',
  plugins: './plugins',
  directives: './directives'
};

module.exports = {
  input,
  components,
  helpers,
  plugins,
  directives,
  output
};
