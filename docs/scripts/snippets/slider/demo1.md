```html
<ui-slider min="0" max="100" :model="slider" @change="balmUI.onChange('slider', $event)"></ui-slider>
```

```js
export default {
  data() {
    return {
      slider: 25
    };
  }
};
```
