function intersection(arr1, arr2) {
  let i = 0
  let j = 0
  let solution = []
  for(i; i < arr1.length; i++) {
    for(j; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        solution.push(arr2[j])
        console.log(solution)
      }
    }
  }
  return solution
}

let array1 = [1,2,2,3]
let array2= [2,3,4,5]
console.log(intersection(array1, array2))