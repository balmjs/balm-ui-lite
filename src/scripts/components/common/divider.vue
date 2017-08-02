<template>
  <div class="mdl-divider" :class="className">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
import {isNumber, isString} from '../../helpers';

const typeArr = ['horizontal', 'vertical'];
const typeObj = {
  h: 'horizontal',
  v: 'vertical'
};

export default {
  name: 'ui-divider',
  props: {
    type: {
      type: [String, Number],
      default: 'horizontal'
    }
  },
  computed: {
    className() {
      let type = this.type;

      if(isNumber(type)){
        return typeArr[type] || 'horizontal';
      }

      if (isString(type)) {
        if (type.length === 1) {
          return typeObj[type.toLowerCase()] || '';
        }
        return type;
      }
    }
  }
};
</script>
