function sortTwisted37(array) {
  var arr = helper(array.map(String));
  arr = arr.sort(function(a, b){return a - b;});
  return helper(arr).map(Number);
}

function helper(array){
  for (var i = 0; i < array.length; i++){
    var num = array[i];
    if (num.includes('3') || num.includes('7')){
      let temp = num.split('');
      for (var j = 0; j < temp.length; j++){
        if (temp[j] === '3'){
          temp[j] = '7';
        } else if (temp[j] === '7'){
          temp[j] = '3';
        }
      }
      array[i] = temp.join('');
    }
  }
  return array;
}
console.log(sortTwisted37([-17, -8, 9, 15, 15, 21, 74, 68]));
