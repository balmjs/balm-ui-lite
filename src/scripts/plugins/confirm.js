import UiDialog from '../components/dialog/dialog';
import UiDialogTitle from '../components/dialog/dialog-title';
import UiDialogContent from '../components/dialog/dialog-content';
import UiDialogActions from '../components/dialog/dialog-actions';
import UiButton from '../components/button';
import {isString, isObject, isFunction} from '../helpers';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  message: '',
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false,
  unlocked: false
};

const template =
`<ui-dialog
  :class="['mdl-confirm', options.className]"
  :open="open"
  :unlocked="options.unlocked"
  @close="handleClose">
  <ui-dialog-title v-if="options.title">{{ options.title }}</ui-dialog-title>
  <ui-dialog-content>{{ options.message }}</ui-dialog-content>
  <ui-dialog-actions>
    <ui-button
      raised
      primary
      @click.native="handleConfirm(true)">
      {{ options.acceptText }}
    </ui-button>
    <ui-button
      raised
      accent
      @click.native="handleConfirm(false)">
      {{ options.cancelText }}
    </ui-button>
  </ui-dialog-actions>
</ui-dialog>`;

export default {
  install(Vue) {
    let vm;

    const UiConfirm = (options = {}) => {
      return new Promise((resolve, reject) => {
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
            options: DEFAULT_OPTIONS
          },
          methods: {
            handleClose() {
              this.open = false;
              document.body.removeChild(this.$el);
              document.body.classList.remove('mdl-dialog-scroll-lock');
              vm = null;
            },
            handleConfirm(result) {
              this.handleClose();
              if (isFunction(this.options.callback)) {
                this.options.callback(result);
              } else {
                if (result) {
                  resolve();
                } else {
                  reject();
                }
              }
            }
          },
          created() {
            if (isString(options)) {
              this.options.message = options;
            } else if (isObject(options)) {
              this.options = Object.assign(DEFAULT_OPTIONS, options);
            }
          }
        });

        document.body.appendChild(vm.$el);
        vm.open = true;
      });
    };

    Vue.prototype.$confirm = UiConfirm;
  }
};
