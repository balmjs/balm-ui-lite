<template>
  <div class="page--helpers">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../docs/helpers.md';

export default {
  data() {
    return {
      docs: docs
    };
  }
};
</script>
