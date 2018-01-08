import * as methods from '../../helpers/is';

const {
  getType,
  isArray,
  isboolean,
  isFunction,
  isNumber,
  isNull,
  isObject,
  isString,
  isSymbol,
  isUndefined
} = methods;

const values = {
  'array': [],
  'boolean': false,
  'function': function () {},
  'number': 0,
  'null': null,
  'object': {},
  'string': '',
  'symbol': Symbol(),
  'undefined': undefined
};


Object.keys(methods).forEach((name)=>{
  if(name !== 'getType') {
    let method = methods[name];
    let valueKey = name.replace('is', '').toLowerCase();
    let val = values[valueKey];
    describe(`helpers is methods: [${name}]`, () => {
      it('should returns true', () => {
        expect(method(val)).to.equal(true);
      });
    });
  } else {
    describe('helpers is methods: [getType(any)]', () => {
      it('should returns a string indicating the type of the unevaluated operand', () => {
        Object.keys(values).forEach((name)=>{
          let val = values[name];
          expect(getType(val)).to.equal(name);
        });
      });
    });
  }
});




