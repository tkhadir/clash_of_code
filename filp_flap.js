/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const a = readline();
console.error('a ' + a)
const b = readline();
console.error('b ' + b)
const input = readline();
console.error(' input ' + input)

let result = input.split('').map(s => (s == a ? b : (s == b ? a : s))).join('')

console.log(result);
