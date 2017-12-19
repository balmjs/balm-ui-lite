```html
<ui-textfield id="sample3"
  type="textarea"
  label="Text lines..."
  :rows="3"
  :model="text3"
  @input="balmUI.onChange('text3', $event)"></ui-textfield>
```

```js
export default {
  data() {
    return {
      text3: ''
    };
  }
};
```
