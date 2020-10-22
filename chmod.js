/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());

let words = []
for (let i = 0; i < N; i++) {
    const word = readline();
    console.error('w == ' + word)
    words.push(word)
}

let getCode = (c) => {
    let cmap = new Map()
    cmap.set('---', '0')
    cmap.set('--x', '1')
    cmap.set('-w-', '2')
    cmap.set('-wx', '3')
    cmap.set('r--', '4')
    cmap.set('r-x', '5')
    cmap.set('rw-', '6')
    cmap.set('rwx', '7')
    return cmap.get(c)
}


let result = []
words.forEach(w => {
    let wp = w.split('')
    let chmod = getCode(wp[1] + wp[2] + wp[3])
    chmod += getCode(wp[4] + wp[5] + wp[6])
    chmod += getCode(wp[7] + wp[8] + wp[9])
    console.log(chmod)
})


