const valueCount = parseInt(readline());
var inputs = readline().split(' ');
let result = ''
for (let i = 0; i < valueCount; i++) {
    const value = inputs[i];
    result += String.fromCharCode('0x'+ value)
}
console.log(result)
