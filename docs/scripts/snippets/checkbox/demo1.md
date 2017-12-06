```html
<ui-checkbox :value="1" :model="options" @change="balmUI.onChange('options', $event)">Option 1</ui-checkbox>
<ui-checkbox :value="2" :model="options" @change="balmUI.onChange('options', $event)">Option 2</ui-checkbox>
<ui-checkbox :value="3" :model="options" @change="balmUI.onChange('options', $event)">Option 3</ui-checkbox>
```

```js
export default {
  data() {
    return {
      options: []
    };
  }
};
```
