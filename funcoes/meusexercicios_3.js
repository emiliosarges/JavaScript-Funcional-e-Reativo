// Exercícios:

 //Usando Reduce para somar números:
// 1. Some os números: [10, 20, 30]
const numeros = [10, 20, 30];
console.log(numeros.reduce((acc, num) => acc + num, 0));

// 2. Some os números: [5, 5, 5, 5, 5]
const nums = [5, 5, 5, 5, 5];
console.log(nums.reduce((acc, num) => acc + num, 0));

// 3. Some os números negativos e positivos: [-10, 20, -5, 15]
const negpos = [-10, 20, -5, 15];
console.log(negpos.reduce((acc, num) => acc + num, 0));

//===================================================================

//Usando reduce para contar elementos:
//1. Contar cores: ['azul', 'verde', 'azul', 'vermelho']
const cores = ['azul', 'verde', 'azul', 'vermelho'];
const contadorDeCores = cores.reduce((acc, cor) => {
    if (acc[cor]) acc[cor]++;
    else acc[cor] = 1;
    return acc;
}, {});
console.log(contadorDeCores);

//2. Contar nomes: ['Ana', 'Carlos', 'Ana', 'João', 'Carlos']
const nomes = ['Ana', 'Carlos', 'Ana', 'João', 'Carlos'];
console.log(nomes.reduce((acc, nome) => {
    if(acc[nome]) acc[nome]++;
    else acc[nome] = 1;
    return acc;
}, {}));

//3. Contar letras: ['a', 'b', 'c', 'a', 'a', 'b']
const letras = ['a', 'b', 'c', 'a', 'a', 'b'];
console.log(letras.reduce((acc, letra) => {
    if(acc[letra]) acc[letra]++;
    else acc[letra] = 1;
    return acc;
}, {}));

//Usando o reduce para encontrar o maior número:
//1. Maior número: [1, 9, 3]
const arrayDeNumeros = [10, 9, 3];
console.log(arrayDeNumeros.reduce((acc, numeroAtual) => {
    if(numeroAtual > acc) acc = numeroAtual;
    else acc = acc;
    return acc;
}));

//2. Maior número: [100, 99, 101, 98]
const numerosAleatorios = [100, 99, 101, 98];
const maiorNumero = numerosAleatorios.reduce((maior, numero) =>{
    if(numero > maior) maior = numero;
    return maior;
})
console.log(maiorNumero);

//3. Maior número: [-10, -20, -3, -15]
const numerosNegativos = [-10, -20, -3, -15];
const menosMenor = numerosNegativos.reduce((acumulador, num) => {
    if(num > acumulador) {
        acumulador = num;
    }
    return acumulador
})
console.log(menosMenor);

//Usando o reduce para verificar condições com reduce (true/false):
// 1. Verificar se todos são maiores que 10: [11, 15, 12]
console.log([11, 15, 12].reduce((acc, n) => acc && n > 10, true));

//2. Verificar se nenhum é negativo: [5, -3, 7]
const numerosReais = [5, -3, 7];
const verificadorNegativo = numerosReais.reduce((acc, n) => acc && n >= 0, true);
console.log(verificadorNegativo);


//3. Verificar se todos são pares: [2, 4, 6, 8]
const numbers = [2, 4, 6, 8];
const verificaPares = numbers.reduce((acc, n) => acc && n % 2 === 0, true);
console.log(verificaPares);













