function longestPalindrome(s) {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let current = s.substring(i, j + 1);
      console.log('curent===', current);
      if (current.split('').reverse().join('') === current) {
        maxLength = Math.max(maxLength, current.length);
      }
    }
  }

  return maxLength;
}
console.log(longestPalindrome("aab" ));
