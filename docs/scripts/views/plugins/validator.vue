<template>
  <div class="page--validator">
    <div class="component-title">
      <h2>Validator</h2>
    </div>

    <h4 class="line">概述</h4>
    <p>这是一个简单的数据验证插件。</p>

    <h4 class="line">引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>
    <p>引入之后，Vue实例获得$validate方法。</p>

    <h4 class="line">使用</h4>
    <p>$validate方法有两个参数:</p>
    <ui-apidoc name="plugin-validator-arguments" :show-title="false"></ui-apidoc>
    <p>
      虽然$validate方法有第二个参数，但是我们强烈推荐将验证规则注入在Vue实例的validations属性上，可以大幅度减少方法的复杂度。
    </p>
    <p>通过在Vue实例上添加validations属性，使得待验证数据自动应用验证规则。validations每一项的键值对应待验证的字段，其中包含以下属性：</p>
    <ui-apidoc name="plugin-validator-validations" :show-title="false"></ui-apidoc>
    <div class="divider"></div>
    <p>
      除了应用预设规则之外，插件还支持临时插入自定义规则，看下面的例子：
    </p>
    <p>
      <ui-textfield :model="formData.name" placeholder="输入名字" @input="balmUI.onChange('formData.name', $event)"></ui-textfield>
    </p>
    <p>
      <ui-textfield :model="formData.number"  placeholder="输入工号" @input="balmUI.onChange('formData.number', $event)"></ui-textfield>
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
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>
    <p>
      以上为临时插入规则的方法。自定义规则中的message属性也可以是一个方法，它和validate方法的作用域均指向当前实例。
    </p>
  </div>
</template>
<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Validator'
  },
  validations: {
    name: {
      label: '用户名',
      validator: 'required'
    },
    number: {
      label: '工号',
      validator: 'required, number, customRule',
      number: {
        validate(value) {
          return /^\d+$/g.test(value);
        },
        message: '%s必须是数字'
      },
      customRule: {
        validate(value) {
          return value.length > 5;
        },
        message: '%s不能少于6位'
      }
    }
  },
  data() {
    return {
      formData: {
        name: '',
        number: ''
      },
      messages: [],
      allValid: false
    };
  },
  methods: {
    validate() {
      let res = this.$validate(this.formData);
      let { isValid, messages } = res;
      this.allValid = isValid;
      this.messages = messages;
    }
  },
  created() {
    this.showCode('validator', 1);
  }
};
</script>
<style scoped>
h2.line {
  border-bottom: 1px solid #ddd;
}

.divider {
  height: 0;
  width: 100%;
  margin-bottom: 4em;
}
</style>
