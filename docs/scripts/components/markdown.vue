<template>
  <div :class="className" v-html="text"></div>
</template>

<script>
export default {
  name: 'ui-markdown',
  props: {
    text: {
      type: String,
      required: true
    },
    code: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return this.code ? 'snippet-code' : 'markdown-body';
    }
  },
  mounted() {
    // Supported languages:
    // http://prismjs.com/#languages-list
    this.$prism.highlightAll();
  }
};
</script>
