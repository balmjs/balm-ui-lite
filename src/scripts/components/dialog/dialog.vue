<template>
  <transition
    :name="transitionName"
    :enter-class="enterClass"
    :enter-active-class="enterActiveClass"
    :enter-to-class="enterToClass"
    :leave-class="leaveClass"
    :leave-active-class="leaveActiveClass"
    :leave-to-class="leaveToClass">
    <aside v-if="open" :class="className">
      <div class="mdl-dialog__surface">
        <slot></slot>
      </div>
      <div class="mdl-dialog__backdrop" @click="handleClose"></div>
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
    autoClose: {
      type: Boolean,
      default: true
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
      $body: null
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
        if (val) {
          this.$body.classList.add(CLASSNAME_LOCK);
        } else {
          this.$body.classList.remove(CLASSNAME_LOCK);
        }
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit(EVENT_CLOSE);
    },
    handleAccept() {
      if (this.autoClose) {
        this.handleClose();
      }
      this.$emit(EVENT_CONFIRM, true);
    },
    handleCancel() {
      if (this.autoClose) {
        this.handleClose();
      }
      this.$emit(EVENT_CONFIRM, false);
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
