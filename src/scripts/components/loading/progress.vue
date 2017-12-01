<template>
  <div :class="className"></div>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/progress/progress';

export default {
  name: 'ui-progress',
  mixins: [mdlMixin],
  props: {
    // state
    active: {
      type: Boolean,
      default: false
    },
    // TODO
    // progress: {
    //   type: [Number, String],
    //   default: 0
    // },
    // ui attributes
    noBuffer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-progress': true,
        'mdl-js-progress': true,
        'mdl-progress--indeterminate': this.active,
        'no-buffer': this.noBuffer
      };
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialProgress');
  }
};
</script>
