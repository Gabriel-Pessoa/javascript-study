const { swap } = require('../utils');
/**
 * O mais famoso algoritmo de embaralhamento, consiste em iterar pelas posições do array, começando pela última posição e trocando
 * a posiçaõ atual por uma posição aleatória. A posição aleatória é menor que a posição atual; desse modo, o algoritmo garante que 
 * as posições já embaralhadas não serão embaralhadas novamente (quanto mais embaralhamos um jogo de baralho, pior será o embara-
 * lhamento)
 */

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        swap(array, i, randomIndex);
    }
    return array;
}

let array = [1, 2, 3, 4, 5];
console.log(shuffle(array));