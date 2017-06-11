function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = Math.floor(Math.random() * i) + 1;
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}
console.log(shuffle([1, 2, 3, 4]));
