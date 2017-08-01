<template>
  <div class="docs-checkbox">
    <div class="component-title">
      <h3>Checkbox button</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-checkbox
              :value="true"
              :model="option"
              @change="onChange('option', $event)">Checkbox ({{ option }})</ui-checkbox>
          </div>
          <div class="snippet-demo">
            <ui-checkbox filled
              :value="true"
              :model="option"
              @change="onChange('option', $event)">Checkbox2 ({{ option }})</ui-checkbox>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <!-- <ui-markdown :text="code[0]"></ui-markdown> -->
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo" v-for="(num, index) in [1, 2, 3]">
            <ui-checkbox
              :key="index"
              :value="num"
              :model="numberOptions"
              @change="onChangeNumber">Option {{ num }}</ui-checkbox>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-captions-padding"></div>
          <div class="snippet-caption">
            <ui-button @click.native="onWatchNumber([1, 2])">choose 1,2</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click.native="onWatchNumber([1, 3])">choose 1,3</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click.native="onWatchNumber([2, 3])">choose 2,3</ui-button>
          </div>
          <div class="snippet-captions-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo" v-for="(str, index) in ['A', 'B', 'C']">
            <ui-checkbox
              :key="index"
              :value="str"
              :model="stringOptions"
              @change="onChangeString">Option {{ str }}</ui-checkbox>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-captions-padding"></div>
          <div class="snippet-caption">
            <ui-button @click.native="onWatchString(['A', 'B'])">choose A,B</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click.native="onWatchString(['A', 'C'])">choose A,C</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click.native="onWatchString(['B', 'C'])">choose B,C</ui-button>
          </div>
          <div class="snippet-captions-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <ui-apidoc name="checkbox"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      option: false,
      numberOptions: [],
      stringOptions: []
    };
  },
  methods: {
    onChangeNumber(val) {
      this.numberOptions = val;
    },
    onChangeString(val) {
      this.stringOptions = val;
    },
    onWatchNumber(val) {
      this.numberOptions = val;
    },
    onWatchString(val) {
      this.stringOptions = val;
    }
  },
  created() {
    this.showCode('checkbox');
  }
};
</script>
