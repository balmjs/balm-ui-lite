<template>
  <a :class="className" :data-badge="value">
    <slot></slot>
  </a>
</template>

<script>
import badgeMixin from '../../mixins/badge';

export default {
  name: 'ui-badge-link',
  mixins: [badgeMixin]
};
</script>
