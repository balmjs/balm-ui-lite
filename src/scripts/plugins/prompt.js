import autoInstall from '../config/auto-install';
import getType from '../helpers/typeof';
import UiDialog from '../components/dialog/dialog';
import UiDialogTitle from '../components/dialog/dialog-title';
import UiDialogContent from '../components/dialog/dialog-content';
import UiDialogActions from '../components/dialog/dialog-actions';
import UiButton from '../components/common/button';
import UiTextfield from '../components/form/textfield';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  disableCloseButton: true,
  message: '',
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
  <ui-dialog-content>
    {{ options.message }}
    <br>
    <ui-textfield v-model="formData.value"></ui-textfield>
  </ui-dialog-content>
  <ui-dialog-actions>
    <ui-button noRipple="options.noRipple" primary @click="$_handleConfirm">
      {{ options.acceptText }}
    </ui-button>
    <ui-button noRipple="options.noRipple" accent @click="$_handleClose">
      {{ options.cancelText }}
    </ui-button>
  </ui-dialog-actions>
</ui-dialog>`;

const BalmUI_PromptPlugin = {
  install(Vue, config = {}) {
    let vm;

    let options = Object.assign({}, DEFAULT_OPTIONS, config);

    const $prompt = (customOptions = {}, value) => {
      return new Promise(resolve => {
        vm = new Vue({
          components: {
            UiDialog,
            UiDialogTitle,
            UiDialogContent,
            UiDialogActions,
            UiTextfield,
            UiButton
          },
          el: document.createElement('div'),
          template,
          data: {
            open: false,
            options,
            formData: {
              value: ''
            }
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
            $_handleConfirm() {
              this.$_handleClose();
              if (getType(this.options.callback) === 'function') {
                this.options.callback(this.formData.value);
              } else {
                resolve(this.formData.value);
              }
            }
          },
          created() {
            if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
              this.options.defaultValue &&
                (this.formData.value = this.options.defaultValue);
            } else {
              this.options.message = `${customOptions}`;
              value && (this.formData.value = `${value}`);
            }

            this.$nextTick(function() {
              document.body.appendChild(vm.$el);
              this.open = true;
            });
          }
        });
      });
    };

    Vue.prototype.$prompt = $prompt;
  }
};

autoInstall(BalmUI_PromptPlugin);

export default BalmUI_PromptPlugin;
