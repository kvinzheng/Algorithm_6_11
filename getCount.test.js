let expect = require('chai').expect;
let getCount = require('./getCount.js');

describe('it count how many vowels and consonant', () => {
  it('Happy test', () => {
    expect(getCount('Here is some text')).to.deep.equal({vowels:6,consonants:8});
    expect(getCount('To be a Codewarrior or not to be')).to.deep.equal({vowels:12,consonants:13});
    expect((getCount('To Kata or not to Kata'))).to.deep.equal({vowels:8,consonants:9});
  })

  it('Bad test', () => {
    expect(getCount('TEst')).to.deep.equal({vowels:1,consonants:3});
    expect(getCount('HEre Is sOme text')).to.deep.equal({vowels:6,consonants:8});
    expect(getCount(['To Kata or not to Kata'])).to.deep.equal({vowels:0,consonants:0});
    expect(getCount(undefined)).to.deep.equal({vowels:0,consonants:0});
  })
});
