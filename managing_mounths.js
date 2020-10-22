i=readline(),s="JFMAMJJASOND".match(new RegExp(i+"(.)")),console.log(s?s[1]:"J");

let Y = 'JFMAMJJASOND';
let months = readline();
while (months.length > Y.length)
    Y = Y.repeat(2);
const ndx = Y.indexOf(months);
const result = (ndx + months.length) % Y.length;
console.log(Y[result]);
