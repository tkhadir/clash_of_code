/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = readline();

let ch = s.split('')

let half = Math.round(ch.length / 2)

let answer = ''

for (let i = 0; i < half; i++) {
    answer += ch[i] +  (i+half < ch.length ? ch[i+half] : '')
}

console.log(answer);
