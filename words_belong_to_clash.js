const word = readline();

function belongsToRow(row, word) {
    for(let char of word) {
        if(row.indexOf(char) < 0) return false
    }
    return true
}

const rows = [
    "`1234567890-=",
    "qwertyuiop[]\\",
    "asdfghjkl;'",
    "zxcvbnm,./"
]

let result = false
for(let row of rows) {
    if(belongsToRow(row, word)) {
        result = true
        break;
    }
}

console.log(result ? 'Yes' : 'No')
