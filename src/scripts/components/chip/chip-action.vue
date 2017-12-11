<template>
  <a href="javascript:void(0);"
     class="mdl-chip__action"
     @click="handleClick">
    <slot>
      <i class="material-icons">cancel</i>
    </slot>
  </a>
</template>

<script>
const EVENT_CLICK = 'click';

export default {
  name: 'ui-chip-action',
  methods: {
    handleClick(event) {
      this.$emit(EVENT_CLICK, event);
    }
  }
};
</script>
