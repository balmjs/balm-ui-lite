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
    progress: {
      type: [Number, String],
      default: 0
    },
    buffer: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      $progress: null
    };
  },
  watch: {
    progress(val) {
      this.$progress.setProgress(val);
    },
    buffer(val) {
      this.$progress.setBuffer(val);
    }
  },
  computed: {
    className() {
      return {
        'mdl-progress': true,
        'mdl-js-progress': true,
        'mdl-progress--indeterminate': this.active
      };
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$el, 'MaterialProgress');
    if (!this.$progress) {
      this.$progress = this.$el.MaterialProgress;
      if (this.progress) {
        this.$progress.setProgress(this.progress);
      }
      if (this.buffer) {
        this.$progress.setBuffer(this.buffer);
      }
    }
  }
};
</script>
