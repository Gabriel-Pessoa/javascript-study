function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
 }

 
function defaultEquals(a, b) {
    return a === b;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined; //ponteiro
    }
}

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

const Colors = {
    WHITE: 0, // vértice não visitado (not visited)
    GREY: 1, // vértice visitado, mas não explorado (visited, but not explored yet)
    BLACK: 2 // vértice foi totalmente explorado
};

const initializeColor = vertices => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
}

function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]];
}

function createNonSortedArray(size) {
    const array = [];
    for (let i = size; i > 0; i--) {
        array.push(i);
    }
    return array;
}

function findMaxValue(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

const DOES_NOT_EXIST = -1;

function findMinValue(array) {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

function defaultDiff(a, b) {
    return Number(a) - Number(b);
}

module.exports = {
    reverseCompare,
    defaultDiff, defaultEquals, Node, Compare, defaultCompare,
    Colors, initializeColor,
    swap, createNonSortedArray, findMaxValue, findMinValue, DOES_NOT_EXIST,
};
