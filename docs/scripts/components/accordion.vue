<template>
  <div class="ui-accordion">
    <div class="toggle-button-container" @click="toggle">
      <slot name="toggle-button">
        <ui-button>{{ show ? '收起代码' : '显示代码' }}</ui-button>
      </slot>
    </div>
    <div class="ui-accordion__content">
      <div class="inner" v-show="show">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  	name: 'ui-accordion',
  	data () {
  		return {
  			show: false
      }
    },
    methods: {
      toggle () {
      	this.show = !this.show;
      	this.$emit('accordion-toggle', this.show);
      }
    }
  }
</script>
