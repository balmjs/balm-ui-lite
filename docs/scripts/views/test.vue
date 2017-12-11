<template>
  <div class="page--test">
    <fieldset class="form-test">
      <legend>Form test</legend>
      <div class="form-item">
        <ui-textfield
          label="Input..."
          :model="formData.name"
          @input="balmUI.onChange('formData.name', $event)"></ui-textfield>
      </div>
      <div class="form-action">
        <ui-button @click="submit">Submit</ui-button>
      </div>
    </fieldset>
  </div>
</template>

<script>

export default {
  /*mixins: [mixins.formValidator],
  validationRules: formValidatorRules,*/
  validation: {
    name: {
      label: 'Username',
      validator: 'required,customRule1,customRule2,customRule3',
      customRule1: {
        validate(value) {
          return value.length > 6;
        },
        message: 'min length < 6'
      },
      customRule2: {
      	validate (value) {
      		return /^\d+$/g.test(value);
        },
        message(){
      		return this.msg;
        }
      }
    }
  },
  data() {
    return {
      formData: {
        name: ''
      },
      msg: 'must be numbers'
    };
  },
  methods: {
    submit() {
      let formData = Object.assign({}, this.formData);
      let result = this.$validate(formData);
      console.log(formData, result);
    }
  }
};
</script>
