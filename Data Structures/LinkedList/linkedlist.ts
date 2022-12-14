class ListNode {
  element: any
  next: any
  
  constructor(element: any){
    this.element = element
    this.next = null
  }
}

class LinkedList {
  head: ListNode | null
  size: number

  constructor() {
    this.head = null
    this.size = 0
  }
  
  add(element: any) {
    let node = new ListNode(element)
    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
  
  addAt(element: any, index: number) {
    if (index < 0 || index > this.size) {
      return 'Invalid Index Position'
    }
    let newNode = new ListNode(element)
    let curr, prev
    curr = this.head
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let i: number = 0
      curr = this.head
      while(i < index) {
        i++
        prev = curr
        curr = curr!.next
      }
      newNode.next = curr
      prev.next = newNode
    }
    this.size++
  }

  getSize():number {
    return this.size
  }

  getHead() {
    return JSON.stringify({
      element: this.head?.element,
      next: this.head?.next
    })
  }


  remove(element: any) {
    let curr
    let prev;
    curr = this.head
    let i = 0
    if (curr?.element === element) {
      this.head = curr?.next
    } else {
      while (curr?.element !== element) {
        prev = curr
        curr = curr?.next
      }
      prev.next = curr?.next
    }
    this.size--
  }
}

const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.addAt(5, 1)
linkedList.add(3)
linkedList.add(4)
linkedList.add(6)
linkedList.remove(1)
console.log(linkedList)
console.log('Size of the list is ' + linkedList.getSize())
console.log('Head of the list is ' + linkedList.getHead())
console.log(linkedList!.head!.next!.next.next!)

