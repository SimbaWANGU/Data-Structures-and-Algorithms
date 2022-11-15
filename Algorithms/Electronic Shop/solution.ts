function electronicShop(keyboards: number[], drives: number[], b: number) {
  let i = 0
  let prevMax = 0
  let currMax = 0
  for(i; i < keyboards.length; i++) {
    let j = 0
    for(j; j < drives.length; j++) {
      prevMax = keyboards[i] + drives[j]
      if (prevMax > currMax && prevMax <= b) {
        currMax = prevMax
      }
    }
  }
  if (currMax === 0) {
    return -1
  }
  return currMax
}

console.log(electronicShop([3, 1], [5, 2, 8], 10)) // => 9
console.log(electronicShop([3, 1, 2], [5, 2, 8], 10)) // => 10
console.log(electronicShop([4], [5], 5)) // => -1 