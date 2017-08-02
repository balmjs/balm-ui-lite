```html
<ui-button id="demo-menu-lower-right" icon="settings"></ui-button>
<ui-menu btnId="demo-menu-lower-right" :menu="data" @selected="onMenu">
  <ui-menuitem v-for="(item, index) in data" :key="index" :item="item">
    <a :href="item.url">{{ item.label }}</a>
  </ui-menuitem>
</ui-menu>
```

```js
export default {
  data() {
    return {
      menu: [{
        url:'/a',
        name: 'Item A'
      }, {
        url:'/b',
        name: 'Item B',
        disabled: true
      }, {
        url:'/c',
        name: 'Item C'
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
