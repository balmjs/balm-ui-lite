<template>
  <header class="mdl-dialog__title">
    <slot></slot>
    <i v-if="!disableCloseButton" class="material-icons close" @click="$parent.handleClose">close</i>
  </header>
</template>

<script>
export default {
  name: 'ui-dialog-title',
  props: {
    disableCloseButton: {
      type: Boolean,
      default: false
    }
  }
};
</script>
