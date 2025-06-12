function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp') // simulação de erro. Vai chamar primiero tratamento de erro que encontrar. 
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(                                //Não é recomendado, mas é possível tratar erro dentro do then
        v => conso.log(v),
        err => console.log(`Erro Esp: ${err}`)
    )
    .then(console.log('Quase fim!'))
    .catch(err => console.log(`Erro: ${err}`)) //via de regra o catch fica no final
    .then(() => console.log('Fim!')) 
    