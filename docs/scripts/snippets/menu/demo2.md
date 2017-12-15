```html
<ui-button id="demo-menu-2" icon="settings"></ui-button>

<ui-menu dropdownId="demo-menu-2">
  <ui-menuitem v-for="(item, index) in data" :key="index"
    :disabled="item.disabled"
    :divider="item.divider"
    @click="onMenu(item)">
    <span v-if="item.disabled">{{ item.label }}</span>
    <a v-else :href="item.url">{{ item.label }}</a>
  </ui-menuitem>
</ui-menu>
```

```js
export default {
  data() {
    return {
      data: [{
        label: 'Some Action',
        url: '#1'
      }, {
        label: 'Another Action',
        divider: true,
        url: '#2'
      }, {
        label: 'Disabled Action',
        disabled: true,
        url: '#3'
      }, {
        label: 'Yet Another Action',
        url: '#4'
      }]
    };
  },
  methods: {
    onMenu(obj) {
      console.log(obj);
    }
  }
};
```
