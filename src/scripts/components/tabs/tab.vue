<template>
  <a class="mdl-tabs__tab" @click.prevent="$parent.handleChange($vnode.key)">
    <slot></slot>
    <span ref="ripple"
      v-if="$parent.effect"
      class="mdl-tabs__ripple-container mdl-js-ripple-effect">
      <span class="mdl-ripple"></span>
    </span>
  </a>
</template>

<script>
import {isString} from '../../helpers';

export default {
  name: 'ui-tab',
  mounted() {
    if (this.$parent.effect) {
      this.$mdl.upgradeElement(this.$refs.ripple, 'MaterialRipple');
    }
  }
};
</script>
