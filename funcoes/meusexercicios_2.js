//Exercícios de função Reduce

// Exercício 1 – Somar todos os números
//Dado o array abaixo, use reduce para somar todos os números:
const numeros = [10, 20, 30, 40];

const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
console.log(soma);

// Exercício 2 – Calcular o total em um carrinho de compras
//Dado um array de produtos, cada um com preco e quantidade, calcule o valor total da compra:
const carrinho = [
  { produto: 'Livro', preco: 30, quantidade: 2 },
  { produto: 'Caneta', preco: 5, quantidade: 10 },
  { produto: 'Caderno', preco: 20, quantidade: 3 }
];

const totalCompra = carrinho.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0);
console.log(totalCompra);

 // Exercício 3 – Concatenar strings
 // Use reduce para transformar o array de palavras em uma única frase:
 const palavras = ['Aprender', 'JavaScript', 'é', 'muito', 'divertido'];

 const frase = palavras.reduce((texto, palavra) => texto + ' ' + palavra);
 console.log(frase);

 // Exercício 4 – Encontrar o maior número
 //Use reduce para encontrar o maior número no array:
const num = [12, 350, 7, 98, 23];
const maiorNumero = num.reduce((maior, numeroAtual) => {
    if(numeroAtual > maior) {
        maior = numeroAtual;
    }
    return maior;
})
console.log(maiorNumero);

// Exercício 5 – Contar ocorrências de elementos
// Dado o array de letras, use reduce para contar quantas vezes cada letra aparece:
const letras = ['a', 'b', 'a', 'c', 'b', 'a'];

const contador = letras.reduce((acumulador, letra) => {
  if (acumulador[letra]) {
    acumulador[letra] = acumulador[letra] + 1;
  } else {
    acumulador[letra] = 1;
  }
  return acumulador;
}, {});

console.log(contador);

