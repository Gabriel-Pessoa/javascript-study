/**
 * Problema fracionário da mochila. Enquanto o total load for menor que capacity (não podemos carregar mais que capacity),
 * iteramos pelos itens({1}). Se pudermos usar o peso total do item ({2} - é menor ou igual a capacity), ele será adicionado
 * ao valor (val) e atualizaremos a carga atual da mochila em load. Se não for possível usar o peso total do item, calcularemos
 * qual é a fração (r) que podemos usar ({3} - a fração que podemos carregar).
 */
function knapSackGreedy(capacity, weights, values) {
    const n = values.length;
    let load = 0;
    let val = 0;
    for (let i = 0; i < n && load < capacity; i++) { // {1}
        if (weights[i] <= capacity - load) { // {2}
            val += values[i];
            load += weights[i];
        } else {
            const r = (capacity - load) / weights[i]; // {3}
            val += r * values[i];
            load += weights[i];
        }
    }
    return val;
}

// Test
const values = [3, 4, 5],
    weights = [2, 3, 4],
    capacity = 5;

console.log(knapSackGreedy(capacity, weights, values));