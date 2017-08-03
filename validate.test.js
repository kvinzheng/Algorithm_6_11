let expect = require('chai').expect;
let validate = require('./validate');

describe('#validate', () => {
  it('Returns true for correct nesting', () => {
    expect(validate('')).to.be.equal(true);
    expect(validate('{[]()}')).to.be.equal(true);
  });

  it('Returns false for incorrect nesting', () => {
    expect(validate('{[(])}')).to.be.equal(false);
    expect(validate('}')).to.be.equal(false);
    expect(validate('{[}')).to.be.equal(false);
  });
});
