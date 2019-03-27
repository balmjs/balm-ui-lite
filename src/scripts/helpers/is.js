import getType from './typeof';

// Boolean, null, undefined, Number, String, and Symbol

const isBoolean = bool => getType(bool) === 'boolean';

const isNull = _var => getType(_var) === 'null';

const isUndefined = _var => getType(_var) === 'undefined';

const isNumber = num => num === +num;

const isString = str => getType(str) === 'string';

const isSymbol = sym => getType(sym) === 'symbol';

// Object

const isObject = obj => getType(obj) === 'object';

const isArray = obj => Array.isArray(obj);

const isFunction = fn => {
  let type = getType(fn);
  return type === 'function' || type === 'generatorfunction';
};

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
  isFunction
};
