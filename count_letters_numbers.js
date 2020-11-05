let isNumeric = (str) => {
    return /^\d+$/.test(str);
}

let isLetter = (str) => {
    return /^[A-Za-z]+$/.test(str)
}

const input = readline()
let result = 0
let charCount = 0
let numCount = 0
input.trim().split('').forEach( c => {
    if (isLetter(c)) charCount++
    else if (isNumeric(c)) numCount++
})
result = Math.round(charCount / numCount)
console.log(result)
