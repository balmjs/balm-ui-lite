```html
<ui-icon-toggle value="a" :model="icons" @change="onIconsChange">
  A
</ui-icon-toggle>
<ui-icon-toggle value="b" :model="icons" @change="onIconsChange">
  B
</ui-icon-toggle>
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
