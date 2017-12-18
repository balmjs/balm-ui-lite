```html
<ui-checkbox v-for="(item, index) in ['1', '2', '3']"
  :key="index"
  :value="item"
  :model="options"
  @change="balmUI.onChange('options', $event)">Option '{{ item }}'</ui-checkbox>

<ui-button @click="balmUI.onChange('options', ['1', '2'])">choose '1','2'</ui-button>
<ui-button @click="balmUI.onChange('options', ['1', '3'])">choose '1','3'</ui-button>
<ui-button @click="balmUI.onChange('options', ['2', '3'])">choose '2','3'</ui-button>
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
