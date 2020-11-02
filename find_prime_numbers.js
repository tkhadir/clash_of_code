let primeNumbers = []

let getRange = (min, max) => {
  let stream = []
  for (let i=min; i < max; i++) {
    stream.push(i)
  }
  return stream
}

var inputs = getRange(0, 100)
      
let isPrime = (n) => {
  return n != 0 && getRange(1, n).every(function(element, index, array) {
          if ((element != 1 && element != n && n % element == 0) || (n % 2 == 0)) {
            return false
          }     
          return true
  })
}

inputs.forEach(n => {
  if (isPrime(n)) primeNumbers.push(n)
})
console.log('res:', primeNumbers)
