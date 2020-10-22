/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const n1 = inputs[0];
console.error(n1)
const n2 = inputs[1];
console.error(n2)

// Write an answer using console.log()
// To debug: console.error('Debug messages...');



let result = ''

for (let i =0; i< n1.split('').length; i++) {
    result += n1.split('')[i] ^ n2.split('')[i]
}
console.log(result);
