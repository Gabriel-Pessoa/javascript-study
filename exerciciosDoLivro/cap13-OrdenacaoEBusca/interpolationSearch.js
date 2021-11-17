const { defaultCompare, defaultEquals, Compare, defaultDiff, DOES_NOT_EXIST } = require('../utils');

/**
 * Busca por Interpolação, é uma variação melhorada da busca binária. Enquanto a busca binário sempre verifica o valor da posição do meio (mid),
 * a busca por interpolação pode verificar lugares diferentes do array, dependendo do valor procurado. Para fazer o algoritmo funcionar, a estrutura
 * de dados deve ser ordenada antes.
 * 1. Um valor é selecionado usando a fórmula de position
 * 2. Se o valor for aquele que estamos procurando, é um sinal de que terminamos (value foi encontrado)
 * 3. Se o valor (value) que estamos procurando for menor que o valor selecionado, retornaremos ao passo 1 usando o subarray à esquerda (inferior)
 * 4. Se o valor (value) que estamos procurando for maior que o valor selecionado, retornaremos ao passo 1 usando o subarray à direita (superior)
 */
function interpolationSearch(array, value,
    compareFn = defaultCompare,
    equalsFn = defaultEquals,
    diffFn = defaultDiff
) {
    const { length } = array;
    let low = 0;
    let high = length - 1;
    let position = -1;
    let delta = -1;

    while (
        low <= high &&
        biggerOrEquals(value, array[low], compareFn) &&
        lesserOrEquals(value, array[high], compareFn)
    ) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low]); // esse algoritmo funcionará melhor se as instâncias dos valores estiverem bem distribuídas
        position = low + Math.floor((high - low) * delta); // calcular o position com o qual o valor será 

        if (equalsFn(array[position], value)) { // se valor encontrado, devolveremos o índice 3
            return position;
        }

        // Caso contrário, se valor na posição atual for menor que o value procurado, repetiremos a lógica usando o subarray à direita; caso contrário,
        // usaremos o subarray à esquerda
        if (compareFn(array[position], value) === Compare.LESS_THAN) {
            low = position + 1;
        } else {
            high = position - 1;
        }

        return DOES_NOT_EXIST;
    }
}

function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

function biggerOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(interpolationSearch(array, 4));