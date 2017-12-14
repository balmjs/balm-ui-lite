<template>
  <div :class="className">
    <slot><!-- header & drawer & content --></slot>
  </div>
</template>

<script>
import mdlMixin from '../../mixins/mdl';
import '../../../material-design-lite/layout/layout';
import '../../../material-design-lite/ripple/ripple';

const CLASSNAME_TAB = 'mdl-layout__tab';
const CLASSNAME_PANEL = 'mdl-layout__tab-panel';
const CLASSNAME_ACTIVE = 'is-active';

export default {
  name: 'ui-layout',
  mixins: [mdlMixin],
  props: {
    // state
    active: {
      type: Number,
      default: -1
    },
    // ui attributes
    fixedDrawer: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    noDrawerButton: {
      type: Boolean,
      default: false
    },
    noDesktopDrawerButton: {
      type: Boolean,
      default: false
    },
    fixedTabs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabs: null,
      panels: null
    };
  },
  computed: {
    className() {
      return {
        'mdl-layout': true,
        'mdl-js-layout': true,
        'mdl-layout--fixed-drawer': this.fixedDrawer, // Makes the drawer always visible and open in larger screens
        'mdl-layout--fixed-header': this.fixedHeader, // Makes the header always visible, even in small screens
        'mdl-layout--no-drawer-button': this.noDrawerButton, // Does not display a drawer button
        'mdl-layout--no-desktop-drawer-button': this.noDesktopDrawerButton, // Does not display a drawer button in desktop mode
        'mdl-layout--fixed-tabs': this.fixedTabs // Uses fixed tabs instead of the default scrollable tabs
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
      if (this.tabs && this.panels) {
        this.activeTab(val);
      }
    }
  },
  mounted() {
    this.$mdl.upgradeElements(this.$el);

    if (this.active > -1) {
      this.tabs = this.$el.querySelectorAll(`.${CLASSNAME_TAB}`);
      this.panels = this.$el.querySelectorAll(`.${CLASSNAME_PANEL}`);
      this.activeTab();
    }
  }
};
</script>
