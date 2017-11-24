<template>
  <div class="page--advanced">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/advanced.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Advanced'
  },
  data() {
    return {
      docs: docs
    };
  }
};
</script>
