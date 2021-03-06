import autoInstall from '../config/auto-install';
import getType from '../helpers/typeof';
import UiDialog from '../components/dialog/dialog';
import UiDialogTitle from '../components/dialog/dialog-title';
import UiDialogContent from '../components/dialog/dialog-content';
import UiDialogActions from '../components/dialog/dialog-actions';
import UiButton from '../components/common/button';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  disableCloseButton: true,
  message: '',
  raw: false,
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false,
  unlocked: false,
  noRipple: false
};

const template = `<ui-dialog
  v-model="open"
  :class="['mdl-confirm', options.className]"
  :unlocked="options.unlocked"
  @close="$_handleClose">
  <ui-dialog-title v-if="options.title" :disableCloseButton="options.disableCloseButton">
    {{ options.title }}
  </ui-dialog-title>
  <ui-dialog-content v-if="options.raw" v-html="options.message"></ui-dialog-content>
  <ui-dialog-content v-else>{{ options.message }}</ui-dialog-content>
  <ui-dialog-actions>
    <ui-button noRipple="options.noRipple" primary @click="$_handleConfirm(true)">
      {{ options.acceptText }}
    </ui-button>
    <ui-button noRipple="options.noRipple" accent @click="$_handleConfirm(false)">
      {{ options.cancelText }}
    </ui-button>
  </ui-dialog-actions>
</ui-dialog>`;

const BalmUI_ConfirmPlugin = {
  install(Vue, config = {}) {
    let vm;

    let options = Object.assign({}, DEFAULT_OPTIONS, config);

    const $confirm = (customOptions = {}) => {
      return new Promise(resolve => {
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
            open: false,
            options
          },
          methods: {
            $_handleClose() {
              this.open = false;
              this.$nextTick(function() {
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
            if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            } else {
              this.options.message = `${customOptions}`;
            }

            this.$nextTick(function() {
              document.body.appendChild(vm.$el);
              this.open = true;
            });
          }
        });
      });
    };

    Vue.prototype.$confirm = $confirm;
  }
};

autoInstall(BalmUI_ConfirmPlugin);

export default BalmUI_ConfirmPlugin;
