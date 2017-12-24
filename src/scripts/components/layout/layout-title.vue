<template>
  <div :class="['mdl-layout__title', screenClassName]">
    <slot></slot>
  </div>
</template>

<script>
import layoutMixin from '../../mixins/layout';

export default {
  name: 'ui-layout-title',
  mixins: [layoutMixin]
};
</script>
