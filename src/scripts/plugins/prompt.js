import getType from '../helpers/typeof';
import UiDialog from '../components/dialog/dialog';
import UiDialogTitle from '../components/dialog/dialog-title';
import UiDialogContent from '../components/dialog/dialog-content';
import UiDialogActions from '../components/dialog/dialog-actions';
import UiButton from '../components/common/button';
import UITextfield from '../components/form/textfield'

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
  <ui-dialog-content>
    {{ options.message }}
    <br>
    <UITextfield :model="formData.value" @change="$_onChange($event)"></UITextfield>
  </ui-dialog-content>
  <ui-dialog-actions>
    <ui-button primary @click="$_handleConfirm">
      {{ options.acceptText }}
    </ui-button>
    <ui-button accent @click="$_handleClose">
      {{ options.cancelText }}
    </ui-button>
  </ui-dialog-actions>
</ui-dialog>`;

const BalmUIPromptPlugin = {
  install(Vue, config) {
    let vm;

    let options = Object.assign({}, DEFAULT_OPTIONS, config);

    const UiPrompt= (customOptions = {}, value) => {
      return new Promise((resolve) => {
        vm = new Vue({
          components: {
            UiDialog,
            UiDialogTitle,
            UiDialogContent,
            UiDialogActions,
            UITextfield,
            UiButton
          },
          el: document.createElement('div'),
          template,
          data: {
            open: true,
            options,
            formData: {
              value: ''
            }
          },
          methods: {
            $_onChange (event) {
              this.formData.value = event.target.value;
            },
            $_handleClose() {
              this.open = false;
              this.$nextTick(function () {
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
            if (getType(customOptions) === 'string') {
              this.options.message = customOptions;
              value && (this.formData.value = value);
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
              this.options.defaultValue && (this.formData.value = this.options.defaultValue);
            }

            this.$nextTick(function () {
              document.body.appendChild(vm.$el);
            });
          }
        });
      });
    };

    Vue.prototype.$prompt = UiPrompt;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUIPromptPlugin);
}

export default BalmUIPromptPlugin;
