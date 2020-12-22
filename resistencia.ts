let dict: any = {}
dict['A'] = '.-'
dict['B'] = '-...'	 
dict['C'] = '-.-.'	 
dict['D'] = '-..'
dict['E'] = '.' 
dict['F'] = '..-.'
dict['G'] = '--.' 
dict['H'] = '....'
dict['I'] = '..'	 
dict['J'] = '.---'	 
dict['K'] = '-.-'
dict['L'] = '.-..'
dict['M'] = '--'
dict['N'] = '-.'
dict['O'] = '---'
dict['P'] = '.--.'
dict['Q'] = '--.-'
dict['R'] = '.-.' 
dict['S'] = '...'
dict['T'] = '-'
dict['U'] = '..-'
dict['V'] = '...-'
dict['W'] = '.--'
dict['X'] = '-..-'
dict['Y'] = '-.--'
dict['Z'] = '--..'

const wordToMorse = (w:string) => {
    return w.split('').map(i => dict[i]).join('')
}

const scour = (l:string, words:string[]):number => {
    if (l.length == 0) {
        return 1
    }
    let count = 0
    for (const w of words) {
        if (l.startsWith(wordToMorse(w))) {
            count+=scour(l.replace(wordToMorse(w), ''), words)
        }
    }
    return count
}

const analyze = (l:string, words:string[]):number => {
    return scour(l, words)
}

const L: string = readline();
const N: number = parseInt(readline());
let words = []
for (let i = 0; i < N; i++) {
    const W: string = readline();
    words.push(W)
}

console.log(analyze(L, words))
