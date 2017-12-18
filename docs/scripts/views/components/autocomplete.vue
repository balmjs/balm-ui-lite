<template>
  <div class="page--autocomplete">
    <div class="component-title">
      <h3>AutoComplete</h3>
    </div>

    <div class="snippet-demo">
      <ui-autocomplete
        placeholder="Expand Text... (type 'a' and 'b')"
        :model="text"
        :url="url"
        :params="params"
        :suggestion="suggestion"
        :delay="500"
        @input="onInputChange"
        @response="onSuggest"
        @enter="onInputEnter">
      </ui-autocomplete>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-apidoc name="autocomplete"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - AutoComplete'
  },
  data() {
    return {
      text: '',
      url: `${this.$domain}/data/autocomplete.json`,
      params: {},
      suggestion: []
    }
  },
  methods: {
    onInputChange(value) {
      this.text = value;
      this.params = {
        text: value
      };
    },
    onSuggest(data) {
      this.suggestion = data[this.text] ? data[this.text] : [];
    },
    onInputEnter(data) {
      this.text = data.value;
    }
  },
  created() {
    this.showCode('autocomplete');
  }
};
</script>
