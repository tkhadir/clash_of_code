let compare = (b, t) => {
    let tf = (((t * 9)/ 5)+32)
    return  tf == b ? 'Same' : (tf > b ? 'Lower' : 'Higher')
}

const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const b = parseInt(inputs[0]);
    const t = parseInt(inputs[1]);
    console.log(compare(b, t))
}
