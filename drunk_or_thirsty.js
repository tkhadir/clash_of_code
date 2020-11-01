
const N = parseInt(readline());
const percentage = parseInt(readline());
sb=0
st=0
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const bill = parseFloat(inputs[0]);
    const tip = parseFloat(inputs[1]);
    sb+=bill
    st+=tip
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(st/sb >= percentage/100? 'DRUNK':'THIRSTY')
