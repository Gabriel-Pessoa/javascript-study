class Node {
    constructor(key) {
        this.key = key;
        this.left = null; //por padrão: menor valor
        this.right = null; // por padrão: maior valor
    }
}

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
};

const Colors = {
    RED: 0,
    BLACK: 1
};

// criando nó específico para árvore RedBlack
class RedBlackNode extends Node {
    constructor(key) {
        super(key);
        //this.key = key; // herdando atributo da classe pai

        //add atributos na classe filho (atual)
        this.color = Colors.RED; //por padrão a cor é vermelha; mais comum.
        this.parent = null;
    }

    isRed() {
        return this.color === Colors.RED;
    }
}


module.exports = { Node, BalanceFactor, Colors, RedBlackNode };