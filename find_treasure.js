/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = parseInt(readline());
console.error('s == '+ s)
let lines = []
for (let i = 0; i < s; i++) {
    const line = readline();
    lines.push(line.split(''))
}

let base = 'abcdefghijklmnopqrstuvxyz'

let result= []
let j = 0
lines.forEach(l => {
    let i = 0
    l.forEach(c => {
        if (base.includes(c)) result.push({'char': c, 'x':i, 'y': j})
        i++
    })
    j++
})

result.sort((a, b) => base.indexOf(a['char']) - base.indexOf(b['char']))
.forEach( r =>
    console.log(r['x'] + ' ' + r['y'])
)
