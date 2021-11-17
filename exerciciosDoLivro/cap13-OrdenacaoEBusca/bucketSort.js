const { insertionSort } = require('./insertionSort');

/**
 * Bucket Sort / Bin Sort: ordenação por balde ou recipiente, é um algoritmo de ordenação com distribuição que separa os elementos
 * em diferentes buckets (arrays menores) e então usa um algoritmo de ordenação mais simples, por exemplo o insertion sort (um bom algoritmo de 
 * array pequenos) para ordenar um bucket. Precisamos especificar quantos buckets serão usados para ordenar os elementos, por padrão iremos usar 5 buckets.
 * O algoritmo executará em seu melhor cenário: se os elementos estiverem alocados de forma densa, usar menos buckets será melhor. Se estiverem muito esparsos,
 * será melhor mais buckets.
 */
function bucketSort(array, bucketSize = 5) {
    if (array.length < 2) {
        return array;
    }

    // criar os buckets e distribuir os elementos
    const buckets = createBuckets(array, bucketSize);
    // executamos o insertion sort em cada bucket e add todos os elementos do bucket no array ordenado resultante.
    return sortBuckets(buckets);
}

function createBuckets(array, bucketSize) {
    let minValue = array[0];
    let maxValue = array[0];

    // iterar pelo mesmo array original e encontrar os valores máximo e mínimo
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    // calcular quantos elementos serão distribuídos em cada bucket
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];

    // inicializar cada bucket. A estrutura de dados do buckets é uma matriz, cada posição armazenará outro array. 
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }

    // distribuir os elementos nos buckets, iterando pelos elementos do array.
    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize); // calcular em qual bucket colocaremos o elemento
        buckets[bucketIndex].push(array[i]); // inserir o elemento no bucket correto
    }

    return buckets;
}

function sortBuckets(buckets) {
    const sortedArray = []; // criamos um array, significa que o array original não será modificado

    // iteramos por cada bucket válido e aplicamos o insertion sort - poderia ser outro algoritmos, como quick sort
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertionSort(buckets[i]);
            sortedArray.push(...buckets[i]); // add todos os elementos do bucket ordenado no array ordenado
        }
    }

    return sortedArray;
}

let array = [5, 4, 3, 2, 6, 1, 7, 10, 9, 8];
array = bucketSort(array);
console.log(array.join());
