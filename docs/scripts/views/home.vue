<template>
  <div class="page--home">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../docs/intro.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Home'
  },
  data() {
    return {
      docs: docs
    };
  }
};
</script>
