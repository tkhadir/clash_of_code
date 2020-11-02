const M = parseInt(readline());
console.error(M)
let lines = []
for (let i = 0; i < M; i++) {
    const N = parseInt(readline());
    lines.push(N)
}

let getOdd = (n) => {
    if (n%2 != 0) return n
    else {
        while(n%2==0) {
            n++
        }
        return n
    }
}
lines.map(n => getOdd(n)).forEach(n => console.log(n))
