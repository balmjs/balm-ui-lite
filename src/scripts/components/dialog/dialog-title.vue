<template>
  <header class="mdl-dialog__title">
    <slot></slot>
    <i
      v-if="!disableCloseBtn"
      class="material-icons close"
      @click="$parent.$emit('change', false)"
    >close</i>
  </header>
</template>

<script>
export default {
  name: 'ui-dialog-title',
  props: {
    disableCloseBtn: {
      type: Boolean,
      default: false
    }
  }
};
</script>
