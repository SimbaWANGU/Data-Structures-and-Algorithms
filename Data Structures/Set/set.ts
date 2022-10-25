class MySet {
  collection: any[]

  constructor() {
    this.collection = []
  }

  has(element:any) {
    if(this.collection.includes(element)) {
      return true
    }
    return false
  }

  add(element: any) {
    if (this.has(element)) {
      return 'Element exists'
    }
    this.collection.push(element)
  }

  values() {
    return this.collection
  }

  size() {
    return this.collection.length
  }

  remove(element: any) {
    if (!this.has(element)) {
      return 'Element does not exist'
    }
    let index = this.collection.indexOf(element)
    this.collection.splice(index, 1)
  }

  union(set: MySet) {
    let union: any[] = this.collection.filter(function (obj) {
      return set.collection.indexOf(obj) !== -1
    })
    return union
  }

  difference(set: MySet) {
    let difference: any[] = this.collection.filter(function (obj) {
      return set.collection.indexOf(obj) === -1
    })
    return difference
  }

  subset(set: MySet) {
    let i = 0
    for(i; i < set.size(); i++) {
      if (!this.collection.includes(set.collection[i])){
        break;
      }
    }
    if (i === set.size()) {
      return true
    }
    return false
  }
}

let setA = new MySet()
let setB = new MySet()
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)
setA.add(5)
setA.add(6)
setB.add(3)
setB.add(5)
setB.add(6)
setB.add(7)
setA.remove(2)
console.log(setA.values())
console.log(setA.has(2))
console.log('The size of the set is ' + setA.size())
console.log(setA.collection.length)
console.log(setA.union(setB))
console.log(setA.difference(setB))
console.log(setB.difference(setA))
console.log(setA.subset(setB))