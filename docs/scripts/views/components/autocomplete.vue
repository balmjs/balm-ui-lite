<template>
  <div class="page--autocomplete">
    <div class="component-title">
      <h2>AutoComplete 自动补全</h2>
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
              v-model="keywords1"
              :source="source1"
              @selected="balmUI.onChange('keywords1', $event.value)"
            >
            </ui-autocomplete>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>2. 动态数据</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-autocomplete
              placeholder="type 'a' and 'b'"
              v-model="keywords2"
              :source="source2"
              :delay="500"
              remote
              autoFocus
              @search="onSearch"
              @selected="balmUI.onChange('keywords2', $event.value)"
            >
            </ui-autocomplete>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="autocomplete"></ui-apidoc>
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import docs from '@/docs/components/autocomplete.md';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-autoComplete>'
  },
  data() {
    return {
      docs,
      keywords1: '',
      source1: [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme'
      ],
      url: `${this.$domain}/data/autocomplete.json`,
      keywords2: '',
      source2: []
    };
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
