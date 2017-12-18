```html
<ui-switch
  :model="open"
  @change="balmUI.onChange('open', $event)">{{ open ? 'On' : 'Off' }}</ui-switch>
```

```js
export default {
  data() {
    return {
      open: true
    };
  }
};
```
