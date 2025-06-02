// desafio aula

function somar(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

const soma2 = somar(2);
const soma2mais3 = soma2(3);
console.log(soma2mais3(4));


//---------------------------------------------

function calcular(a) {
    return function(b) {
        return function(funcao) {
            return funcao(a, b);
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

const numeroa = calcular(5);
const numeroab = numeroa(3);
const operacaomult = numeroab(multiplicar);
const operacaosub = numeroab(subtrair);
console.log(operacaomult);
console.log(operacaosub);

console.log(calcular(10)(5)(subtrair));
console.log(calcular(10)(5)(multiplicar));
 
