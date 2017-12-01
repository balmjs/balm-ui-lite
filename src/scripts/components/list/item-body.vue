<template>
  <span class="mdl-list__item-text-body">
    <slot></slot>
  </span>
</template>

<script>
import itemSecondaryMixin from '../../mixins/item-secondary';

export default {
  name: 'ui-item-body',
  mixins: [itemSecondaryMixin]
};
</script>
