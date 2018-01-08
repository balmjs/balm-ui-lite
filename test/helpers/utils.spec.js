import {jsonEqual, isEmpty} from '../../helpers/utils';

describe('helpers util methods: [jsonEqual]', () => {

  it('[] should equal []', () => {
    expect(jsonEqual([], [])).to.equal(true);
  });

  it('{} should equal {}', () => {
    expect(jsonEqual([], [])).to.equal(true);
  });

});

describe('helpers util methods:[isEmpty]', () => {

  it(`[String]: '' or '0' should return true`, () => {
    expect(isEmpty('')).to.equal(true);
    expect(isEmpty('0')).to.equal(true);
  });

  it(`[Number]: 0 or NaN should return true`, () => {
    expect(isEmpty(0)).to.equal(true);
    expect(isEmpty(NaN)).to.equal(true);
  });

  it(`[Array]: [] should return true`, () => {
    expect(isEmpty([])).to.equal(true);
  });

  it(`[Object]: {} should return true`, () => {
    expect(isEmpty({})).to.equal(true);
  });

  it(`[Boolean]: false should return true`, () => {
    expect(isEmpty(false)).to.equal(true);
  });

  it(`[Null]: null should return true`, () => {
    expect(isEmpty(null)).to.equal(true);
  });

  it(`[undefined]: undefined should return true`, () => {
    expect(isEmpty(undefined)).to.equal(true);
  });

});
