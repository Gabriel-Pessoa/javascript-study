const { findMaxValue, findMinValue } = require('../utils');

/**
 * Radix Sort, ordenação por raízes, algoritmo por distribuição que distribui os inteiros em buckets com base no dígito ou valor significativo 
 * de um número (a raiz). A raiz é baseada no sistema numérico dos valores dos arrays. Por exemplo, para os números do sistema decimal, a raiz (ou base) 
 * 10 é usada; assim o algoritmo usará 10 buckets para distribuir elementos, e ordenará inicialmente os números com base nos 1s, depois nos 10s, 
 * depois nos 100s, e assim por diante. 
 */
function radixSort(array, radixBase = 10) {
    if (array.length < 2) {
        return array;
    }

    const minValue = findMinValue(array);
    const maxValue = findMaxValue(array);
    let significantDigit = 1; // começa a ordenar com base no último dígito

    while ((maxValue - minValue) / significantDigit >= 1) { // Fará a iteração até que não tenha mais dígitos significativos
        array = countingSortForRadix(array, radixBase, significantDigit, minValue);
        significantDigit *= radixBase; // ordena com no último dígito significativo: na segundo iteração será 10s, na terceira será 100s, e assim sucessivamente.
    }

    return array;
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex;
    const buckets = [];
    const aux = [];

    // iniciamos os buckets de acordo com a base da raiz.
    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }

    // Faremos uma ordenação por contagem ({8}) com base no dígito significativo dos números ({7}) que estão no array ({6}).
    for (let i = 0; i < array.length; i++) { // {6}
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {7}
        buckets[bucketsIndex]++; // {8}
    }

    // Como estamos executando um counting sort, também devemos calcular os contadores para que tenhamos a contagem correta
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }

    // Para cada valor do array original ({10}), obteremos novamente o seu dígito significativo ({11}) e moveremos o seu valor
    // para o array aux (subtraindo o contador do array buckets - {12})
    for (let i = array.length - 1; i >= 0; i--) { // {10}
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase); // {11}
        aux[--buckets[bucketsIndex]] = array[i]; // {12}
    }

    // o último passo é opcional, quando transferimos todos os valores do array aux para o array original.
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i];
    }

    return array;
}

let array = [4, 5, 6, 7, 8, 9, 1, 2, 3];
array = radixSort(array);
console.log(array.join());