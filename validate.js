function validate(string){
  let stack = [];
  for(let i = 0; i < string.length; i++){
    let current = string[i];
    if(current === '(' || current === '{' || current === '['){
      stack.push(current);
    } else {

      let last = stack.pop();
      if( (current === ')' && last === '(' ) || (current === ']' && last === '[') || (current === '}' && last ==='{') ){
        continue;
      } else {
        return false;
      }
    }

  }
  if(stack.length === 0 ){
    return true;
  } else {
    return false;
  }
}

console.log(validate('{[]()}'));
