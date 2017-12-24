<template>
  <div :class="['mdl-layout-spacer', screenClassName]"></div>
</template>

<script>
import layoutMixin from '../../mixins/layout';

export default {
  name: 'ui-layout-spacer',
  mixins: [layoutMixin]
};
</script>
