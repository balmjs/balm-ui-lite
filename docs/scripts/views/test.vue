<template>
  <div class="page--test">
    <fieldset class="form-test">
      <legend>Form test</legend>
      <div class="form-item">
        <ui-textfield
          label="Input..."
          :model="formData.name"
          @input="onChange('formData.name', $event)"></ui-textfield>
      </div>
      <div class="form-action">
        <ui-button @click.native="submit">Submit</ui-button>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mixins } from '../../../src/scripts/index'; // 'balm-ui-lite'
import formValidatorRules from '../mixins/form-validator-rules';

export default {
  mixins: [mixins.formValidator],
  validationRules: formValidatorRules,
  validation: {
    name: {
      label: 'Username',
      validator: 'required,customRule1',
      customRule1: {
        validate(value, formData) {
          console.log(formData);
          return value.length > 6;
        },
        message: 'min length < 6'
      }
    }
  },
  data() {
    return {
      formData: {
        name: ''
      }
    };
  },
  methods: {
    submit() {
      let formData = Object.assign({}, this.formData);
      let result = this.validate(formData);
      console.log(formData, result);
    }
  }
};
</script>
