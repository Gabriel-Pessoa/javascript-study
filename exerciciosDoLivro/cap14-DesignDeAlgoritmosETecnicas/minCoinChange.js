/**
 * Problema do número mínimo de moedas para troco. Consiste em descobrir de quantas maneiras
 * podemos dar um troco em moedas de centavos.
 */
function minCoinChange(coins, amount) {
    const cache = []; // Técnica memoização. Para ser mais eficiente e evitar ter de recalcular os valores

    // função recursiva
    const makeChange = (value) => {
        // se amount não for positivo, devolveremos um array vazio
        if (!value) {
            return [];
        }

        // se o resultado já estiver no cache, só devolveremos seu valor;
        // caso contrário, executaremos o o algoritmo
        if (cache[value]) {
            return cache[value];
        }

        let min = [];
        let newMin;
        let newAmount;

        // para cada coin ({5}), calcularemos newAmount({6}), que decrementará value
        // até alcançarmos a quantidade mínimo de troco que podemos dar (lembrar que esse algoritmo
        // calculará todos os resultados para x < amount). Se newAmount for um valor válido (positivo), 
        // calcularemos também o resultado para ele ({7})
        for (let i = 0; i < coins.length; i++) { // {5}
            const coin = coins[i];
            newAmount = value - coin; // {6}
            if (newAmount >= 0) {
                newMin = makeChange(newAmount); // {7}
            }

            // verificamos se newAmmount é válido, se newMin (a quant. mínimas de moedas) é o melhor resultado
            // e se new newMin e newAmount são válidos ({10}). Se todas as verificações forem positivas é sinal
            // de que temos um resultado melhor que o anterior ({11}; por exemplo, para 5 centavos, podemos dar 5
            // moedas de 1 centavo ou 1 moeda de 5 - 1 moeda de 5 é a melhor solução). Por fim, devolvemos o 
            // resultado definitivo ({12}).
            if (
                newAmount >= 0 && // {8}
                (newMin.length < min.length - 1 || !min.length) && // {9}
                (newMin.length || !newAmount) // {10}
            ) {
                min = [coin].concat(newMin); // {11}
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[value] = min); // {12}
    }
    // devolveremos um array com quant. de cada moeda que poderá ser usada para compor o troco
    return makeChange(amount);
}

// console.log(minCoinChange([1, 5, 10, 25], 36));
console.log(minCoinChange([1, 3, 4], 6));