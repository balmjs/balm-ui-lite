<template>
  <div class="page--kill-ie">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/kill-ie.md';

export default {
  data() {
    return {
      docs: docs
    };
  }
};
</script>
