```html
<!-- Contact Chip -->
<ui-chip contact>
  <ui-chip-contact :class="['mdl-color--teal', 'mdl-color-text--white']">A</ui-chip-contact>
  <ui-chip-text>Contact Chip</ui-chip-text>
</ui-chip>
```

```html
<!-- Deletable Contact Chip -->
<ui-chip v-if="show" contact action>
  <ui-chip-contact>
    <img :src="avatar" alt="">
  </ui-chip-contact>
  <ui-chip-text>Deletable Contact Chip</ui-chip-text>
  <ui-chip-action @click="balmUI.onHide('show')">
    <i class="fa fa-close"></i>
  </ui-chip-action>
</ui-chip>
```
