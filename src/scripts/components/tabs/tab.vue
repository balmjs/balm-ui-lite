<template>
  <a class="mdl-tabs__tab" @click.prevent="$parent.handleChange($vnode.key)">
    <slot></slot>
    <span v-if="!$parent.noRipple"
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
  mounted() {
    if (!this.$parent.noRipple) {
      this.$mdl.upgradeElement(this.$refs.ripple, 'MaterialRipple');
    }
  }
};
</script>
