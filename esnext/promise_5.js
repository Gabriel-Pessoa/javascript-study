function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!');
        } else {
            resolve(valor);
        }

        /*Consigo passar um try / catch dentro da promessa, caso não consiga acessar um valor disponível 
            try {
                consol.log('temp') // forçando um erro para cair no catch
                if (Math.random() < chanceErro) {
                    reject('Ocorreu um erro!');
                } else {
                    resolve(valor);
                }
            } catch(e) {
                reject(e);
            }
        
        */
    });
}

/* caso a promessa trate erros internamente com try/catch, irá cair no primeiro tratamento de erro que encontrar,
pode ser dentro de um then ou um catch. E os valores ficam indisponíveis na próxima chamada também.*/
funcionarOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        // na chamada do then eu consigo passar um segundo argumento para tratar o erro específico desse then.
        // E ele não cai no catch, pois o erro foi tratado internamento no then
        // Os valores ficam indisponíveis na próxima chamada
        err => console.log(`Erro específ.: ${err}`)
    )
    .catch(console.log)
    //Depois que uma promessa cai no catch, a próxima chamada de then fica sem valor podendo fazer ainda alguma lógica
    .then(() => console.log('Fim!'))  