## Advanced

### Use individual components (mobile dev recommended)

__`/path/to/config/balmrc.js`__

```js
  ...
  scripts: {
    ...
    alias: {
      'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js',
      'balm-ui-components': 'balm-ui-lite/src/scripts/components',
      'balm-ui-layout': 'balm-ui-lite/src/scripts/layout',
      'balm-ui-form': 'balm-ui-lite/src/scripts/form',
      'balm-ui-dialog': 'balm-ui-lite/src/scripts/components/dialog',
      'balm-ui-plugins': 'balm-ui-lite/src/scripts/plugins'
      ...
    },
    include: [path.resolve('./node_modules/balm-ui-lite/src')]
  },
  ...
```

__`/path/to/app/scripts/entry-mobile.js`__

```js
import Vue from 'vue';
import UiButton from 'balm-ui-components/button';
import UiIcon from 'balm-ui-components/icon';
import UiLayout from 'balm-ui-layout/layout';
import UiLayoutHeader from 'balm-ui-layout/layout-header';
import UiLayoutHeaderRow from 'balm-ui-layout/layout-header-row';
import UiLayoutContent from 'balm-ui-layout/layout-content';
import UiTextfield from 'balm-ui-form/textfield';
import event from 'balm-ui-plugins/event';
import toast from 'balm-ui-plugins/toast';
...

Vue.use({
  install(vue) {
    vue.component(UiButton.name, UiButton);
    vue.component(UiIcon.name, UiIcon);
    vue.component(UiLayout.name, UiLayout);
    vue.component(UiLayoutHeader.name, UiLayoutHeader);
    vue.component(UiLayoutHeaderRow.name, UiLayoutHeaderRow);
    vue.component(UiLayoutContent.name, UiLayoutContent);
    vue.component(UiTextfield.name, UiTextfield);
  }
});
Vue.use(event);
Vue.use(toast);

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
