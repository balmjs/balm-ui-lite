<template>
  <div class="page--install">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/installation.md';

export default {
  data() {
    return {
      docs: docs
    };
  }
};
</script>
