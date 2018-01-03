<template>
  <div class="page--env">
    <ui-markdown class="markdown-page" :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/requirement.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Requirement'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
