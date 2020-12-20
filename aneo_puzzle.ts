const evalTime = (count:number, lduration: number, time: number): boolean => {
    if (count <= time) {
        let timeFromRed = count + lduration
        console.error(timeFromRed)
        return (timeFromRed > time) ? false : evalTime((timeFromRed + lduration), lduration, time)
    } else return true
}

const speed: number = parseInt(readline())
console.error('max speed is : ' + speed)
const lightCount: number = parseInt(readline())
console.error('nbr of lights : ' + lightCount)
let lights: any = []

for (let i = 0; i < lightCount; i++) {
    let inputs: any = readline().split(' ')
    const distance: number = parseInt(inputs[0])
    const duration: number = parseInt(inputs[1])
    lights.push({ 'distance': distance, 'duration': duration })
}

let maxSpeed: number = speed

let complete: boolean = false

while (!complete) {
    let speedPerSec: number = maxSpeed * 1000 / 3600
    for (let l of lights) {

        let time: number = Math.round(l.distance / speedPerSec)
        console.error('max speed is : ' + maxSpeed)
        console.error('time : ' + time)
        console.error('duration : ' + l.duration)

        complete = evalTime(l.duration, l.duration, time)
        if (!complete) break
    }

    if (!complete && maxSpeed > 1) {
        maxSpeed = maxSpeed - 1
    }
}

console.log(maxSpeed)
