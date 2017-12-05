<template>
  <div class="page--guide guide-quickstart">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import docs from '../../docs/quickstart.md';

export default {
  metaInfo: {
    titleTemplate: '%s - 快速上手'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
