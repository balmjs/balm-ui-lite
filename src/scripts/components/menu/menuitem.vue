<template>
  <li :class="className" :disabled="item.disabled || null">
    <slot>{{ item[label] }}</slot>
  </li>
</template>

<script>
export default {
  name: 'ui-menuitem',
  props: {
    // ui attributes
    item: {
      type: Object,
      default: function() {
        return {};
      }
    },
    label: {
      type: String,
      default: 'label'
    },
    divider: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasDivider() {
      return this.divider || this.item.divider;
    },
    className() {
      return {
        'mdl-menu__item': true,
        'mdl-menu__item--full-bleed-divider': this.hasDivider || false,
      };
    }
  }
};
</script>
