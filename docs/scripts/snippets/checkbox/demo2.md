```html
<ui-checkbox value="1" :model="options" @change="onChange">Option '1'</ui-checkbox>
<ui-checkbox value="2" :model="options" @change="onChange">Option '2'</ui-checkbox>
<ui-checkbox value="3" :model="options" @change="onChange">Option '3'</ui-checkbox>
```

```js
export default {
  data() {
    return {
      options: []
    };
  },
  methods: {
    onChange(val) {
      this.options = val;
    }
  }
};
```