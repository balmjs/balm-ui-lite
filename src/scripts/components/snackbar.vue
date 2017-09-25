<template>
  <div :class="className"
    ref="popup"
    aria-live="assertive"
    aria-atomic="true"
    aria-relevant="text">
    <div class="mdl-snackbar__text">{{ currentMessage }}</div>
    <button class="mdl-snackbar__action" type="button">{{ actionText }}</button>
  </div>
</template>

<script>
import mdlMixin from '../mixins/mdl';
import '../../material-design-lite/snackbar/snackbar';
import {isString} from '../helpers';

const TYPES = ['toast', 'snackbar'];
const TYPE_TOAST = 0;
const TYPE_SNACKBAR = 1;
const EVENT_DONE = 'done';

export default {
  name: 'ui-snackbar',
  mixins: [mdlMixin],
  props: {
    // state
    active: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      required: true
    },
    // ui attributes
    type: {
      type: [Number, String],
      default: 1
    },
    timeout: {
      type: Number,
      default: 2750
    },
    actionHandler: Function,
    actionText: String
  },
  data() {
    return {
      currentActive: this.active,
      currentMessage: this.message
    };
  },
  computed: {
    className() {
      return {
        'mdl-snackbar': true,
        'mdl-js-snackbar': true,
        'mdl-snackbar--active': this.active
      }
    },
    isSnackbar() {
      let type = isString(this.type) ? TYPES[TYPE_SNACKBAR] : TYPE_SNACKBAR;
      return this.type === type;
    }
  },
  watch: {
    active(val) {
      if (!this.currentActive && val) {
        this.currentActive = val;
        this.show();
      }
    },
    message(val) {
      this.currentMessage = val;
    }
  },
  methods: {
    show() {
      let data = {
        message: this.currentMessage,
        timeout: this.timeout
      };

      if (this.isSnackbar) {
        data.actionHandler = this.actionHandler;
        data.actionText = this.actionText;
      }

      this.$refs.popup.MaterialSnackbar.showSnackbar(data);

      setTimeout(() => {
        this.currentActive = false;
        this.$emit(EVENT_DONE);
      }, this.timeout);
    }
  },
  created() {
    if (this.isSnackbar) {
      if (!(this.actionHandler && this.actionText)) {
        console.warn('`actionHandler` and `actionText` is required in a snackbar.');
      }
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialSnackbar');
  }
};
</script>
