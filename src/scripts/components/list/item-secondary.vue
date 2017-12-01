<template>
  <div class="mdl-list__item-secondary-content">
    <slot></slot>
  </div>
</template>

<script>
import itemSecondaryMixin from '../../mixins/item-secondary';

export default {
  name: 'ui-item-secondary',
  mixins: [itemSecondaryMixin]
};
</script>
