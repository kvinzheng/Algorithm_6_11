// function validate(string){
//   let stack = [];
//   for(let i = 0; i < string.length; i++){
//     let current = string[i];
//     if(current === '(' || current === '{' || current === '['){
//       stack.push(current);
//     } else {
//
//       let last = stack.pop();
//       if( (current === ')' && last === '(' ) || (current === ']' && last === '[') || (current === '}' && last ==='{') ){
//         continue;
//       } else {
//         return false;
//       }
//     }
//   }
//   if(stack.length === 0 ){
//     return true;
//   } else {
//     return false;
//   }
// }
function validate(string){
  let stack = [];
  let match = {
    '(' : ')',
    '[' : ']',
    '{' : '}',
  }

  for(let i = 0; i < string.length; i++){
    let current = string[i];
    if(current === '(' || current === '{' || current === '['){
      stack.push(current);
    } else {
      let last = stack.pop();
      if(current === match[last]){
        continue;
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(validate('{[]()}'));

module.exports = validate;
