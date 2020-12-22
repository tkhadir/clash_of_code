const dict: any = {}
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

const scour = (l:string, words:string[], cache:Map<string, number>):number => {
    if (l.length == 0) {
        return 1
    }
    let count = 0
    const iterArr = words.filter(i => i.length <= l.length && l.startsWith(i))
    for (const w of iterArr) {
        let cachedw = l.replace(w, '')
        const result = cache.has(cachedw) ? cache.get(cachedw) : scour(cachedw, words, cache)
        if (!cache.has(cachedw)) cache.set(cachedw, result)
        count+=result
    }
    return count
}

const analyze = (l:string, words:string[]):number => {
    return scour(l, words, new Map())
}

const prepare = (words:string[]):string[] => {
    return words.map(w => wordToMorse(w))
}

const L: string = readline()
const N: number = parseInt(readline())
let words = []
for (let i = 0; i < N; i++) {
    const W: string = readline()
    words.push(W)
}
words = prepare(words)
console.log(analyze(L, words))
