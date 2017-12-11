<template>
  <header class="mdl-dialog__title">
    <slot></slot>
    <ui-icon class="close" @click="$parent.handleClose">close</ui-icon>
  </header>
</template>

<script>
import UiIcon from '../common/icon';

export default {
  name: 'ui-dialog-title',
  components: {
    UiIcon
  }
};
</script>
