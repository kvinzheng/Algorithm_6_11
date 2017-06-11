function toJadenCase(x) {
  let array = x;
  return array.split(' ').map(ele => ele[0].toUpperCase() + ele.substring(1, ele.length)).join(' ');
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
