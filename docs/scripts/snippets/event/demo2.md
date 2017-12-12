```html
<ui-textfield :model="formData.name" @change="balmUI.onChange('formData.name', $event.target.value.trim())"></ui-textfield>
<br>
你的输入：{{formData.name}}
```

```js
export default {
  data () {
    return {
      formData: {
        name: ''
      }
    }
  }
}
```
