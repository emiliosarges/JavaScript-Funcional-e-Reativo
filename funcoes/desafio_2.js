const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true }
];

// 1. Filtrar produtos frágeis
const produtosFrageis = produto => produto.fragil;

// 2. Calcular total (qtde * preco)
const total = produto => produto.qtde * produto.preco;

// 3. Redutor para calcular média
const calcularMedia = (acc, valor) => {
    const novaQtde = acc.qtde + 1;
    const novoTotal = acc.total + valor;
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    };
};

// 4. Objeto inicial do reduce
const inicial = { qtde: 0, total: 0, media: 0 };

// 5. Encadeamento final
const resultado = carrinho
    .filter(produtosFrageis)
    .map(total)
    .reduce(calcularMedia, inicial);

console.log(resultado); 









    
    
    











 
