// BalmUI helpers
import getType from './typeof';
import detectIE from './detect-ie';

// Boolean, null, undefined, Number, String, and Symbol

const isBoolean = bool => getType(bool) === 'boolean';

const isNull = _var => getType(_var) === 'null';

const isUndefined = _var => getType(_var) === 'undefined';

const isNumber = num => getType(num) === 'number';

const isString = str => getType(str) === 'string';

const isSymbol = sym => getType(sym) === 'symbol';

// Object

const isObject = obj => getType(obj) === 'object';

const isArray = arr => getType(arr) === 'array';

const isFunction = arr => getType(arr) === 'function';

// Utils

const jsonEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b); // The ORDER of the properties IS IMPORTANT

export {
  getType,
  isBoolean,
  isNull,
  isUndefined,
  isNumber,
  isString,
  isSymbol,
  isObject,
  isArray,
  isFunction,
  detectIE,
  jsonEqual
};
