function isArray(array1, array2) {
  let result = [];
  for(let i = 0; i < array1.length; i++) {
    let current = array1[i];
    for(let j = 0; j < array2.length; j++) {
      if(array2[j].includes(current)){
        result.push(current);
      }
    }
  }

  let set = new Set(result);
  let uniqueArray = Array.from(set).sort( (a,b) => a - b);
  return uniqueArray;
}
let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
isArray(a1, a2)
