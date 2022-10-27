function countingValleys(steps: string): number {
  let i = 0
  let prevPosition: number
  let currPosition = 0
  let valley = 0
  const seaLevel = 0
  for(i; i < steps.length; i++) {
    prevPosition = currPosition
    if(steps[i] === 'U') {
      currPosition++
    } else {
      currPosition--
    }
    if(prevPosition < 0 && currPosition === 0) {
      valley++
    }
  }
  return valley
}

console.log(countingValleys('UDDDUDUU')) //=> 1
console.log(countingValleys('DDUUUUDD')) //=> 1