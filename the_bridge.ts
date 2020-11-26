const splitLine = (l: string) => {
    return l.split('')
}

const getAheadCase = (s: string, x: number) => {
    return x+1 < s.length -1 ? splitLine(s)[x+1] : ''
}

const isHole = (s: string) => {
    return !s.includes('.')
}

const isNotHole = (s: string) => {
    return s.includes('.')
}

const isPassable = (s: string, speed: number, x: number) => {
    let holes = 0
    for (let i=x; i< x + speed; i++) {
        if (isHole(getAheadCase(s, i))) holes++
        else holes = 0
    }
    return holes <= speed
}

const getLine = (lines: any, y: number) => {
    return lines[y]
}

const M: number = parseInt(readline()); // the amount of motorbikes to control
const V: number = parseInt(readline()); // the minimum amount of motorbikes that must survive

let lines = []

const L0: string = readline(); // L0 to L3 are lanes of the road. A dot character . represents a safe space, a zero 0 represents a hole in the road.
lines.push(L0)
const L1: string = readline();
lines.push(L1)
const L2: string = readline();
lines.push(L2)
const L3: string = readline();
lines.push(L3)

// game loop
while (true) {
    const S: number = parseInt(readline()); // the motorbikes' speed
    let passables = 0
    let maxY = 0
    let isHoleAhead = false
    for (let i = 0; i < M; i++) {
        var inputs: string[] = readline().split(' ');
        const X: number = parseInt(inputs[0]); // x coordinate of the motorbike
        const Y: number = parseInt(inputs[1]); // y coordinate of the motorbike
        maxY = Math.max(maxY, Y)
        const A: number = parseInt(inputs[2]); // indicates whether the motorbike is activated "1" or detroyed "0"
        
        const mLine = getLine(lines, Y)
        if (A && isPassable(mLine, S, X)) passables ++
        if (!isHoleAhead) isHoleAhead = isHole(getAheadCase(mLine, X))
    }

    let response = ''
    if (passables >= V) response = isHoleAhead ? 'JUMP' : 'SPEED'
    else response = (maxY == M ? 'UP' : 'DOWN')
    
    console.log(response)
}
