/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = readline();

result = '('
for (let i=0; i < 3; i++) {
    result+=s.split('')[i]
}
result+=') '
for (let i=3; i< 6; i++) {
    result+=s.split('')[i]
}
result+='-'
for(let i=6; i<s.length; i++) {
    result+=s.split('')[i]
}

console.log(result);
