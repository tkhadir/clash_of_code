const speed: number = parseInt(readline())
const lightCount: number = parseInt(readline())
let lights: any = []

for (let i = 0; i < lightCount; i++) {
    let inputs: any = readline().split(' ')
    const distance: number = parseInt(inputs[0])
    const duration: number = parseInt(inputs[1])
    lights.push({ distance: distance, duration: duration })
}

let maxSpeed: number = speed

let isOk: boolean = false

while (!isOk) {
    isOk = true
    let speedPerSec: number = maxSpeed * 1000 / 3600
    for (let l of lights) {

        var timeToReach = Math.round(l.distance / speedPerSec)

        if (timeToReach % (2 * l.duration) >= l.duration) {
            isOk = false
            break
        }
    }

    if (!isOk && maxSpeed != 1) {
        maxSpeed = maxSpeed - 1;
    }
}

console.log(maxSpeed)
