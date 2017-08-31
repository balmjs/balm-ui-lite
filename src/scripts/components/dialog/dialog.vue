<template>
  <transition
    :name="transitionName"
    :enter-class="enterClass"
    :enter-active-class="enterActiveClass"
    :enter-to-class="enterToClass"
    :leave-class="leaveClass"
    :leave-active-class="leaveActiveClass"
    :leave-to-class="leaveToClass">
    <aside v-show="open" :class="className">
      <div class="mdl-dialog__surface" ref="dialog">
        <slot></slot>
      </div>
      <div class="mdl-dialog__backdrop" @click="handleBackdrop"></div>
    </aside>
  </transition>
</template>

<script>
const CLASSNAME_LOCK = 'mdl-dialog-scroll-lock';
const EVENT_CLOSE = 'close';
const EVENT_CONFIRM = 'confirm';

export default {
  name: 'ui-dialog',
  props: {
    // state
    open: {
      type: Boolean,
      default: false
    },
    // ui attributes
    closable: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    transitionName: {
      type: String,
      default: 'default'
    },
    enterClass: {
      type: String,
      default: 'default-enter'
    },
    enterActiveClass: {
      type: String,
      default: 'default-enter-active'
    },
    enterToClass: {
      type: String,
      default: 'default-enter-to'
    },
    leaveClass: {
      type: String,
      default: 'default-leave'
    },
    leaveActiveClass: {
      type: String,
      default: 'default-leave-active'
    },
    leaveToClass: {
      type: String,
      default: 'default-leave-to'
    }
  },
  data() {
    return {
      $body: null,
      $content: null
    };
  },
  computed: {
    className() {
      return {
        'mdl-dialog': true,
        'mdl-dialog--open': this.open
      };
    }
  },
  watch: {
    open(val) {
      if (this.$body) {
        if (!this.$content) {
          this.$content = this.$refs.dialog.querySelector('.mdl-dialog__content');
        }

        if (val) {
          this.$body.classList.add(CLASSNAME_LOCK);
        } else {
          this.$body.classList.remove(CLASSNAME_LOCK);
          this.$content.scrollTop = 0;
        }
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit(EVENT_CLOSE);
    },
    handleBackdrop() {
      if (this.maskClosable) {
        this.handleClose();
      }
    },
    handleAccept() {
      this.$emit(EVENT_CONFIRM, true);
      if (this.closable) {
        this.handleClose();
      }
    },
    handleCancel() {
      this.$emit(EVENT_CONFIRM, false);
      this.handleClose();
    }
  },
  mounted() {
    this.$body = document.querySelector('body');
  },
  beforeDestroy() {
    this.$body.classList.remove(CLASSNAME_LOCK);
  }
};
</script>
