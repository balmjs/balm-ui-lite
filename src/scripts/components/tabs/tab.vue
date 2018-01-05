<template>
  <a v-if="$parent" class="mdl-tabs__tab" @click.prevent="handleClick">
    <slot></slot>
    <span v-if="hasRipple"
      ref="ripple"
      class="mdl-tabs__ripple-container mdl-js-ripple-effect">
      <span class="mdl-ripple"></span>
    </span>
  </a>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/ripple/ripple';

export default {
  name: 'ui-tab',
  mixins: [mdlMixin],
  props: {
    // ui attributes
    noRipple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasRipple() {
      return !(this.$parent ? this.$parent.noRipple : this.noRipple);
    }
  },
  created() {
    if (!this.$parent) {
      console.warn('<ui-tab> needs a <ui-tab-bar> container.');
    }
  },
  mounted() {
    if (this.$parent && this.hasRipple) {
      this.$mdl.upgradeElement(this.$refs.ripple, 'MaterialRipple');
    }
  },
  methods: {
    handleClick() {
      this.$parent.handleChange(this.$vnode.key);
    }
  }
};
</script>
