<template>
  <div class="apidoc">
    <h4 v-if="showTitle">{{ $t(`components.${name}`) }} API</h4>
    <ui-tabs :active="tab">
      <ui-tab-bar effect position="left" @change="balmUI.onChange('tab', $event)">
        <ui-tab
          v-for="(item, index) in ['props', 'slots', 'events']"
          v-show="docs[item]"
          :key="index">
          {{ item }}
        </ui-tab>
      </ui-tab-bar>
      <ui-panel
        v-for="(item, index) in ['props', 'slots', 'events']"
        v-show="docs[item]"
        :key="index">
        <ui-table
          v-if="docs[item]"
          class="docs-table"
          :data="docs[item].data"
          :thead="docs[item].thead"
          :tbody="docs[item].tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
export default {
  name: 'ui-apidoc',
  props: {
    name: {
      type: String,
      required: true
    },
    showTitle: {
    	type: Boolean,
      default: true
    }
  },
  data() {
    return {
      api: {},
      tab: 0
    };
  },
  computed: {
    docs() {
      let result = {};
      let types = ['props', 'slots', 'events'];
      let flag = false;

      for (let key in types) {
        let value = types[key];
        if (this.api[value].length) {
          result[value] = {
            data: this.api[value],
            thead: this.$docs[value].thead,
            tbody: this.$docs[value].tbody
          };
          if (!flag) {
            flag = true;
            this.tab = +key;
          }
        }
      }

      return result;
    }
  },
  created() {
    this.api = require(`../apidocs/${this.name}.json`);
  }
};
</script>
