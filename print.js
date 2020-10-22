/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = parseInt(readline());


let rows = []
for (let i=0; i< s; i++) {
    let row = ''
    for (let j=0; j< s; j++) {
        row += '+'
    }
    rows.push(row)
}

rows.forEach(r => {
    console.log(r)
})
