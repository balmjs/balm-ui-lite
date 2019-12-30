<template>
  <div class="page--guide guide-advanced only-md-docs">
    <ui-markdown class="markdown-page" :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '@/docs/guide/advanced.md';

export default {
  metaInfo: {
    titleTemplate: '%s - 进阶用法'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
