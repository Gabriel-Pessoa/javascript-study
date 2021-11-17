const { defaultCompare, Compare, swap, createNonSortedArray } = require('../utils');

// Selection Sort: ordenação por seleção, é um algoritmo de ordenação por comparação in-place. A idea geral por trás do selection sort
// é encontrar o valor mínimo na estrutura de dados, colocá-lo na primeira posição e então encontrar o segundo valor mínimo, colocá-lo
// no segundo valor mínimo, e assim sucessivamente. Complexidade O(n²)
function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let indexMin;

    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin);
        }
    }
    return array;
}

let array = createNonSortedArray(5);
console.log(array);
array = selectionSort(array);
console.log(array.join());