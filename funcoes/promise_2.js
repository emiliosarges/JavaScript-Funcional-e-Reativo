//Código com calback (conhecido como calback hell)
//Assim que eram os códigos antes de 2015.
setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')
        
        setTimeout(function() {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000);

//==================================================
//Mesmo código usando Promise

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promisse');
            resolve();
        }, tempo);
    });
}

esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
    .then(() => esperarPor())