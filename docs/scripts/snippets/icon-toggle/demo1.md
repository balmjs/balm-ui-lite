```html
<ui-icon-toggle value="b" icon="format_bold" :model="icons" @change="onChange"></ui-icon-toggle>
<ui-icon-toggle value="i" icon="format_italic" :model="icons" @change="onChange"></ui-icon-toggle>
```

```js
export default {
  data() {
    return {
      icons: []
    };
  },
  methods: {
    onChange(val) {
      this.icons = val;
    }
  }
};
```
