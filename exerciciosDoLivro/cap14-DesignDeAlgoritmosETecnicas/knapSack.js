/**
 * Um problema de otimização combinatória. Ele pode ser descrito assim: dada uma mochila de tamanho fixo
 * com capacidade para carregar um peso W e um conjunto de itens que têm um valor e um peso, encontre a 
 * melhor solução de moda a encher a mochila com os itens mais valiosos e que o peso total seja menor ou igual a W
 */
function knapSack(capacity, weights, values, n) {
    const kS = [];

    // Inicializamos a matriz que será usada para encontrar a solução 
    for (let i = 0; i <= n; i++) {
        kS[i] = []; // kS[n+1][capacity+1]
    }

    // ignoramos a primeira coluna e linha da matriz, para que possamos trabalhar com índice diferente de 0 ({2})
    // O item i só poderá fazer parte da solução se o seu peso for menor que a limitação (capacity, {3});
    // caso contrário, o peso total será maior que capacity, e isso não pode acontecer ({5})
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) { // {2}
                kS[i][w] = 0;
            } else if (weights[i - 1] <= w) { // {3}
                const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
                const b = kS[i - 1][w];
                kS[i][w] = a > b ? a : b; // max(a, b) valor máximo
            } else {
                kS[i][w] = kS[i - 1][w]; // {5}
            }
        }
    }

    findValues(n, capacity, kS, weights, values); // código adicional
    
    // A solução poderá ser encontrada na última célula da tabela bidimensional, que está no canto inferior da tabela
    return kS[n][capacity];
}

function findValues(n, capacity, kS, weights, values) {
    let i = n;
    let k = capacity;
    console.log('Items that are part of the solution:');
    while (i > 0 && k > 0) {
        if (kS[i][k] !== kS[i - 1][k]) {
            console.log(`item ${i} can be part of solution w,v: ${weights[i - 1]} , ${values[i - 1]}`);
            i--;
            k -= kS[i][k];
        } else {
            i--;
        }
    }
}

// Test
const values = [3, 4, 5],
    weights = [2, 3, 4],
    capacity = 5,
    n = values.length;

console.log(knapSack(capacity, weights, values, n));
