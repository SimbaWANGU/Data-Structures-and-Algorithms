function drawingBook (n: number, p: number) {
  let pagesFlipped: number
  if (p <= n / 2) {
    return pagesFlipped =  Math.floor(p/2)
  } else {
    if (n % 2 == 0) {
      return pagesFlipped = Math.ceil((n - p) / 2)
    }
    return pagesFlipped = Math.floor((n - p) / 2)
  }
}

console.log(drawingBook(5, 2)) //=> 1
console.log(drawingBook(5, 1)) //=> 0
console.log(drawingBook(6, 5)) //=> 1
console.log(drawingBook(15603, 6957)) //=> 3478
console.log(drawingBook(6, 2)) //=> 1
console.log(drawingBook(2059, 117)) //=> 58
console.log(drawingBook(5, 4)) //=> 0
console.log(drawingBook(10, 7)) //=> 2