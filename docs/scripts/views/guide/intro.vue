<template>
  <div class="page--guide guide-intro only-md-docs">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/intro.md';

export default {
  metaInfo: {
    titleTemplate: '%s - 介绍'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
