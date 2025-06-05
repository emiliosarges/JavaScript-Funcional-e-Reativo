const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');



function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString());
    
}

console.log('Iníco');
fs.readFile(caminho, exibirConteudo);
//outra forma de fazer passando a funcão dentro do parâmetro:
fs.readFile(caminho, (err, conteudo) => console.log(conteudo.toString()));
console.log('Fim');


//sem callback:
console.log('Início Sync...');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync...');
