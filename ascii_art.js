/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'
const L = parseInt(readline());
console.error('L == '+ L)
const H = parseInt(readline());
console.error('H == '+ H)
const text = readline().toUpperCase();
console.error('T == '+ text)
let lines = []
for (let i = 0; i < H; i++) {
    const ROW = readline();
    console.error('row == '+ ROW)
    lines.push(ROW.split(''))
}


lines.forEach(l => {
    let result = ''
    text.split('').forEach(t => {
        let finalText = base.indexOf(t) > -1 ? t : '?'
        if (base.indexOf(finalText) > -1) {
            let index = base.indexOf(finalText) + 1
            for (let i = ((index * L) - L); i < (index * L); i++) {
                result += l[i]
            }
        }
    })
    console.log(result)
})

