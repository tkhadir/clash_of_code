/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = readline();

var initCirclesMap = () => {
    let circlesMap = new Map()
    circlesMap.set(1, 0)
    circlesMap.set(2, 0)
    circlesMap.set(3, 0)
    circlesMap.set(4, 0)
    circlesMap.set(5, 0)
    circlesMap.set(6, 1)
    circlesMap.set(7, 0)
    circlesMap.set(8, 2)
    circlesMap.set(9, 1)
    circlesMap.set(0, 1)
    return circlesMap
}

let totalCircles = 0
let circlesMap = initCirclesMap()

let sArr = s.split('')

console.error('s == ' + s)

sArr.forEach(c => {
    let key = parseInt(c)
    if (circlesMap.has(key)) totalCircles = totalCircles + circlesMap.get(key)
})

console.log(totalCircles);
