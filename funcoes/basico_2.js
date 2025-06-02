function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa tarde!')
}

// 1) Passar uma função como parametro para outra função
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn()
    }else{
        console.log('Isso não é uma função, isso é um(a): ' + typeof fn)
    }
   
}

executarQualquerCoisa(9);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2) Retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const potenciaDe10 = potencia(10);
const potenciaDe10base2 = potenciaDe10(2);
console.log(potenciaDe10base2);

console.log(potencia(2)(2));

const resultadoPot = potencia(2)(4);
console.log(resultadoPot);



// Criadas por mim para fixar o conceito

function saudacao(saudacaoInicial) {
    return function(nome) {
        return `${saudacaoInicial}, ${nome}!`;
    }
}

const ola = saudacao('Olá');
console.log(ola('José'));

const olaJoao = ola('Jõao')
console.log(olaJoao);

function aplicarDesconto(taxa) {
    return function(valor) {
        return valor - (valor * taxa);
    }
}

const desconto10 = aplicarDesconto(0.10);
console.log(desconto10(100));

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
 
