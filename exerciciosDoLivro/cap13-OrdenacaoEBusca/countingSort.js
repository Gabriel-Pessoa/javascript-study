const { createNonSortedArray, findMaxValue } = require('../utils');

/**
 * Counting Sort: ordenação por contagem, algoritmo de ordenação com distribuição. Usa estruturas de dados auxiliares (buckets), que são
 * organizadas e então combinadas, resultando no array ordenado. É um bom algoritmo para ordenar inteiros com complexidade O(n+k), em que k 
 * é o tamanho do array temporário de contagem; no entanto, mais memória será necessária para o array temporário.
 */
function countingSort(array) {
    // se o array tiver um ou nenhum elemento, não haveŕa necessidade de executar o algoritmo
    if (array.length < 2) {
        return array;
    }

    const maxValue = findMaxValue(array); // encontrando valor máximo do array
    const counts = new Array(maxValue + 1); // array de contadores, começando em índice 0 até índice do valor máximo + 1

    // iteramos pelas posições do array 
    array.forEach(element => {

        // para garantir que o incremento funcionará, na primeira vez que contabilizamos, atribuímos o valor zero
        if (!counts[element]) {
            counts[element] = 0;
        }

        // incrementamos o contador do elemento no array counts
        counts[element]++;
    });

    let sortedIndex = 0; // índice auxiliar para nos ajudar a atribuir os valores aos seus índices corretos no array ordenado resultante

    // iteramos pelo array counts
    counts.forEach((count, i) => {
        // construímos o array ordenado resultante
        while (count > 0) {
            array[sortedIndex++] = i;

            // como pode haver mais de um elemento com o mesmo valor, decrementamos count até que seu valor seja
            // zero
            count--;
        }
    });

    return array;
}



let array = createNonSortedArray(5);
console.log(array.join());

array = countingSort(array);
console.log(array.join());
