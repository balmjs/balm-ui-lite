```html
<ui-textfield 
  :model="formData.name" 
  @change="onChange($event)" 
  placeholder="请输入"></ui-textfield>
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
  },
  methods: {
    onChange (event) {
      this.formData.name = event.target.value.trim();
    }
  }
}
```
