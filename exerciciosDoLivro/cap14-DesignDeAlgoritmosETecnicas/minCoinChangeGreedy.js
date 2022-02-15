/**
 * Algoritmo guloso: são simples de implementar, além de serem mais rápidos que os algoritmos de programação dinâmica.
 * No entanto, como podemos notar, eles nem sempre fornecem a resposta ideal. Entretantom na média, uma solução aceitável
 * será gerada, considerando o tempo consumido na execução
 */
function minCoinChangeGreedy(coins, amount) {
    const change = [];
    let total = 0;
    for (let i = coins.length; i >= 0; i--) { // {1}
        const coin = coins[i];
        while (total + coin <= amount) { // {2}
            change.push(coin); // {3}
            total += coin; // {4}
        }
    }
    return change;
}
/**
 * Para cada coin ({1}, começando do maior para o menor), somamos o valor de coint em total, e total deverá ser menor que
 * amount ({2}). Adicionamos coin ao resultado ({3}) e somamos também em total ({4}). 
 */

// Test
console.log(minCoinChangeGreedy([1, 5, 10, 25], 36)); // comparar com ./minCoinChange.js (o resulto é igual; porém a solução não é encontrada de forma ideal)
console.log(minCoinChangeGreedy([1, 3, 4], 6)); // comparar com ./minCoinChange.js (o resultado é diferente; esse algoritmo não é o ideal para esses casos)