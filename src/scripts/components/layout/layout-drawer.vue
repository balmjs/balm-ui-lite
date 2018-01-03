<template>
  <div class="mdl-layout__drawer" @click="handleClick">
    <slot><!-- nav content --></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-layout-drawer',
  methods: {
    handleClick(event) {
      let isLink = false;
      let currentTarget = event.target;

      if (currentTarget.tagName === 'A') {
        isLink = true;
      } else {
        let parentEl = currentTarget.parentNode;
        while (parentEl && parentEl !== this.$el) {
          console.log(parentEl);
          if (parentEl.tagName === 'A') {
            isLink = true;
            break;
          } else {
            parentEl = parentEl.parentNode;
          }
        }
      }

      if (isLink) {
        // auto close drawer
        if (this.$el.getAttribute('aria-hidden') === 'false') {
          this.$parent.$el.MaterialLayout.toggleDrawer();
        }
      }
    }
  }
};
</script>
