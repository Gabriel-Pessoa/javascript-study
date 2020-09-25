const { reject } = require("lodash");

function gerarNumerosEntre(min, max, numerosProibidos) {
    // verificação se entrada foram invertidas.
    if (min > max) [max, min] = [min, max];
    return new Promise((resolve, reject) => {
        const factor = max - min + 1;
        const aleatorio = parseInt(Math.random() * factor) + min;
        if (numerosProibidos.includes(aleatorio)) {
            reject('Números repetidos!');
        } else {
            resolve(aleatorio);
        }
    });
}


async function gerarMegaSena(qtdNums, tentivas) {
    // A forma de rejeitar uma Async Function é lançando um erro,
    // A forma de aceitar é retornando um valor
    try {
        const numeros = [];
        for (let _ of Array(qtdNums).fill()) {
            // CUIDADO com a palavra reservada await!!!
            numeros.push(await gerarNumerosEntre(1, 60, numeros));
        }
        return numeros; // retornando um valor para resolver a promise
    } catch (e) {
        if(tentivas > 10) {
            // Laçando um erro para recusar uma promise
            throw "Que chato!" 
        } else {
            // recurssão
            gerarMegaSena(qtdNums, tentivas + 1);
        }
        
    }

}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)