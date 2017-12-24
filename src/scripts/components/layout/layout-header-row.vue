<template>
  <div :class="['mdl-layout__header-row', screenClassName]">
    <slot><!-- header content --></slot>
  </div>
</template>

<script>
import layoutMixin from '../../mixins/layout';

export default {
  name: 'ui-layout-header-row',
  mixins: [layoutMixin]
};
</script>
