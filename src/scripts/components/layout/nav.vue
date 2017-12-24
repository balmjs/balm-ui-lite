<template>
  <nav :class="['mdl-navigation', screenClassName]">
    <slot :className="CLASSNAME_LINK"></slot>
  </nav>
</template>

<script>
import layoutMixin from '../../mixins/layout';

const CLASSNAME_LINK = 'mdl-navigation__link';

export default {
  name: 'ui-nav',
  mixins: [layoutMixin],
  data() {
    return {
      CLASSNAME_LINK
    };
  }
};
</script>
