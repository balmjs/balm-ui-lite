<template>
  <div class="page--guide guide-advanced only-md-docs">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/advanced.md';

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
