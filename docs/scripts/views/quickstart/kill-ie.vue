<template>
  <div class="page--kill-ie">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/kill-ie.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Kill IE'
  },
  data() {
    return {
      docs: docs
    };
  }
};
</script>
