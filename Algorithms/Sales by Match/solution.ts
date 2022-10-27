function salesByMatch(arr: number[]): number {
  let pairs = 0
  let i = 0
  let prevColor: number
  let currColor: number
  let sorted = arr.sort((a, b) => a - b)
  for(i; i < sorted.length; i++) {
    if (sorted[i + 1]) {
      prevColor = sorted[i]
      currColor = sorted[i + 1]
      if (prevColor === currColor) {
        pairs++
        sorted.shift()
        sorted.shift()
        i--
      } else {
        sorted.shift()
        i--
      }
    } else {
      return pairs
    }
  }

  return pairs
}

console.log(salesByMatch([1,2,1,2,1,3,2])) //=> 2
console.log(salesByMatch([10,20,20,10,10,30,50,10,20])) //=> 3
console.log(salesByMatch([1,1,3,1,2,1,3,3,3,3])) //=> 4