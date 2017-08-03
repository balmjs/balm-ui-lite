import { isString, isArray } from '../helpers';

export default {
  required: {
    validate(value) {
      let result = false;
      if (isString(value)) {
        result = value.trim() !== '';
      } else if (isArray(value)) {
        return value.length;
      } else {
        result = value;
      }
      return result;
    },
    message: '%s不能为空'
  },
  mobile: {
    validate(value) {
      return /^1[34578]\d{9}$/.test(value);
    },
    message: '无效的手机号'
  },
  email: {
    validate(value) {
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
    },
    message: '无效的邮箱'
  },
  idNumberRule: {
    validate: function(value) {
      return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(value);
    },
    message: '身份证格式有误'
  }
};
