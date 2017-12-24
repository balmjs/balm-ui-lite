<template>
  <div class="mdl-layout__drawer">
    <slot><!-- nav content --></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-layout-drawer',
  watch: {
    $route(val) {
      // auto close drawer
      if (this.$el.getAttribute('aria-hidden') === 'false') {
        this.$parent.$el.MaterialLayout.toggleDrawer();
      }
    }
  }
};
</script>
