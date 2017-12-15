```html
<p>
  <ui-textfield 
  :model="formData.name" 
  placeholder="输入名字" 
  @input="balmUI.onChange('formData.name', $event)"></ui-textfield>
</p>
<p>
  <ui-textfield 
  :model="formData.number"  
  placeholder="输入工号" 
  @input="balmUI.onChange('formData.number', $event)"></ui-textfield>
</p>
<p>
  <ui-button raised colored @click="validate">验证</ui-button>
</p>
<p>
  验证结果：{{ allValid ? '通过': '不通过' }}
  <template v-if="!allValid">
    <br>
    原因：<span v-for="message in messages">{{ message }}；</span>
  </template>
</p>
```

```js
export default {
  validations: {
    name: {
      label: '用户名',
      validator: 'required'
    },
    number: {
      label: '工号',
      validator: 'required, number, customRule',
      number: {
        validate (value) {
          return /^\d+$/g.test(value);
        },
        message: '%s必须是数字'
      },
      customRule: {
        validate (value) {
          return value.length > 5;
        },
        message: '%s不能少于6位'
      }
    },
  },
  data () {
    return {
      formData: {
        name: '',
        number: '',
      },
      messages: [],
      allValid: false,
    };
  },
  methods: {
    validate () {
      let res = this.$validate(this.formData);
      let {isValid, messages} = res;
      this.allValid = isValid;
      this.messages = messages;
    }
  }
}
```
