function subArrayDivision(s: number[], d: number, m: number): number {
  let division = 0
  let j, i = 0 
  let sum = 0
  for(i; i < s.length; i++) {
    for(j = i; j < j + m; j++) {
      sum += s[j]
    }
    if(sum === d) {
      division += 1
    }
  }

  return division
}

console.log(subArrayDivision([1,2,1,3,2], 3, 2)) //=> 2
console.log(subArrayDivision([1,1,1,1,1,1], 3, 2)) //=> 0
console.log(subArrayDivision([4], 4, 1)) //=> 1