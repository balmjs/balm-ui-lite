<template>
  <a class="mdl-layout__tab"
     href="javascript:void(0);"
     @click.prevent="$parent.handleChange($vnode.key)">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'ui-layout-tab'
};
</script>
