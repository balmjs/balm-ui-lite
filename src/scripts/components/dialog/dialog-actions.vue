<template>
  <div :class="className">
    <slot>
      <ui-button primary @click.native="$parent.handleAccept">
        {{ acceptText }}
      </ui-button>
      <ui-button accent class="close" @click.native="$parent.handleCancel">
        {{ cancelText }}
      </ui-button>
    </slot>
  </div>
</template>

<script>
import UiButton from '../common/button';

export default {
  name: 'ui-dialog-actions',
  components: {
    UiButton
  },
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    },
    acceptText: {
      type: String,
      default: 'OK'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  computed: {
    className() {
      return {
        'mdl-dialog__actions': true,
        'mdl-dialog__actions--full-width': this.fullWidth
      };
    }
  }
};
</script>
