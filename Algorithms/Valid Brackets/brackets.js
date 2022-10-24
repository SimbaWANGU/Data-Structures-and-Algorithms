function StringChallenge(str){
  let stack = []
  let i = 0
  for(i; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i])
    } else if (stack[stack.length - 1] === '(' && str[i] === ')'){
      stack.pop(stack[stack.length - 1])
    } else if (stack[stack.length - 1] === '[' && str[i] === ']'){
      stack.pop(stack[stack.length - 1])
    } else if (stack[stack.length - 1] === '{' && str[i] === '}'){
      stack.pop(stack[stack.length - 1])
    }

  }
  if (stack.length === 0) {
    return 'valid'
  }
  return 'invalid'
}

console.log(StringChallenge(['(', '{', '[', ']', '}', ')'])) //=> valid
console.log(StringChallenge(['(', '{', '[', ']', ')'])) //=> invalid
console.log(StringChallenge(['(', '[', '{', ']', '}', ')']))