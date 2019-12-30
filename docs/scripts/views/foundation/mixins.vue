<template>
  <div class="page--mixins">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '@/docs/mixins.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Mixins'
  },
  data() {
    return {
      docs: docs
    };
  }
};
</script>
