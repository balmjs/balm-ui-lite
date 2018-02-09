<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import { isString, isObject } from '../../helpers/is';

const DEVICE = ['desktop', 'tablet', 'phone'];
const TYPE_COLUMN = 'col';
const TYPE_OFFSET = 'offset';
const TYPE_ORDER = 'order';
const HIDE_MODE = [''].concat(DEVICE);
const HIDE_DESKTOP = 1;
const HIDE_TABLET = 2;
const HIDE_PHONE = 3;
const ALIGNMENT = ['stretch', 'top', 'middle', 'bottom'];
const ALIGN_STRETCH = 0;
const ALIGN_TOP = 1;
const ALIGN_MIDDLE = 2;
const ALIGN_BOTTOM = 3;

export default {
  name: 'ui-cell',
  props: {
    // ui attributes
    col: [Number, String, Object], // default: 4
    offset: [Number, String, Object],
    order: [Number, String, Object],
    hide: [Number, String],
    align: [Number, String] // default: 0
  },
  computed: {
    className() {
      let result = ['mdl-cell'];

      // Sets the column size for the cell to N
      if (this.col) {
        result = this.handleCell(TYPE_COLUMN, result, this.col);
      }

      // Adds N columns of whitespace before the cell
      if (this.offset) {
        result = this.handleCell(TYPE_OFFSET, result, this.offset);
      }

      // Reorders cell to position N
      if (this.order) {
        result = this.handleCell(TYPE_ORDER, result, this.order);
      }

      // Hides the cell
      let hideMode =
        isString(this.hide) && HIDE_MODE.indexOf(this.hide) > -1
          ? this.hide
          : HIDE_MODE[+this.hide];
      if (hideMode) {
        result.push(`mdl-cell--hide-${hideMode}`);
      }

      // Aligns the cell to the parent
      let currentAlign =
        isString(this.align) && ALIGNMENT.indexOf(this.align) > -1
          ? this.align
          : ALIGNMENT[+this.align];
      if (currentAlign) {
        result.push(`mdl-cell--${currentAlign}`);
      }

      return result;
    }
  },
  methods: {
    handleCell(type, result, data) {
      if (isObject(data)) {
        for (let key in data) {
          let value = data[key];
          let suffix = DEVICE.indexOf(key) > -1 ? `-${key}` : '';
          if (type === TYPE_ORDER) {
            result.push(`mdl-cell--${type}-${value}${suffix}`);
          } else {
            result.push(`mdl-cell--${value}-${type}${suffix}`);
          }
        }
      } else {
        let value = data;
        if (type === TYPE_ORDER) {
          result.push(`mdl-cell--${type}-${value}`);
        } else {
          result.push(`mdl-cell--${value}-${type}`);
        }
      }

      return result;
    }
  }
};
</script>
