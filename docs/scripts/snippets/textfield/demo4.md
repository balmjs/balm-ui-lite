```html
<ui-textfield id="sample4"
  expandable
  placeholder="Expandable Input"
  :model="text4"
  @input="balmUI.onChange('text4', $event)">
  <!-- <template slot="icon">
    <ui-icon>mood</ui-icon>
  </template> -->
</ui-textfield>
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
