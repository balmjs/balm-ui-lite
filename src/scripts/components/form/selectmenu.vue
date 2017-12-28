<template>
  <div class="mdl-select">
    <div class="mdl-select__surface" :id="`dropdown-${name}`">
      <div class="mdl-select__selected-text">
        {{ currentOption[optionValue] }}
      </div>
      <div class="mdl-select__bottom-line"></div>
    </div>
    <ui-menu ref="dropdown"
      class="mdl-select__menu"
      noRipple
      :dropdownId="`dropdown-${name}`">
      <ui-menuitem v-for="(option, index) in currentOptions"
        :key="index"
        :disabled="option.disabled"
        :class="{'active': option[optionKey] === currentOption[optionKey]}"
        @click="handleChange(option)">
        {{ option[optionValue] }}
      </ui-menuitem>
    </ui-menu>
  </div>
</template>

<script>
import selectMixin from '../../mixins/select';
import UiMenu from '../menu/menu';
import UiMenuitem from '../menu/menuitem';

const EVENT_CHANGE = 'change'; // return option[optionKey]
const EVENT_SELECTED = 'selected'; // return option

const generateRandomAlphaNum = len => {
  let rdmString = '';
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len);
};

export default {
  name: 'ui-selectmenu',
  components: {
    UiMenu,
    UiMenuitem
  },
  mixins: [selectMixin],
  props: {
    // ui attributes
    name: {
      type: String,
      default: function() {
        return generateRandomAlphaNum(8);
      }
    }
  },
  data() {
    return {
      currentOption: {}
    };
  },
  watch: {
    options(val) {
      this.init(val);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    handleChange(option) {
      this.currentOption = option;

      this.$emit(EVENT_CHANGE, option[this.optionKey]); // value: number|string
      this.$emit(EVENT_SELECTED, Object.assign({}, option)); // result: any

      this.$refs.dropdown.$el.MaterialMenu.hide(); // NOTE: fix some bug!?
    },
    init(_options = this.currentOptions) {
      let options = [];

      // Set default value
      if (this.defaultValue) {
        let defaultOption = {};
        defaultOption[this.optionKey] = this.defaultKey;
        defaultOption[this.optionValue] = this.defaultValue;
        options.push(defaultOption);
      }

      options = options.concat(_options);

      // Set current option
      for (let i = 0, len = options.length; i < len; i++) {
        let option = options[i];
        if (option[this.optionKey] == this.currentValue) {
          this.currentOption = option;
          break;
        }
      }

      this.currentOptions = options;
    }
  }
};
</script>
