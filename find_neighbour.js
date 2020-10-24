/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const width = parseInt(readline()) // the number of cells on the X axis
console.error('w = ' + width)
const height = parseInt(readline()) // the number of cells on the Y axis
console.error('h = ' + height)

let lines = []
for (let i = 0; i < height ; i++) {
    const line = readline(); // width characters, each either 0 or .
    console.error(line)
    lines.push(line.split(''))
}


let getRN = (list, px, py) => {
    let x = list.findIndex((l, index) => !l.includes('.')
    && px < index)
    let y = x != -1 ? py : -1
    return {'x': x, 'y': y}
}

let getDN = (px, py, list) => {
    let y = list.findIndex((l, index) => !l.includes('.')
    && py < index)
    let x = y != -1 ? px : -1
    return {'x': x, 'y': y}
}

for (let j=0; j< lines.length; j++) {
    for (let i=0; i< lines[j].length; i++) {
        if (!lines[j][i].includes('.')) {
            let coords = []
            coords.push(i + ' ' + j)
            coords.push(getRN(lines[j], i, j)['x'])
            coords.push(getRN(lines[j], i, j)['y'])
            coords.push(getDN(i, j, lines.map(l => l[i]))['x'])
            coords.push(getDN(i, j, lines.map(l => l[i]))['y'])
            console.log(coords.join(' '))
        }
    }
}


/*
lines.forEach(line => {
    let coords = line.split('')
    console.error(coords)
    let px = 0
    let py = lines.indexOf(line)
    coords.forEach(c => {
        console.error('c == ' + c)
        if (!c.includes('.')) {
            
            px++
        }
    })
})*/
