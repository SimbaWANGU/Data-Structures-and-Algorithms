function bestTimeToSell (stock){
  let i = 0
  let valley = []
  let peak = []
  let profit = 0
  for(i; i < stock.length; i++) {
    if (stock[i] > stock[i+1] && stock[i] > stock[i-1]){
      peak.push(stock[i])
    } else if (stock[i] < stock[i+1] && stock[i] < stock[i-1]) {
      valley.push(stock[i])
    }
  }
  console.log(peak, valley)
  for(let j = 0; j < valley.length; j++) {
    if(stock.indexOf(valley[j]) < stock.indexOf(peak[j])) {
      profit += peak[j] - valley[j]
    }
  }
  return profit
}

console.log(bestTimeToSell([7,1,5,3,6,4]))
console.log(bestTimeToSell([5,2,8,4,5]))