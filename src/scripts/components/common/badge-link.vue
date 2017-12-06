<template>
  <a :class="[className, 'mdl-badge--link']" :data-badge="value">
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
