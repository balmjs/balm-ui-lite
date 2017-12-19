import getType from './typeof';

const jsonEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b); // The ORDER of the properties IS IMPORTANT

const isEmpty = _var => {
  let type = getType(_var);
  let conditions = {
    string () {
      return _var === '' || _var === '0';
    },
    object () {
      return Object.keys(_var).length === 0;
    },
    array () {
      return _var.length === 0;
    },
    boolean () {
      return !_var;
    },
    undefined () {
      return true;
    },
    number () {
      return _var === 0;
    },
    null () {
      return true;
    }
  };

  return conditions[type] ? conditions[type]() : false;
};

export {
  jsonEqual,
  isEmpty
};
