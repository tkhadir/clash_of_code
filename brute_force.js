const password = 'findme'
const minLength = 6
const maxLength = 8

const prepare = (min, max) => {
    let i=0
    let minFormat = ''
    let maxFormat = ''
    while (i < min) {
        minFormat+='a'
        i++
    }

    i=0
    while (i < max) {
        maxFormat+='z'
        i++
    }
    return {'minpass': minFormat, 'maxpass': maxFormat}
}

const passwordFormat = prepare(minLength, maxLength)
console.log('possible password format : min :' + passwordFormat['minpass'] + ' max : ' + passwordFormat['maxpass'])

console.log('start process time : ' + new Date())
let i = parseInt(passwordFormat['minpass'], 36)
while(i <= parseInt(passwordFormat['maxpass'], 36)) {
    //console.log(i.toString(36))
    if (password === i.toString(36)) {
        console.log('found : ' + i.toString(36))
        break
    }
    i++
}
console.log('start process time : ' + new Date())

/*
start process time : Tue Dec 29 2020 09:37:10 GMT+0100 (GMT+01:00)
found : findme
start process time : Tue Dec 29 2020 09:39:04 GMT+0100 (GMT+01:00)
*/
