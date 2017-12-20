<template>
  <div class="page--autocomplete">
    <div class="component-title">
      <h3>AutoComplete 自动补全</h3>
      <p>输入框自动完成功能。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 静态数据</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-autocomplete
              placeholder="try to type"
              :model="keywords1"
              :source="source1"
              @input="balmUI.onChange('keywords1', $event)"
              @selected="balmUI.onChange('keywords1', $event.value)">
            </ui-autocomplete>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <h4>2. 动态数据</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-autocomplete
              placeholder="type 'a' and 'b'"
              :model="keywords2"
              :source="source2"
              :delay="500"
              remote
              autoFocus
              @input="balmUI.onChange('keywords2', $event)"
              @search="onSearch"
              @selected="balmUI.onChange('keywords2', $event.value)">
            </ui-autocomplete>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <ui-apidoc name="autocomplete"></ui-apidoc>
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import docs from '../../docs/components/autocomplete.md';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-autoComplete>'
  },
  data() {
    return {
      docs,
      keywords1: '',
      source1: [ 'c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby' ],
      url: `${this.$domain}/data/autocomplete.json`,
      keywords2: '',
      source2: []
    }
  },
  methods: {
    async onSearch(keywords) {
      let response = await this.$http.get(this.url, {
        params: {
          text: keywords
        }
      });
      let data = response.data;
      this.source2 = data[keywords] ? data[keywords] : [];
    }
  },
  created() {
    this.showCode('autocomplete', 2);
  }
};
</script>
