class ListNode:
  def __init__(self, element):
    self.element = element
    self.nextPosition = None

class LinkedList:
  def __init__(self):
    self.head = None
    self.size = 0

  def get_size(self):
    print(self.size)

  def getHead(self):
    print(self.head.element)

  def add(self, element):
    current, node = 0, ListNode(element)
    if self.head == None:
      self.head = node
    else:
      current = self.head
      while current.nextPosition:
        current = current.nextPosition
      current.nextPosition = node
    self.size += 1

  def addAt(self, element, index):
    if index < 0 or index > self.size:
      print('Invalid Indexx Position')
    curr, prev, newNode = self.head, None, ListNode(element)
    if index == 0:
      newNode.nextPosition = self.head
      self.head = newNode
    else:
      i = 0
      curr = self.head
      while i < index:
        i += 1
        prev = curr
        curr = curr.nextPosition
      newNode.next = curr
      prev.nextPosition = newNode
    self.size += 1

  def remove(self, element):
    curr, prev, i = self.head, None, 0
    if curr.element == element:
      self.head = curr.nextPosition
    else:
      while curr.element != element:
        prev, curr = curr, curr.nextPosition
      prev.nextPosition = curr.nextPosition
    self.size -= 1


newList = LinkedList()
newList.add('lol')
newList.get_size()
print(newList)
newList.add('lmao')
newList.add('lmfao')
newList.get_size()
newList.addAt('lllooo', 1)
newList.get_size()
newList.remove('lol')
newList.get_size()
newList.getHead()
