
const G = parseInt(readline());
const S = parseInt(readline());
const B = parseInt(readline());

console.error('G == ' + G + ' S == ' + S + ' B ==' + B)

let gcount = 0
let scount = 0
let bcount = 0

var fromBronze = (bcoins) => {
    return Math.trunc(bcoins / 100)
}

var fromSilver = (scoins) => {
    return Math.trunc(scoins / 100)
}

bcount = B - (fromBronze(B) * 100)
scount = (S + fromBronze(B))
gcount = G + fromSilver(scount)
scount = (scount - (fromSilver(scount) * 100))

console.log(gcount + 'G ' + scount + 'S ' + bcount + 'B');


/*
let G = parseInt(readline());
let S = parseInt(readline());
let B = parseInt(readline());
S += Math.floor(B / 100);
B %= 100;
G += Math.floor(S / 100);
S %= 100;
console.log(`${G}G ${S}S ${B}B`);
*/
