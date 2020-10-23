/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
let W = parseInt(inputs[0]); // width of the building.
let H = parseInt(inputs[1]); // height of the building.
const maxTurns = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

let tx = X0, ty = Y0
let turnCount = 0

let minX = 0, minY = 0


let getTarget = (bombDir) => {
    console.error('W : ' + W)
    console.error('H : ' + H)
    console.error('max : ' + maxTurns)
    console.error('x : ' + tx)
    console.error('y : ' + ty)
    console.error('minX : ' + minX)
    console.error('minY : ' + minY)
    console.error(bombDir)
    turnCount++
    switch (bombDir) {
        case 'U':
            H = ty
            ty -= Math.max(Math.trunc((H - minY) / 2) + (ty < 10 ? 1 : 0), 1)
            break;
        case 'UR':
            H = ty
            ty-= Math.max(Math.trunc((H - minY) / 2), 1)
            minX = tx
            tx+= Math.max(Math.trunc((W - minX) / 2), 1)
            break;
        case 'R':
            minX = tx
            tx+= Math.max(Math.trunc((W - minX) / 2), 1)
            break;
        case 'DR':
            minX = tx
            tx+= Math.max(Math.trunc((W - minX) / 2), 1)
            minY = ty
            ty+= Math.max(Math.trunc((H - minY) / 2), 1)
            break;
        case 'D':
            minY = ty
            ty+= Math.max(Math.trunc((H - minY) / 2), 1)
            break;
        case 'DL':
            minY = ty
            ty+= Math.max(Math.trunc((H - minY) / 2), 1)
            W = tx
            tx-= Math.max(Math.trunc((W - minX) / 2), 1)
            break;
        case 'L':
            W = tx
            tx-= Math.max(Math.trunc((W - minX) / 2), 1)
            break;
        case 'UL':
            W = tx
            tx-= Math.max(Math.trunc((W - minX) / 2), 1)
            H = ty
            ty-= Math.max(Math.trunc((H - minY) / 2), 1)
            break;
        
    }
    return {'x': tx, 'y': ty}
}

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    let target = getTarget(bombDir)
    console.log(target['x'] + ' ' + target['y'])
}
