// arrow function

const felizNatal = () => console.log('Feliz Natal!');

felizNatal();

const saudacao = nome => `Fala ${nome}, blz??`; //Com um único parâmetro é possível remover os parênteses No lugar de (nome) fica apenas nome

console.log(saudacao('Emílio'));


const somar = numeros => {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somar(array));

//----------------------------- outra forma

const somar2 = (...numeros2) => {
    console.log(Array.isArray(numeros2));
    
    let total2 = 0;
    for (let n2 of numeros2) {
        total2 += n2;
    }
    return total2;
}


console.log(somar2(1, 2, 3));
console.log(somar2(1, 2, 3, 4, 5, 6));
console.log(somar2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// Transformando a função da aula passada em arrow function
// function potencia(base) {
//     return function(exp) {
//         return Math.pow(base, exp);
//     }
// }

const potencia = base => exp => Math.pow(base, exp);

console.log(potencia(2)(2));

const potenciadebase2 = potencia(2);
console.log(potenciadebase2(3));


const potenciaDe10base2exp10 = potenciadebase2(10);
console.log(potenciaDe10base2exp10);

const subtrair = (a, b) => a - b;

console.log(subtrair(4, 1));


// this

Array.prototype.log = function() {
    console.log(this);
}

const numeros = [1, 2, 3];
numeros.log();

