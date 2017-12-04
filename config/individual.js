const input = {
  components: './src/scripts/components',
  helpers: './src/scripts/helpers',
  mixins: './src/scripts/mixins',
  plugins: './src/scripts/plugins'
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
const helpers = ['index.js'];
const mixins = ['index.js'];
const plugins = ['event.js', 'alert.js', 'confirm.js', 'toast.js', 'notify.js'];

const output = {
  components: './components',
  helpers: './helpers',
  mixins: './mixins',
  plugins: './plugins'
};

module.exports = {
  input,
  components,
  helpers,
  mixins,
  plugins,
  output
};
