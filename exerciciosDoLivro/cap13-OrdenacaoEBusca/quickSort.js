const { defaultCompare, Compare, swap } = require('../utils');

/**
 * Quick Sort: ordenação rápida, provavelmente o algoritmo de ordenação mais usado. Tem complexidade O(n log n), e geralemente apresenta
 * um desempenho melhor que outros algoritmos de ordenação de mesma complexidade. Parecido com o merge sort em alguns aspectos. Um pouco mais
 * complexo que os outros. 
 */
function quickSort(array, compareFn = defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn);
}

function quick(array, left, right, compareFn) {
    // variável que ajudará a separar o subarray em valores menores e maiores para que possamos chamar novamente a função quick recursivamente
    let index;

    // se o tamanho do array for maior que 1 (porque um array com um único elemento já estará ordenado)
    if (array.length > 1) {
        // executaremos a operação partition no subarray especificado (o array completo será passado na primeira chamada) a fim de obter 
        index = partition(array, left, right, compareFn);

        // se houver um subarray com valores com elementos menores, repetiremos o processo para esse subarray
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn);
        }

        // se houver um subarray com valores com elementos maiores, repetiremos o processo para esse subarray
        if (index < right) {
            quick(array, index, right, compareFn);
        }
    }
    return array;
}

function partition(array, left, right, compareFn) {
    const pivot = array[Math.floor((right + left) / 2)]; // selecionamos o item do meio como pivot

    // inicializamos os dois ponteiros:
    let i = left; // com o primeiro elemento do array
    let j = right; // com o último elemento do array

    // enquanto os ponteiros left e right não se cruzarem...
    while (i <= j) {
        // deslocaremos o ponteiro left até encontrarmos um elemento que seja maior que pivot
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++;
        }

        // deslocaremos o ponteiro right até encontrarmos um elemento que seja menor que pivot
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }

        // quando o ponteiro left for maior que o pivot e o ponteiro right menor que o pivot...

        // comparamos se o índice do ponteiro left é maior que o índice do ponteiro right
        // ou seja, valor a esquerda maior que o da direita 
        if (i <= j) {
            swap(array, i, j); // trocamos os valores

            // fazemos os ponteiros serem deslocados
            i++;
            j--;
        }

        // repetimos o processo
    }

    // no final da operação, devolvemos o índice do ponteiro esquerdo, que será usado para criar subarrays.
    return i;
}

let array = [3, 5, 1, 6, 4, 7, 2];
array = quickSort(array);
console.log(array.join());

module.exports = { quickSort };