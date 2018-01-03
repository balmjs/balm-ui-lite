<template>
  <div class="page--guide guide-quickstart  only-md-docs">
    <ui-markdown class="markdown-page" :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/guide/quickstart.md';

export default {
  metaInfo: {
    titleTemplate: '%s - 快速上手'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
