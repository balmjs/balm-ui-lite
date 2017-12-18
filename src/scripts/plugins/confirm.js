import getType from '../helpers/typeof';
import UiDialog from '../components/dialog/dialog';
import UiDialogTitle from '../components/dialog/dialog-title';
import UiDialogContent from '../components/dialog/dialog-content';
import UiDialogActions from '../components/dialog/dialog-actions';
import UiButton from '../components/common/button';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  message: '',
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false,
  unlocked: false
};

const template = `<ui-dialog
  :class="['mdl-confirm', options.className]"
  :open="open"
  :unlocked="options.unlocked"
  @close="$_handleClose">
  <ui-dialog-title v-if="options.title">{{ options.title }}</ui-dialog-title>
  <ui-dialog-content>{{ options.message }}</ui-dialog-content>
  <ui-dialog-actions>
    <ui-button primary @click="$_handleConfirm(true)">
      {{ options.acceptText }}
    </ui-button>
    <ui-button accent @click="$_handleConfirm(false)">
      {{ options.cancelText }}
    </ui-button>
  </ui-dialog-actions>
</ui-dialog>`;

const BalmUIConfirmPlugin = {
  install(Vue, config) {
    let vm;

    let options = Object.assign({}, DEFAULT_OPTIONS, config);

    const UiConfirm = (customOptions = {}) => {
      return new Promise((resolve) => {
        vm = new Vue({
          components: {
            UiDialog,
            UiDialogTitle,
            UiDialogContent,
            UiDialogActions,
            UiButton
          },
          el: document.createElement('div'),
          template,
          data: {
            open: true,
            options
          },
          methods: {
            $_handleClose() {
              this.open = false;
              this.$nextTick(function () {
                document.body.removeChild(this.$el);
                document.body.classList.remove('mdl-dialog-scroll-lock');
                vm = null;
              });
            },
            $_handleConfirm(result) {
              this.$_handleClose();
              if (getType(this.options.callback) === 'function') {
                this.options.callback(result);
              } else {
                resolve(result);
              }
            }
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.options.message = customOptions;
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }

            this.$nextTick(function () {
              document.body.appendChild(vm.$el);
            });
          }
        });
      });
    };

    Vue.prototype.$confirm = UiConfirm;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUIConfirmPlugin);
}

export default BalmUIConfirmPlugin;
