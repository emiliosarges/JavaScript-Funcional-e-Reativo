const primeiroElemento = arrayOuString => arrayOuString[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function(resolve) {
    resolve(['Emilio', 'Luiza', 'Luilio', 'Vovo Anibal']);
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log);
    
