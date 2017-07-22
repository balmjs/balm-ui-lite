<template>
  <nav class="mdl-navigation">
    <slot :className="CLASSNAME_LINK"></slot>
  </nav>
</template>

<script>
const CLASSNAME_LINK = 'mdl-navigation__link';

export default {
  name: 'ui-navigation',
  data() {
    return {
      CLASSNAME_LINK
    };
  }
};
</script>
