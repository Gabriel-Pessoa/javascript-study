const { defaultEquals, DOES_NOT_EXIST } = require('../utils');
/**
 * Busca sequencial ou busca linear, é o alrotimo de busca mais básico que existe. Ele consiste em comparar cada elelemento da
 * estrutura de dados com aquele que estamos procurando. É  também o algoritmo mais ineficiente que há.
 */
function sequentialSearch(array, value, equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i;
        }
    }
    return DOES_NOT_EXIST;
}

const array = [5, 4, 3, 2, 1];
console.log(sequentialSearch(array, 3)); // 2