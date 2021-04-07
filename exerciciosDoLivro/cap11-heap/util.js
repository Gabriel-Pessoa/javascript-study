function swap(array, a, b) {
   [array[a], array[b]] = [array[b], array[a]]; // atribuição via destructuring
}

function reverseCompare(compareFn) {
   return (a, b) => compareFn(b, a);
}

module.exports = { swap, reverseCompare };