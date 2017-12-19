<template>
  <div class="page--guide guide-kill-ie only-md-docs">
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
      docs
    };
  }
};
</script>
