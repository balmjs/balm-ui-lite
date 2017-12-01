const input = {
  components: './src/scripts/components',
  helpers: './src/scripts/helpers',
  mixins: './src/scripts/mixins',
  plugins: './src/scripts/plugins'
};

const components = [
  'badge.js',
  'button.js',
  'card.js',
  'checkbox.js',
  'chip.js',
  'dialog.js',
  'icon-toggle.js',
  'icon.js',
  'layout.js',
  'list.js',
  'menu.js',
  'pagination.js',
  'progress.js',
  'radio.js',
  'slider.js',
  'snackbar.js',
  'spinner.js',
  'switch.js',
  'table.js',
  'textfield.js',
  'tooltip.js'
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
