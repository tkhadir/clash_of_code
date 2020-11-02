/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const X = readline();
console.error(X)

let firstHalf = ''
for (let i =0; i< Math.trunc(X.length / 2) + 1; i++) {
    firstHalf += X.split('')[i]
}

console.error(firstHalf)


let secondHalf = ''
for (let i =X.length-1; i> Math.trunc(X.length / 2); i--) {
    secondHalf += X.split('')[i]
}

console.error(secondHalf)

let result = ''
for (let i= 0; i< firstHalf.length; i++) {
result += (firstHalf.split('')[i] + ((i < secondHalf.length) ? secondHalf.split('')[i] : ''))
}

console.log(result);
