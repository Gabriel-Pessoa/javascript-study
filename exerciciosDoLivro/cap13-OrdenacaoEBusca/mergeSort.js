const { defaultCompare, Compare, createNonSortedArray } = require('../utils');

/**
 *  Merge Sort: ordenação por intercalação ou mistura, é o primeiro algoritmo de ordenação que pode ser usado em 
 * um cenário do mundo real. Tem complexidade O(n log n).
 *  O merge sort é um algoritmo do tipo "dividir e conquistar". Divide o array original em arrays menores até que 
 * cada array menor tenha apenas uma posição e, em seguida, combinar esses arrays menores em arrays maiores até que 
 * tenhamos um único array grande e ordenado final.
 */
function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) {
        const { length } = array;
        const middle = Math.floor(length / 2);
        const left = mergeSort(array.slice(0, middle), compareFn);
        const right = mergeSort(array.slice(middle, length), compareFn);
        array = merge(left, right, compareFn);
    }
    return array;
}

function merge(left, right, compareFn) {
    // variáveis para iterar pelos arrays left e right
    let i = 0;
    let j = 0;

    const result = []; // criado para a combinação dos arrays left e right

    while (i < left.length && j < right.length) {
        result.push(
            // comparamos se o valor do array left é menor que o valor do array right, adicionando ao array result
            compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
        );
    }

    // adicionamos todos os valores restantes do array left no array com os resultado combinados
    // fazemos o mesmo com o array right
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

let array = createNonSortedArray(8);
console.log(array.join());

array = mergeSort(array);
console.log(array.join());