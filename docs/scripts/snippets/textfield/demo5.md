```html
<ui-textfield id="sample5_1"
  plus
  label="Plus Text..."
  v-model="text5_1">
  <template slot="plus">
    <a href="javascript:void(0)">Link</a>
  </template>
</ui-textfield>

<ui-textfield id="sample5_2"
  plus
  label="Plus Text..."
  v-model="text5_2">
  <template slot="plus">
    <ui-button link @click="$alert('Do something')">Button</ui-button>
  </template>
</ui-textfield>
```
