var removeDuplicates = function(nums) {
  let unique = []
  let i = 0
  for(i; i < nums.length; i++) {
      if(!unique.includes(nums[i])){
          unique.push(nums[i])
      }
  }
  return unique
};

console.log(removeDuplicates([1,1,2,2,3]))
console.log(removeDuplicates([1,1,2,2,3,4,4,4,5]))
console.log(removeDuplicates(['Apple', 'Orange', 'Apple', 'Pineapple']))