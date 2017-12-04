<template>
  <div class="page--env">
    <ui-markdown :text="docs"></ui-markdown>
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
