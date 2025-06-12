let promessa = new Promise((resolve, reject) => {
    let numero = Math.random();

    if (numero > 0.5) {
        resolve("Número alto: " + numero);
    } else {
        reject("Número baixo: " + numero);
    }
});

promessa
    .then(resposta => console.log("THEN:", resposta))   // Quando resolve
    .catch(erro => console.log("CATCH:", erro));        // Quando reject
