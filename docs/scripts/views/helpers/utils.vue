<template>
  <div class="page--is only-md-docs">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>
<script>
  import docs from '../../docs/helpers/utils.md';

  export default {
    metaInfo: {
      titleTemplate: '%s - utils'
    },
    data () {
      return {
        docs
      };
    }
  }
</script>
