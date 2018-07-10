```html
<ui-textfield id="sample3"
  type="textarea"
  label="Text lines..."
  :rows="3"
  v-model="text3"></ui-textfield>
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
