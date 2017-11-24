<template>
  <div class="page--plugins">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/plugins.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Plugins'
  },
  data() {
    return {
      docs: docs
    };
  }
};
</script>
