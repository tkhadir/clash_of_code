
const s = readline();

console.error('s == ' + s)

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let asciiSum = 0
s.split('').forEach(c => {
    let asciiv = c.charCodeAt()
    asciiSum = asciiSum + ((asciiv % 2 === 0 ) ? asciiv * 2 : asciiv)
})

console.log(asciiSum);
