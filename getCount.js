function getCount(string) {
  let count = { vowels:0,consonants:0 };
  if(typeof string !== 'string') { return count; }
  let filteredWord = string.replace(/[^a-zA-Z0-9]/g,'').split('').map( ele => ele.toLowerCase());
  let vowelsArr = 'aeiou'.split('');
  for(var i = 0 ; i < filteredWord.length; i++) {
    var current = filteredWord[i];
    if(vowelsArr.indexOf(current) >= 0) {
      count['vowels'] += 1;
    }
  }
  count['consonants'] = filteredWord.length - count['vowels'];
  return count;
};

module.exports = getCount;
