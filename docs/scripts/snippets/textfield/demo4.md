```html
<ui-textfield id="sample4"
  expandable
  label="Expandable Input"
  :model="text4"
  @input="balmUI.onChange('text4', $event)"></ui-textfield>
```

```js
export default {
  data() {
    return {
      text4: ''
    };
  }
};
```
