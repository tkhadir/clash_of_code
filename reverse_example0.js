const number = parseInt(readline());


console.error('number', number)

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

const newNum = `${number}`.split('')

console.error('newNum', newNum)

let result = 0
newNum.forEach((item) => {
    result += parseInt(item)
})

result = result ** 2

console.log(result)


//5 --> 25

// 12 --> 9
