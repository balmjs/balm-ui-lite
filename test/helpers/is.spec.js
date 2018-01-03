import { getType } from '../../helpers/is';

describe('getType(any)', () => {
  it('should returns a string indicating the type of the unevaluated operand', () => {
    expect(getType([])).to.equal('array');
    expect(getType({})).to.equal('object');
  })
});
