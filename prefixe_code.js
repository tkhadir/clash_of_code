/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const FAIL = 'DECODE FAIL AT INDEX '

let encodeMap = new Map()

let toChar = (c) => {
    return String.fromCharCode(c)
}

let addCode = (b, c) => {
    encodeMap.set(b, toChar(c))
}

let decode = (s) => {
    return encodeMap.get(s)
}

const n = parseInt(readline());
console.error(n)
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const b = inputs[0];
    const c = parseInt(inputs[1]);
    console.error(b + ' ' + c)
    addCode(b, c)
}
const s = readline();
console.error(s)

let msg = ''
let index = -1

if (n === 0) console.log(FAIL + 0)
else {
    let result = s.split('').map((c, i) => {
        msg += c
        found = decode(msg)
        if (found) {
            msg = ''
            index = -1
        }
        else index = (index == -1 ? i : index)
        return found
    }).join('')

    console.log((msg.length > 0 ? FAIL + index : result))
}
