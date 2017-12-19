```html
<ui-textfield id="sample5_1"
  plus
  label="Plus Text..."
  :model="text5_1"
  @input="balmUI.onChange('text5_1', $event)">
  <template slot="plus">
    <a href="javascript:void(0)">Link</a>
  </template>
</ui-textfield>

<ui-textfield id="sample5_2"
  plus
  label="Plus Text..."
  :model="text5_2"
  @input="balmUI.onChange('text5_2', $event)">
  <template slot="plus">
    <ui-button link @click="$alert('Do something')">Button</ui-button>
  </template>
</ui-textfield>
```
