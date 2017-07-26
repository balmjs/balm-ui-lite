<template>
  <ul :class="[menuClassName, positionClassName]" :data-mdl-for="btnId">
    <slot>
      <ui-menuitem v-for="(item, index) in currentMenu"
        :key="index"
        :item="isObject(item) ? item : {}"
        @click.native="handleItem(item)">
      </ui-menuitem>
    </slot>
  </ul>
</template>

<script>
import '../../../material-design-lite/menu/menu';
import '../../../material-design-lite/ripple/ripple';
import {isString, isObject} from '../../helpers';
import UiMenuItem from './menuitem';

const POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const POSITION_NONE = 0; // Default
const POSITION_TOP_LEFT = 1; // Positions menu above button, aligns left edge of menu with button
const POSITION_TOP_RIGHT = 2; // Positions menu above button, aligns right edge of menu with button
const POSITION_BOTTOM_LEFT = 3; // Positions menu below button, aligns left edge of menu with button
const POSITION_BOTTOM_RIGHT = 4; // Positions menu below button, aligns right edge of menu with button
const EVENT_SELECTED = 'selected';

export default {
  name: 'ui-menu',
  components: {
    UiMenuItem
  },
  props: {
    // state
    btnId: {
      type: String,
      required: true
    },
    menu: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // ui attributes
    noRipple: {
      type: Boolean,
      default: false
    },
    position: {
      type: [Number, String],
      default: 0
    },
    // just for '<ui-select>'
    isSelect: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      isString,
      isObject,
      currentMenu: this.menu
    };
  },
  computed: {
    menuClassName() {
      return {
        'mdl-menu': true,
        'mdl-js-menu': true,
        'mdl-js-ripple-effect': !this.noRipple,
        'mdl-js-ripple-effect--ignore-events': !this.noRipple // bugfix for ripple
      };
    },
    positionClassName() {
      let currentPositon = isString(this.position)
        ? POSITIONS.indexOf(this.position) + 1
        : this.position;

      let currentPositonName = (currentPositon > 0 && currentPositon <= POSITIONS.length)
          ? POSITIONS[currentPositon - 1]
          : false;

      let className = currentPositonName
        ? `mdl-menu--${currentPositonName}`
        : '';

      return className;
    }
  },
  watch: {
    menu(val) {
      this.currentMenu = val;
    }
  },
  methods: {
    handleItem(data) {
      if (!data.disabled) {
        this.$emit(EVENT_SELECTED, Object.assign({}, data));
      }
    }
  },
  mounted() {
    this.$mdl.upgradeElements(this.$el);

    // if (this.isSelect && observeMutationSupport) {
    //   const callback = records => {
    //     if (this.currentMenu.length) {
    //       this.$parent.isExpand = !(records[0].oldValue.indexOf('is-visible') > -1);
    //     }
    //   };

    //   let mo = new MutationObserver(callback);
    //   let element = this.$el.querySelector('.mdl-menu__container');
    //   let options = {
    //     attributes: true,
    //     attributeOldValue: true,
    //     attributeFilter: ['class']
    //   };

    //   mo.observe(element, options);
    // }
  }
};
</script>
