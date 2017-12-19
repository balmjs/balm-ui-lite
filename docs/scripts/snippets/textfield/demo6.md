```html
<p class="form-item">
  <label>Label Text:</label>
  <ui-textfield
    placeholder="Placeholder..."
    :model="text6"
    @input="balmUI.onChange('text6', $event)"></ui-textfield>
</p>
```

```js
export default {
  data() {
    return {
      text6: ''
    };
  }
};
```
