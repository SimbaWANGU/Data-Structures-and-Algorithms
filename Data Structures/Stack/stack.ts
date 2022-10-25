class Stack {
  stack :any[]

  constructor () {
    this.stack = []
  }

  push (element: any) {
    this.stack.push(element)
  }

  pop () {
    this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  length() {
    return this.stack.length
  }
}

let myStack = new Stack()
console.log(myStack)
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.push(50)
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.length())

myStack.pop()
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.length())
myStack.pop()
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.length())