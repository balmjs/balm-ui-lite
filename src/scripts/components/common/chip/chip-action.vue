<template>
  <a class="mdl-chip__action">
    <slot>
      <i class="material-icons">cancel</i>
    </slot>
  </a>
</template>

<script>
export default {
  name: 'ui-chip-action'
};
</script>
