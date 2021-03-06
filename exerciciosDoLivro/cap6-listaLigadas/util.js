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
    LESS_THAN:  -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

module.exports = { defaultEquals, Node, Compare, defaultCompare };