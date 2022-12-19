const hurdleRace = (height: number[], k: number): number => {
  const max = Math.max(...height)
  return (max > k) ? max - k : 0; 
}

console.log(hurdleRace([1,6,3,5,2], 4)) // => 2
console.log(hurdleRace([2,5,4,5,2], 7)) // => 0