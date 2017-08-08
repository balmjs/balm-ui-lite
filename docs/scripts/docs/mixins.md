## Mixins

- formValidator

---

__For 🌰__

```js
import { mixins } from 'balm-ui-lite';
import formValidatorRules from '/path/to/mixins/form-validator-rules';

export default {
  mixins: [mixins.formValidator],
  validationRules: formValidatorRules,
  validation: {
    username: {
      label: 'Username',
      validator: 'required'
    },
    password: {
      label: 'Password',
      validator: 'required, passwordRule',
      // custom rule
      passwordRule: {
        validate(value) {
          return value.length >= 6;
        },
        message: '%s length must be greater than 6 chars'
      }
    }
  },
  data() {
    return {
      formData: {
        username: '',
        password: '',
        ...
      }
    };
  },
  methods: {
    submit() {
      let result = this.validate(this.formData);
      if (result.isValid) {
        // valid
      } else {
        // invalid
      }
    }
  },
  ...
};
```

```js
// form-validator-rules.js
import { helpers } from 'balm-ui-lite';

export default {
  required: {
    validate(value) {
      let result = false;
      if (helpers.isString(value)) {
        result = value.trim() !== '';
      } else if (helpers.isArray(value)) {
        return value.length;
      } else {
        result = value;
      }
      return result;
    },
    message: '%s is required'
  },
  ...
};
```
