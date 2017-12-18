```html
<ui-slider min="0" max="100" :model="value" @change="balmUI.onChange('value', $event)"></ui-slider>
```

```js
export default {
  data() {
    return {
      value: 25
    };
  }
};
```
