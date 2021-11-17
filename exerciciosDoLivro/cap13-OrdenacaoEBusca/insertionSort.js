const { defaultCompare, Compare } = require("../utils");

// Insertion Sort: ordenação por inserção, constrói o array ordenado final, um valor de cada vez. Ele pressupõe que o primeiro elemento já
// ordenado. Então, uma comparação com o segundo valor é realizada. Os dois primeiros valores serão ordenados; em seguida, a comparação será feita
// com o terceiro valor, e assim sucessivamente. Esse algoritmo tem desempenho melhor que os algoritmos selection e bubble sort.
function insertionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let temp;

    for (let i = 1; i < length; i++) {
        let j = i; // variável auxiliar
        temp = array[i]; // variável temporária, para ser acessada depois posicionando corretamente

        // j > 0: primeiro índice do array é zero e não há índices negativos 
        while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1]; // deslocamos o valor anterior para a posição atual
            j--;
        }
        array[j] = temp;
    }
    return array;
}

let array = [3, 5, 1, 4, 2];
array = insertionSort(array);
console.log(array.join());

module.exports = { insertionSort };