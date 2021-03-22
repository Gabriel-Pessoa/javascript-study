function swap(array, a, b) {
   [array[a], array[b]] = [array[b], array[a]]; // atribuição via destructuring
}

module.exports = { swap };