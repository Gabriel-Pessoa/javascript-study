const { defaultCompare, Compare, DOES_NOT_EXIST } = require('../utils');
const { quickSort } = require('./quickSort');

/**
 * Semelhante ao jogo de adivinhação de números: "Estou pensando em um número entre 1 e 100". Começamos respondendo
 * com um número, e a pessoa dirá "é maior", "é menor", ou dirá que acertamos.
 */
function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array); // começa-se ordenando o array

    // definindo ponteiro low e high, que atuarão como fronteiras
    let low = 0; 
    let high = sortedArray.length - 1; 

    // Enquanto low for menor que high ({4}) - nesse caso, se low for maior que high, é sinal de que o valor não existe
    // , portanto, devolveremos -1 ({12})-, encontramos o índice do meio ({5}) e, assim, teremos o seu valor ({6}). Então
    // começaremos a comparar se o valor selecionado é menor que o vale que estamos procurando ({7}); nesse aso, devemos
    // verificar os valores maiores ({8}) e recomeçar. Se o valor selecionado for maior que o value que estamos procurando
    // ({9}), devemos verificar os valores menores ({10}) e recomeçar. Caso contrário, é sinal de que o valor é igual ao value 
    // que estamos procurando e, portanto, devolveremos o seu índice ({11}).
    while (lesserOrEquals(low, high, compareFn)) {
        const mid = Math.floor((low + high) / 2); // {4}
        const element = sortedArray[mid]; // {5}

        if (compareFn(element, value) === Compare.LESS_THAN) { // {7}
            low = mid + 1; // {8}
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) { // {9}
            high = mid - 1; // {10}
        } else {
            return mid; {11}
        }
    }

    return DOES_NOT_EXIST; // {12}
}

function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

const array = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(binarySearch(array, 2));