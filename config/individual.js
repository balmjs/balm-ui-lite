const input = {
  components: './src/scripts/components',
  helpers: './src/scripts/helpers',
  mixins: './src/scripts/mixins',
  plugins: './src/scripts/plugins'
};

const components = [
  'button.js'
];
const helpers = 'index.js';
const mixins = 'index.js';
const plugins = [
  'event.js',
  'alert.js',
  'confirm.js',
  'toast.js',
  'notify.js'
];

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
