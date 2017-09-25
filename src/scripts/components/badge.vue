<template>
  <span :class="className" :data-badge="value">
    <slot></slot>
  </span>
</template>

<script>
import badgeMixin from '../mixins/badge';

export default {
  name: 'ui-badge',
  mixins: [badgeMixin]
};
</script>
