var inputs = readline().split(' ');
const l = parseInt(inputs[0]);
console.error(l)
const h = parseInt(inputs[1]);
console.error(h)
let rows = []
for (let i = 0; i < h; i++) {
    const row = readline();
    rows.push(row.split(''))
}


for (let i=0; i< l; i++) {
    let row = ''
    for (j=h-1; j>= 0; j--) {
        row += rows[j][i]
    }
    console.log(row);
}
