const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
];

const getNome = item => item.nome;
const qtdeMariorQueZero = item => item.qtde > 0;
// const qtdeMariorIgualZero = item => item.qtde >= 0;
// const qtdeMutoGrande = item => item.qtde >= 1000;

//maneira mais direta usando o console.log
console.log(carrinho.filter(qtdeMariorQueZero)); 

//combinando função Filter com função Map
// const itensValidos = carrinho 
//     .filter(qtdeMariorQueZero)
//     .map(getNome);
// console.log(itensValidos);


//Construindo meu próprio Filter

Array.prototype.meuFilter = function(fn) {
    const novoArray = [];

    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray;
}

const itensValidos2 = carrinho         //Testando meu Filter
    .meuFilter(qtdeMariorQueZero)
    .map(getNome);
console.log(itensValidos2);