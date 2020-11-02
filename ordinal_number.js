
const N = readline();
console.error(N)

if (N.endsWith('1') && (parseInt(N) % 11 != 0)) console.log(N + 'st')
else if (N.endsWith('2') && (parseInt(N) < 100)) console.log(N + 'nd')
else if (N.endsWith('3')) console.log(N + 'rd')
else console.log(N + 'th')
