function subArrayDivision(s: number[], d: number, m: number): number {
  let division = 0
  let  i = 0 
  let j: number
  let condition: boolean
  for(i; i < s.length; i++) {
    let sum = 0
    for(j = i; j < s.length; j++) {
      sum += s[j]
      if (j - i === m - 1) { break }
    }
    if (sum === d) {
      division ++
    }
  }

  return division
}

console.log(subArrayDivision([1,2,1,3,2], 3, 2)) //=> 2
console.log(subArrayDivision([1,1,1,1,1,1], 3, 2)) //=> 0
console.log(subArrayDivision([4], 4, 1)) //=> 1