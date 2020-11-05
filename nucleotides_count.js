const s = readline();
let base = 'ACGT'
let count = [0, 0, 0, 0]
s.split('').map(c => {
    count[base.split('').indexOf(c)] += 1
})
console.log(count.join(' '))
