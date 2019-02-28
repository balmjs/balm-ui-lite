<template>
  <div class="page--checkbox">
    <div class="component-title">
      <h2>Checkbox 多选框</h2>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 单个复选框（boolean）</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-checkbox v-model="checked1">Checkbox ({{ checked1 }})</ui-checkbox>
          </div>
          <div class="snippet-demo">
            <ui-checkbox filled v-model="checked2">Checkbox ({{ checked2 }})</ui-checkbox>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">默认勾选式</div>
          <div class="snippet-caption">矩形填充式</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>2. 多个复选框（array）</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo" v-for="(num, index) in [1, 2, 3]" :key="index">
            <ui-checkbox :value="num" v-model="numberOptions">Option {{ num }}</ui-checkbox>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-captions-padding"></div>
          <div class="snippet-caption">
            <ui-button @click="balmUI.onChange('numberOptions', [1, 2])">choose 1,2</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click="balmUI.onChange('numberOptions', [1, 3])">choose 1,3</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click="balmUI.onChange('numberOptions', [2, 3])">choose 2,3</ui-button>
          </div>
          <div class="snippet-captions-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo" v-for="(str, index) in ['1', '2', '3']" :key="index">
            <ui-checkbox :value="str" v-model="stringOptions">Option '{{ str }}'</ui-checkbox>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-captions-padding"></div>
          <div class="snippet-caption">
            <ui-button @click="balmUI.onChange('stringOptions', ['1', '2'])">choose '1','2'</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click="balmUI.onChange('stringOptions', ['1', '3'])">choose '1','3'</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click="balmUI.onChange('stringOptions', ['2', '3'])">choose '2','3'</ui-button>
          </div>
          <div class="snippet-captions-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </div>
    <ui-apidoc name="checkbox"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-checkbox>'
  },
  data() {
    return {
      checked1: true,
      checked2: false,
      numberOptions: [],
      stringOptions: []
    };
  },
  created() {
    this.showCode('checkbox', 3);
  }
};
</script>
