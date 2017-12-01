<template>
  <span class="mdl-list__item-secondary-action">
    <slot></slot>
  </span>
</template>

<script>
import itemSecondaryMixin from '../../mixins/item-secondary';

export default {
  name: 'ui-item-action',
  mixins: [itemSecondaryMixin]
};
</script>
