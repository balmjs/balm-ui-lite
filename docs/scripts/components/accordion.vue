<template>
  <div class="ui-accordion">
    <div class="toggle-button-container" @click="toggle">
      <slot name="toggle-button">
        <ui-button>
          <ui-icon size="16">code</ui-icon>
          {{ show ? '收起代码' : '显示代码' }}
        </ui-button>
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
    props: {
      expanded: {
      	type: Boolean,
        default: false
      }
    },
  	data () {
  		return {
  			show: this.expanded
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
