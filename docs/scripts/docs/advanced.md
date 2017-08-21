## Advanced

### Use individual components (mobile dev recommended)

__`/path/to/config/balmrc.js`__

```js
  ...
  scripts: {
    ...
    alias: {
      'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js',
      'balm-ui': 'balm-ui-lite/src/components',
      ...
    }
  },
  ...
```

__`/path/to/app/scripts/views/home.vue`__

```html
<template>
  <div>
    <ui-button>Button</ui-button>
  </div>
</template>
```

```js
<script>
import UiButton from 'balm-ui/common/button';

export default {
  components: {
    UiButton
  }
};
</script>
```

### Auto copy assets

__`/path/to/gulpfile.js`__

```js
...

balm.go(function(mix) {
  if (balm.config.production) {
    ...
  } else {
    mix.copy('./node_modules/balm-ui-lite/src/images/*', './app/images');
    mix.copy('./node_modules/balm-ui-lite/src/fonts/*', './app/fonts');
  }
});
```
