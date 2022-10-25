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

  removeAt() {}

  getSize() {}
  getHead() {}


  remove() {}
  indexOf() {}
  elementAt() {}
  

}

const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(6)
console.log(linkedList)
console.log(linkedList!.head!.next!.next.next!)

