<template>
  <header class="mdl-dialog__title">
    <slot></slot>
    <ui-icon class="close" @click.native="$parent.handleClose">close</ui-icon>
  </header>
</template>

<script>
import UiIcon from '../icon';

export default {
  name: 'ui-dialog-title',
  components: {
    UiIcon
  }
};
</script>
