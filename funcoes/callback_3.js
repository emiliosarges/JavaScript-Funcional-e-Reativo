const nums = [1, 2, 3, 4, 5];
const dobro = n => n * 2;
console.log(nums.map(dobro));

//-------------------------------------------------------------------------------------------------------
//Outros exemplos:
// const nums = [1, 2, 3, 4, 5];
// const dobro = (n, i) => n * 2 + i;
// console.log(nums.map(dobro));

// const nums = [1, 2, 3, 4, 5];
// const dobro = (n, i, a) => n * 2 + i + a.length;
// console.log(nums.map(dobro));
//-------------------------------------------------------------------------------------------------------
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const primeiraLetra = texto => texto[0];
console.log(nomes.map(primeiraLetra));
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
];

//-------------------------------------------------------------------------------------------------------
// Desafio da aula. Fazer uma função que informe o nome de cada produto:

const nomeDosProdutos = carrinho.map(produto => produto.nome); //Forma 1
console.log(nomeDosProdutos);

const nomeProduto = produto => produto.nome; //Forma 2
console.log(carrinho.map(nomeProduto));

// Desafio da aula. Fazer uma função que mostre o valor dos produtos multiplicados pela quantidade. 

const valorTotal = carrinho.map(produto => produto.qtde * produto.preco); //Forma1
console.log(valorTotal);

valorTotalDosProdutos = produto => produto.qtde * produto.preco; //forma 2
console.log(carrinho.map(valorTotalDosProdutos));
//-------------------------------------------------------------------------------------------------------
// Resolução do professor: 

const getNome = item => item.nome;
console.log(carrinho.map(getNome));

const getTotal = item => item.qtde * item.preco;
const totais = carrinho.map(getTotal);
console.log(totais);
//-------------------------------------------------------------------------------------------------------


