const N = parseInt(readline());
var inputs = readline().split(' ');
let somme = 0
for (let i = 0; i < N; i++) {
    const xi = parseInt(inputs[i]);
    somme += Math.pow(xi, 2)
}



console.log(somme);
