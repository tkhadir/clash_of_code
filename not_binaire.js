const B = readline();
console.error('B == ' + B)

let result = B.split('').map(n => {
    if (n == 1) return 0
    else return 1
})

console.log(result.join(''))
