<template>
  <div>
    <span :id="`tt-${name}`">
      <slot></slot>
    </span>
    <div ref="tooltip"
      :class="[className, positionClassName]"
      :data-mdl-for="`tt-${name}`">
      <slot name="title">{{ title }}</slot>
    </div>
  </div>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/tooltip/tooltip';
import getType from '../../helpers/typeof';

const POSITIONS = ['', 'top', 'right', 'bottom', 'left'];
const POSITION_TOP = 1; // Positions the tooltip to the top of the target
const POSITION_RIGHT = 2; // Positions the tooltip to the right of the target
const POSITION_BOTTOM = 3; // Positions the tooltip to the bottom of the target
const POSITION_LEFT = 4; // Positions the tooltip to the left of the target

const generateRandomAlphaNum = len => {
  let rdmString = '';
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len);
};

export default {
  name: 'ui-tooltip',
  mixins: [mdlMixin],
  props: {
    // ui attributes
    name: {
      type: String,
      default: function() {
        return generateRandomAlphaNum(8);
      }
    },
    title: String,
    large: {
      type: Boolean,
      default: false
    },
    position: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    className() {
      return {
        'mdl-tooltip': true,
        'mdl-tooltip--large': this.large
      };
    },
    positionClassName() {
      let currentPositon = this.position;

      if (getType(currentPositon) === 'string') {
        currentPositon = POSITIONS.indexOf(currentPositon);
      }

      let currentPositonName = (currentPositon > 0 && currentPositon < POSITIONS.length)
        ? POSITIONS[currentPositon]
        : '';
      let className = currentPositonName ? `mdl-tooltip--${currentPositonName}` : '';

      return className;
    }
  },
  mounted() {
    this.$mdl.upgradeElement(this.$refs.tooltip, 'MaterialTooltip');
  }
};
</script>
