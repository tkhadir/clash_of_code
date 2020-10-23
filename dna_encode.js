const dna = readline();

console.error('dna == '+ dna)

let getCode = (c) => {
    let cmap = new Map()
    cmap.set('A', 'T')
    cmap.set('C', 'G')
    cmap.set('G', 'C')
    cmap.set('T', 'A')
    return cmap.get(c)
}

let result = ''

dna.split('').forEach(d => {
    result += getCode(d.toUpperCase())
})

console.log(result)
