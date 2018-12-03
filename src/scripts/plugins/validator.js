import autoInstall from '../config/auto-install';
import getType from '../helpers/typeof';

const defaultRules = {
  required: {
    validate(value) {
      return value && value.length > 0;
    },
    message: '%s is required'
  }
};

// Define constants
const FIELD_LABEL = 'label';
const FIELD_VALIDATOR = 'validator';
const LABEL_PLACEHOLDER = '%s';

const BalmUI_ValidatorPlugin = {
  install(Vue, customRules = {}) {
    let globalValidationRules = Object.assign({}, defaultRules, customRules);

    const $validate = function(formData = {}, customFieldset = []) {
      let result = {
        isValid: true, // 是否验证通过
        valid: [], // 有效字段
        invalid: [], // 无效字段
        messages: [], // 所有无效字段的提示语
        message: '', // 第一个无效字段的提示语
        errorMsg: {}
      };

      // 获取待验证字段
      let validations = this.$options.validations || {};
      let validationFields = Object.keys(validations);

      if (customFieldset.length) {
        validationFields = validationFields.filter(
          field => customFieldset.indexOf(field) > -1
        );
      }

      for (
        let i = 0, fieldCount = validationFields.length;
        i < fieldCount;
        i++
      ) {
        let fieldName = validationFields[i]; // 字段名
        let fieldOption = validations[fieldName]; // 对应验证配置
        let fieldLabel = fieldOption[FIELD_LABEL] || ''; // 字段别名
        let fieldRules = fieldOption[FIELD_VALIDATOR].split(',').map(
          validator => validator.trim()
        ); // 当前字段需要的所有验证方法
        let isAllValidOfField = true; // 当前字段通过全部验证规则

        for (let j = 0, rulesCount = fieldRules.length; j < rulesCount; j++) {
          let ruleName = fieldRules[j];
          let localValidationRule = fieldOption[ruleName];
          let rule = localValidationRule || globalValidationRules[ruleName]; // 当前验证方法

          if (rule && getType(rule.validate) === 'function') {
            let fieldValue = formData[fieldName];
            let fieldArgs = [fieldValue, formData];
            if (!rule.validate.apply(this, fieldArgs)) {
              isAllValidOfField = false;
              let message = '';

              switch (getType(rule.message)) {
                case 'string':
                  message = rule.message.replace(LABEL_PLACEHOLDER, fieldLabel);
                  break;
                case 'function':
                  message = rule.message.apply(this, fieldArgs);
                  break;
                default:
                  console.warn(
                    `'[${fieldName}.message]' must be a string or function.`
                  );
                  break;
              }

              if (message) {
                result.messages.push(message);
              }
              break;
            }
          } else {
            console.warn(
              `The field [${fieldName}] is missing a validation rule: '${ruleName}'.`
            );
          }
        }

        if (isAllValidOfField) {
          result.valid.push(fieldName);
        } else {
          result.invalid.push(fieldName);
        }
      }

      if (result.messages.length) {
        result.isValid = false;
        result.message = result.messages[0];

        result.invalid.forEach((field, index) => {
          result.errorMsg[field] = result.messages[index];
        });
      }

      result.valid.forEach(field => {
        result.errorMsg[field] = '';
      });

      return result;
    };

    Vue.prototype.$validate = $validate;
  }
};

autoInstall(BalmUI_ValidatorPlugin);

export default BalmUI_ValidatorPlugin;
