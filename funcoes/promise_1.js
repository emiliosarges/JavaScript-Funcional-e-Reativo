let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Emilio', 'Luiza', 'Luilio', 'Vovo Anibal']);
});

function primeiroElemento(array) {
    return array[0];
}

function primeiraLetra(string) {
    return string[0];
}

function letraMinuscula(letra) { 
    return letra.toLowerCase();
}

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log);
    
