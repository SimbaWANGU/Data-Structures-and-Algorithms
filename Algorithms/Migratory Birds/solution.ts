function migratoryBirds (arr: number[]) {
  let max_count = 0
  let id = 0
  let i = 0
  let j: number
  let sorted = arr.sort((a, b) => a - b)
  for (i; i < sorted.length; i++) {
    let count = 0
    for (j = i; j < sorted.length; j++) {
      if (sorted[i] === sorted[j]) {
        count ++
      }
    }
    if (count > max_count) {
      max_count = count
      id = arr[i]
    }
  }
  return id
}

console.log(migratoryBirds([1,1,2,2,3])) //=> 1
console.log(migratoryBirds([3,4,5,6,1,2,3])) //=>3