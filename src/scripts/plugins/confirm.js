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

const template =
`<ui-dialog
  :class="['mdl-confirm', options.className]"
  :open="open"
  :unlocked="options.unlocked"
  @close="handleClose">
  <ui-dialog-title v-if="options.title">{{ options.title }}</ui-dialog-title>
  <ui-dialog-content>{{ options.message }}</ui-dialog-content>
  <ui-dialog-actions>
    <ui-button primary @click.native="handleConfirm(true)">
      {{ options.acceptText }}
    </ui-button>
    <ui-button accent @click.native="handleConfirm(false)">
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
              if (getType(this.options.callback) === 'function') {
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
            if (getType(options) === 'string') {
              this.options.message = options;
            } else if (getType(options) === 'object') {
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
