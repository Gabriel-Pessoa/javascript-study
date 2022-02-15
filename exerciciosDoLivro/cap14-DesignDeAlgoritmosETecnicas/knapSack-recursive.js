function knapSack(capacity, weights, values, n) {
    if (n === 0 || capacity === 0) {
        return 0;
    }

    if (weights[n - 1] > capacity) {
        return knapSack(capacity, weights, values, n - 1);
    }

    const a = values[n - 1] + knapSack(capacity - weights[n - 1], weights, values, n - 1);
    const b = knapSack(capacity, weights, values, n - 1);

    return a > b ? a : b;
}

// Test
const values = [3, 4, 5],
    weights = [2, 3, 4],
    capacity = 5,
    n = values.length;

console.log(knapSack(capacity, weights, values, n));