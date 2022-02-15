const { defaultCompare, Compare, DOES_NOT_EXIST } = require('../utils');
const { quickSort } = require('../cap13-OrdenacaoEBusca/quickSort');

/**
 Implementa a abordagem de dividir e conquistar: divide o problema em subproblemas independentes e então
 combina as soluções
 */
function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = array[mid];

        // Verificamos se esse elemento da linha 8 é menor ou maior. Se for menor {1} ou maior {2}
        if (compareFn(element, value) === Compare.LESS_THAN) { // {1}
            return binarySearchRecursive(array, value, mid + 1, high, compareFn);
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) { // {2}
            return binarySearchRecursive(array, value, low, mid - 1, compareFn);
        } else { // se não for menor nem maior, é sinal de que encontramos o valor
            return mid;
        }
    }

    return DOES_NOT_EXIST; // se low é maior que high, o algoritmo não encontrou o valor
}

function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array);
    const low = 0;
    const high = sortedArray.length - 1;
    return binarySearchRecursive(array, value, low, high, compareFn);
}

// let array = [8, 7, 6, 5, 4, 3, 2, 1];
// console.log(binarySearch(array, 2));

module.exports = { binarySearch };