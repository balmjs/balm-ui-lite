```html
<ui-icon-toggle value="b" icon="format_bold" :model="icons" @change="balmUI.onChange('icons', $event)"></ui-icon-toggle>
<ui-icon-toggle value="i" icon="format_italic" :model="icons" @change="balmUI.onChange('icons', $event)"></ui-icon-toggle>
```

```js
export default {
  data() {
    return {
      icons: []
    };
  }
};
```
