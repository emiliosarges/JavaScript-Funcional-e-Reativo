// Funcition Declaration
function bomDia() {
    console.log('Bom dia!');
}

bomDia();


// Function expression
const boaTarde = function () {
    console.log('Boa tarde!');
}

boaTarde();

//Flexibilidade dos parâmetros
function somar(a, b) {
    return a + b;
}

let resutado = somar(3, 4)
console.log(resutado); // 3+ 4 = 7

resutado = somar(3, 5, 5, 6, 7, 8);
console.log(resutado); // 3 + 5 = 9

resutado = somar(3);
console.log(resutado); // 3 + undefined = NaN


