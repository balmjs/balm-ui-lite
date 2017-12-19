```html
<ui-textfield id="sample2"
  labelFloating
  label="Text with floating label"
  :model="text2"
  @input="balmUI.onChange('text2', $event)"></ui-textfield>
```

```js
export default {
  data() {
    return {
      text2: ''
    };
  }
};
```
