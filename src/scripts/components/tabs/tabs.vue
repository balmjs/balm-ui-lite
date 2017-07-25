<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
const CLASSNAME_TAB = 'mdl-tabs__tab';
const CLASSNAME_PANEL = 'mdl-tabs__panel';
const CLASSNAME_ACTIVE = 'is-active';

export default {
  name: 'ui-tabs',
  props: {
    // state
    active: {
      type: Number,
      default: 0
    },
    // ui attributes
    fixedTabs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabs: [],
      panels: []
    };
  },
  computed: {
    className() {
      return {
        'mdl-tabs': true,
        'is-upgraded': true, // manual for MaterialTabs
        'mdl-tabs--fixed-tabs': this.fixedTabs
      };
    }
  },
  methods: {
    activeItem(currentIndex, items = []) {
      items.length && items.forEach((item, index) => {
        if (index === +currentIndex && !item.classList.contains(CLASSNAME_ACTIVE)) {
          item.classList.add(CLASSNAME_ACTIVE);
        } else {
          item.classList.remove(CLASSNAME_ACTIVE);
        }
      });
    },
    activeTab(currentIndex = this.active) {
      this.activeItem(currentIndex, this.tabs);
      this.activeItem(currentIndex, this.panels);
    }
  },
  watch: {
    active(val) {
      this.activeTab(val);
    }
  },
  mounted() {
    this.tabs = this.$el.querySelectorAll(`.${CLASSNAME_TAB}`);
    this.panels = this.$el.querySelectorAll(`.${CLASSNAME_PANEL}`);
    this.activeTab();
  }
};
</script>
