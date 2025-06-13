//Exercício 1 – Criando uma Promise simples
//Objetivo: Criar uma Promise que resolve depois de 2 segundos com a mensagem “Tudo certo!”

const imprimeTexto = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Tudo certo!');
        }, 2000)
    })
}

imprimeTexto()
    .then(primeiraLetraMinuscula => primeiraLetraMinuscula[0].toLowerCase())
    .then(console.log)

//Exercício 2 – Rejeitando uma Promise
//Objetivo: Crie uma Promise que rejeita se um número for menor que 10, e resolve se for 10 ou mais.

const RejeitaMenorQueDez = (n) => {
    return new Promise((resolve, reject) => {
        console.log('Verificando número..');
        
        setTimeout(() => {
            if (n < 10) {
                reject(`Erro: ${n} é menor que 10`);
            } else {
                resolve(`Muito bem, ${n} é igual ou maior que 10`);
            }
        }, 5000);
    });
};

RejeitaMenorQueDez(8)
    .then(console.log)
    .catch(console.log)

// Exercício 3 – Usando .then em cadeia
//Objetivo: Crie uma função que retorna uma Promise com um número e dobre ele usando .then encadeados.

function dobraNumero(n) {
    return new Promise((resolve) => {
        console.log(`Processando o valor ${n}... Aguarde uns instantes.`);
        setTimeout(() => resolve(n), 10000) 
    })
}

dobraNumero(3)
    .then(dobro => dobro*2)
    .then(dobro => dobro*2)
    .then(console.log)

//Exercício 4 – Simulando um carregamento com setTimeout
//Objetivo: Mostrar no console "Carregando...", depois de 3 segundos "Pronto!"

const carregandoPronto = () => {
    return new Promise (resolve => {
        console.log('Carregando...');
        setTimeout(() => resolve('Pronto!'), 3000)
    })
}
carregandoPronto().then(console.log)

//Exercício 5 – Encapsulando uma API falsa
//Objetivo: Criar uma Promise que simula uma requisição de API com setTimeout e retorna dados fictícios.

const cidadeClima = () => {
    return new Promise((resolve, reject) => {
        console.log('Buscando informações sobre o clima da cidade...');

        setTimeout(() => {
            const sucesso = Math.random() > 0.9; // 70% de chance de sucesso
            if (sucesso) {
                resolve({ cidade: 'Curitiba', clima: 'Chuvoso' });
            } else {
                reject('Erro ao buscar os dados do clima.');
            }
        }, 2000);
    });
};

cidadeClima()
    .then(resultado => console.log(`Na cidade ${resultado.cidade} o clima é ${resultado.clima}!`))
    .catch(erro => console.warn(erro)); // console.warn Serve para mostrar avisos ou situações que não causam erro, mas merecem atenção.
    
