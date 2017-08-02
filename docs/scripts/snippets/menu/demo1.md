```html
<ui-button id="demo-menu-lower-left" icon="more_vert"></ui-button>
<ui-menu btnId="demo-menu-lower-left" :menu="data" @selected="onMenu"></ui-menu>
```

```js
export default {
  data() {
    return {
      data: [{
        url:'/a',
        label: 'Item A'
      }, {
        url:'/b',
        label: 'Item B',
        disabled: true
      }, {
        url:'/c',
        label: 'Item C'
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
