<template>
  <div :class="className"></div>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/spinner/spinner';

export default {
  name: 'ui-spinner',
  mixins: [mdlMixin],
  props: {
    // state
    active: {
      type: Boolean,
      default: false
    },
    // ui attributes
    singleColor: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-spinner': true,
        'mdl-js-spinner': true,
        'is-active': this.active,
        'mdl-spinner--single-color': this.singleColor // Uses a single (primary palette) color instead of changing colors
      };
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialSpinner');
  }
};
</script>
