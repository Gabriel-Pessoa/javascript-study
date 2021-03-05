class Node {
    constructor(key) {
        this.key = key;
        this.left = null; //por padrão: menor valor
        this.right = null; // por padrão: maior valor
    }
}


module.exports = { Node };