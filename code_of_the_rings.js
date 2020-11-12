/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const base = () => {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + 65)).join('') + ' '
}
const increment = (m) => {
    let move = ''
    for (let i =0; i< m ; i++) {
        move += '+'
    }
    return move
}
const decrement = (m) => {
    let move = ''
    for (let i =0; i < m; i++) {
        move += '-'
    }
    return move
}

let getCurrentCharPosition = (c, i) => {
    console.error('debug current position ' + i + ':' + c)
    return base().indexOf(c) + 1
}
const mvRight = '>'
const mvLeft = '<'
const validate = '.'

let getInstructions = (phrase) => {
    let result = phrase.split('').map((c, i) =>  {
                    const charIndex = base().indexOf(c)
                    let dist = 0
                    let reverseDist = 0
                    let order = ''
                    if (i < 30) {
                        dist = charIndex + 1
                        reverseDist = (base().length - (charIndex + 1))
                        order = (dist <= reverseDist) ? increment(dist) : decrement(reverseDist)
                    } else {
                        let currentPosition = base().indexOf(phrase.split('')[i - 30])
                        dist = charIndex - currentPosition
                        order = dist < 0 ? decrement(Math.abs(dist)) : increment(dist)
                    }
                    order += validate
                    order += (i != (phrase.length - 1)) ? mvRight : ''
                    return order
                }).join('')
    return result
}
const magicPhrase = readline()
console.error(magicPhrase + ':' + magicPhrase.length )

console.log(getInstructions(magicPhrase))
