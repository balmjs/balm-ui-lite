```html
<ui-button id="demo-menu-1" icon="more_vert"></ui-button>

<ui-menu dropdownId="demo-menu-1" :menu="data" @selected="onMenu"></ui-menu>
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
