<template>
  <div class="page--radio">
    <div class="component-title">
      <h3>Radio button</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-radio name="sex" value="M" :model="gender" @change="chooseSex">Male</ui-radio>
          </div>
          <div class="snippet-demo">
            <ui-radio name="sex" value="F" :model="gender" @change="chooseSex">Female</ui-radio>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-captions-padding"></div>
          <div class="snippet-caption">
            <ui-button @click.native="onWatchSex('M')">choose Male</ui-button>
          </div>
          <div class="snippet-caption">
            <ui-button @click.native="onWatchSex('F')">choose Female</ui-button>
          </div>
          <div class="snippet-captions-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <ui-apidoc name="radio"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      gender: ''
    };
  },
  methods: {
    chooseSex(val) {
      this.gender = val;
    },
    onWatchSex(val) {
      this.gender = val;
    }
  },
  created() {
    this.showCode('radio');
  }
};
</script>
