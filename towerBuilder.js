function towerBuilder(nFloors) {
  var stack = [];
  var result = [];

  for (var i = 0; i < nFloors; i++) {
    var multiplier = i * 2;
    stack.push('*'.repeat(1 + multiplier));
  }

  var len = stack[stack.length-1].length;

  for (var i = 0; i < stack.length; i++) {
    var current = stack[i];
    while (current.length < len) {
      current = current.concat(' ');
      current = ' '.concat(current);
    }
    result.push(current);
  }

  return result;
}
function towerBuilder(nFloors) {
  var tower = [];
  for(var i = 0; i < nFloors; i++) {
    var temp = ' '.repeat(nFloors - i - 1).concat( '*'.repeat(2*i+1))
    .concat(' '.repeat(nFloors - i - 1));
    tower.push(temp);
  }
  return tower;
}


console.log(towerBuilder(3));
