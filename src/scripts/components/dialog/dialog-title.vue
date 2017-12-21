<template>
  <header class="mdl-dialog__title">
    <slot></slot>
    <i class="material-icons close" @click="$parent.handleClose">close</i>
  </header>
</template>

<script>
export default {
  name: 'ui-dialog-title'
};
</script>
