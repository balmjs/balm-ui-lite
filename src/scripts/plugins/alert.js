import UiDialog from '../components/dialog/dialog';
import UiButton from '../components/common/button';
import {isString, isObject} from '../helpers';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  message: '',
  buttonText: 'OK'
};

const template =
`<ui-dialog
  :class="['mdl-alert', options.className]"
  :open="open"
  @close="handleClose">
  <ui-dialog-title v-if="options.title">{{ options.title }}</ui-dialog-title>
  <ui-dialog-content>{{ options.message }}</ui-dialog-content>
  <ui-dialog-actions>
    <ui-button
      raised
      primary
      @click.native="handleClose">
      {{ options.buttonText }}
    </ui-button>
  </ui-dialog-actions>
</ui-dialog>`;

export default {
  install(Vue) {
    let vm;

    const alert = (options = {}) => {
      vm = new Vue({
        components: {
          UiDialog,
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
    };

    Vue.prototype.$alert = alert;
  }
};
