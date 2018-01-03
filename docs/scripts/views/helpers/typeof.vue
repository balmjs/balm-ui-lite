<template>
  <div class="page--is only-md-docs">
    <ui-markdown class="markdown-page" :text="docs"></ui-markdown>
  </div>
</template>
<script>
  import docs from '../../docs/helpers/typeof.md';

  export default {
    metaInfo: {
      titleTemplate: '%s - typeof'
    },
    data () {
      return {
        docs
      };
    }
  }
</script>
