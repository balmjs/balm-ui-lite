<template>
  <div :class="className">
    <slot :className="titleClassName"></slot>
  </div>
</template>

<script>
const CLASSNAME_TITLE = 'mdl-card__title-text';
const CLASSNAME_SUBTITLE = 'mdl-card__subtitle-text';

export default {
  name: 'ui-card-title',
  props: {
    expand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      titleClassName: {
        title: CLASSNAME_TITLE,
        subtitle: CLASSNAME_SUBTITLE
      }
    };
  },
  computed: {
    className() {
      return {
        'mdl-card__title': true,
        'mdl-card--expand': this.expand
      };
    }
  }
};
</script>
