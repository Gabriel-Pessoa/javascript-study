function gerarNumerosEntre(min, max, tempo) {
    // verificação se entrada foram invertidas.
    if (min > max) [max, min] = [min, max];
    return new Promise(resolve => {
        setTimeout(() => {
            // realizo as alterações necessárias
            const factor = max - min + 1;
            const number = parseInt(Math.random() * factor) + min;
            // envio um valor
            resolve(number);
        }, tempo);
    });
}

// gerando várias promises e executando em sequência
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 600),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 2000),
        new Promise(resolve => {
            setTimeout(() => {
                resolve('Última promise');
            }, 5000);
        }),
    ]);
}

console.time('promise'); // Forma de saber o tempo de execução da promise
// acessando os valores de todas as promises acima, que fica disponível 
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise');
    });