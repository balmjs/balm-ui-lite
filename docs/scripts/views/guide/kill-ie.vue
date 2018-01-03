<template>
  <div class="page--guide guide-kill-ie only-md-docs">
    <ui-markdown class="markdown-page" :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/guide/kill-ie.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Kill IE'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
