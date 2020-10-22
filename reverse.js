/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const S = readline();

let answer = ''
S.split(' ').reverse().forEach(ss => {
    answer += answer.length > 0 ?  ' ' + ss : ss
})

console.log(answer);
