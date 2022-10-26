function dayOfProgrammer(year: number): string {
  let day: number
  if (year === 1918) {
    return '26.09.1918'
  } else if (year < 1918){
    if (year % 4 === 0) {
      day = 256 - (31+29+31+30+31+30+31+31)
      return `${day}.09.${year}`
    } else {
      day = 256 - (31+28+31+30+31+30+31+31)
      return `${day}.09.${year}`
    }
  } else {
    if (((year % 4 === 0) && (year % 100 != 0)) || year % 400 === 0) {
      day = 256 - (31+29+31+30+31+30+31+31)
      return `${day}.09.${year}`
  } else {
      day = 256 - (31+28+31+30+31+30+31+31)
      return `${day}.09.${year}`
    }
  }
}

console.log(dayOfProgrammer(2017)) //=> 13.09.2017
console.log(dayOfProgrammer(2016)) //=> 12.09.2016
console.log(dayOfProgrammer(1800)) //=> 12.09.1800