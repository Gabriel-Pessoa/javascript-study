function gerarNumerosEntre(min, max) {
    // verificação se entrada foram invertidas.
    if (min > max) [max, min] = [min, max];
    return new Promise(resolve => {
        // realizo as alterações necessárias
        const factor = max - min + 1;
        const number = parseInt(Math.random() * factor) + min;

        // envio um valor
        resolve(number);
    });
}

gerarNumerosEntre(1, 60)
// A cada chamada do then eu posso realizar um alteração no valor que fica disponível na chamada seguinte.
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)