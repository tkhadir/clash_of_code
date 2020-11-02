const T = readline();
console.error(T)
const T2 = readline();
console.error(T2)

let result = ''
T.split('').forEach((t, index) => {
    console.error('t ' + t + ' t2 ' + T2[index] + ' = ' + (t | T2[index]))
    result += ('' + (t | T2[index]))
})
console.log(result)
