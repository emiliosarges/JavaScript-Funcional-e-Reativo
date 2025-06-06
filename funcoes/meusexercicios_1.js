//Exercícios para fixar e treinar o conceito de MAP
//Esses exercício não foram propostos pelo professor, eu mesmo pedi ao chatGpt para criar os desafios para que eu pudesse treinar e fixar o entendimento.
//1. Dobrar os números
// [1, 2, 3, 4] => [2, 4, 6, 8]
const numeros = [1, 2, 3, 4];
console.log(numeros.map(n => n * 2));

//2. Transformar números em strings
// [10, 20, 30] => ["10", "20", "30"]
const valores = [10, 20, 30];
console.log(valores.map(numeros => numeros.toString()));

//3. Extrair nomes de objetos
// [{nome: 'Ana'}, {nome: 'João'}] => ['Ana', 'João']
const pessoas = [{ nome: 'Ana' }, { nome: 'João' }];
console.log(pessoas.map(pessoa => pessoa.nome));

//4. Calcular idade a partir do ano de nascimento
// [2000, 1990, 1985] => [24, 34, 39] (considerando 2024)
const anos = [2000, 1990, 1985];
console.log(anos.map(ano => `A idade de quem nasceu em ${ano} é: ${2024 - ano}`));

const anoAtual = new Date().getFullYear()-1;
console.log(anos.map(ano => anoAtual - ano));

//5. Criar frases a partir de objetos
// [{nome: 'TV', preco: 1500}] => ['O produto TV custa R$1500']
const produtos = [{ nome: 'TV', preco: 1500 }];
console.log(produtos.map(produto => `O produto ${produto.nome} custa R$${produto.preco}`));

//6. Adicionar índice aos elementos
// ['a', 'b', 'c'] => ['0: a', '1: b', '2: c']
const letras = ['a', 'b', 'c'];
console.log(letras.map((letra, indice) => `${indice}: ${letra}` ));

//7. Transformar todos os nomes para maiúsculas
// ['joão', 'maria'] => ['JOÃO', 'MARIA']
const nomes = ['joão', 'maria'];
console.log(nomes.map(nome => nome.toLocaleUpperCase()));

//8. Extrair apenas o primeiro nome
// ['João Silva', 'Maria Souza'] => ['João', 'Maria']
const nomesCompletos = ['João Silva', 'Maria Souza'];
const primeirosNomes = nomesCompletos.map(nomeCompleto => nomeCompleto.split(' ')[0]);
console.log(primeirosNomes); 

//9. Converter temperaturas de Celsius para Fahrenheit
// [0, 25, 30] => [32, 77, 86]
const celsius = [0, 25, 30];
console.log(celsius.map(temperaturaEmCelsius => (temperaturaEmCelsius * 9/5) + 32));

//10. Transformar valores em objetos
// [1, 2, 3] => [{valor: 1}, {valor: 2}, {valor: 3}]
const ids = [1, 2, 3];
console.log(ids.map(id => ({valor: id})));







