```html
<!-- Simple Textfield -->
<ui-textfield id="sample1_1"
  label="Text..."
  v-model="text1_1"></ui-textfield>

<!-- Numeric Textfield -->
<ui-textfield id="sample1_2"
  label="Number..."
  pattern="-?[0-9]*(\.[0-9]+)?"
  error="Input is not a number!"
  v-model="text1_2"></ui-textfield>
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
