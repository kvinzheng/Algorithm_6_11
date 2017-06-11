function randomCase(x) {
  let arr = x.split('');
  let result = arr.map(ele => {
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      return ele.toUpperCase();
    } else if (random % 2 === 1) {
      return ele.toLowerCase();
    }
  });
  return result.join('');
}

console.log(randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit"));
