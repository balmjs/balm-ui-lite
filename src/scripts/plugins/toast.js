import getType from '../helpers/typeof';
import UiSnackbar from '../components/common/snackbar';

const DEFAULT_OPTIONS = {
  className: '',
  message: '',
  timeout: 2750
};
const DELAY = 200;

const template = `<ui-snackbar
  :class="['mdl-toast', options.className]"
  :active="active"
  :message="options.message"
  :timeout="options.timeout">
</ui-snackbar>`;

const BalmUI_ToastPlugin = {
  install(Vue, config = {}) {
    let vm;

    let options = Object.assign({}, DEFAULT_OPTIONS, config);

    const $toast = (customOptions = {}) => {
      if (!document.querySelector('.mdl-toast')) {
        vm = new Vue({
          components: {
            UiSnackbar
          },
          el: document.createElement('div'),
          template,
          data: {
            active: false,
            options
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.options.message = customOptions;
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }

            this.$nextTick(function() {
              document.body.appendChild(this.$el);

              setTimeout(() => {
                this.active = true;
              }, DELAY);

              setTimeout(() => {
                this.active = false;
                setTimeout(() => {
                  document.body.removeChild(this.$el);
                  vm = null;
                }, DELAY);
              }, vm.options.timeout);
            });
          }
        });

      }
    };

    Vue.prototype.$toast = $toast;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI_ToastPlugin);
}

export default BalmUI_ToastPlugin;
