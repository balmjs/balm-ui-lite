```html
<!-- Simple Textfield -->
<ui-textfield id="sample1_1"
  label="Text..."
  :model="text1_1"
  @input="balmUI.onChange('text1_1', $event)"></ui-textfield>

<!-- Numeric Textfield -->
<ui-textfield id="sample1_2"
  label="Number..."
  pattern="-?[0-9]*(\.[0-9]+)?"
  error="Input is not a number!"
  :model="text1_2"
  @input="balmUI.onChange('text1_2', $event)"></ui-textfield>
```

```js
export default {
  data() {
    return {
      text1_1: '',
      text1_2: ''
    };
  }
};
```
