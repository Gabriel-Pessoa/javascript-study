const { defaultCompare, Compare } = require('../cap6-listaLigadas/util');
const { swap, createNonSortedArray } = require('../utils');

// Bubble Sort: Ordenação por flutuação, compara cada dois valores adjacentes e faz a sua troca (swap),
// se o primeiro for maior que o segundo. Considerado um dos piores algoritmos de ordenação em relação ao 
// tempo de execução.
function bubbleSort(array, compareFn = defaultCompare) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) { // compara o valor atual com o adjacente 
                swap(array, j, j + 1); // troca valor atual pelo adjacente
            }
        }
    }
    return array;
}

let array = createNonSortedArray(5);

console.log(array.join());
array = bubbleSort(array);
console.log(array.join());

// Bubble sort melhorado, mesmo assim, possui complexidade O(n²).
// Não recomendado
function modifiedBubbleSort(array, compareFn = defaultCompare) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        // se subtrairmos do laço interno o número de passagens pelo laço externo, evitaremos todas as comparações desnecessárias pelo laço interno
        for (let j = 0; j < length - 1 - i; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}