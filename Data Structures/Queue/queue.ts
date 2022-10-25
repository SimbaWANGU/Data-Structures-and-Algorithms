class Queue {
  queue: any[];
  
  constructor () {
    this.queue = []
  }

  enqueue(element: any) {
    this.queue.push(element)
  }

  dequeue() {
    this.queue.shift()
  }

  front() {
    if (this.queue.length === 0) {
      return 'The Queue is empty'
    }
    return this.queue[0]
  }

  isEmpty() {
    if (this.queue.length === 0) {
      return true
    }
    return false
  }
  size() {
    return this.queue.length
  }
}

let myQueue = new Queue()
console.log(myQueue)
console.log(myQueue.size())
console.log(myQueue.isEmpty())
console.log(myQueue.front())

myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.enqueue(40)
myQueue.enqueue(50)

console.log(myQueue)
console.log(myQueue.size())
console.log(myQueue.front())
console.log(myQueue.isEmpty())

myQueue.dequeue()
console.log(myQueue)
console.log(myQueue.front())
console.log(myQueue.size())
console.log(myQueue.isEmpty())

myQueue.dequeue()
console.log(myQueue)
console.log(myQueue.front())
console.log(myQueue.size())
console.log(myQueue.isEmpty())