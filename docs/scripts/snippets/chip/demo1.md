```html
<!-- Basic Chip -->
<ui-chip>
  <ui-chip-text>Basic Chip</ui-chip-text>
</ui-chip>

<!-- Deletable Chip -->
<ui-chip v-if="show" action>
  <ui-chip-text>Deletable Chip</ui-chip-text>
  <ui-chip-action @click="balmUI.onHide('show')"></ui-chip-action>
</ui-chip>
```

```js
export default {
  data() {
    return {
      show: true
    };
  }
};
```
