const n = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');


for(i=0;i<n;i++){
    print(new Array(n-i).fill(0).map((_,x)=>x+1).join('').padStart(n, '+'))
}
