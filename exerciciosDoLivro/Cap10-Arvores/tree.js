const { Node, BalanceFactor, Colors, RedBlackNode } = require('./util');
const { Compare, defaultCompare } = require('../utils');


class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null; // nó raiz, parecido com o padrão head da lista ligada
    }

    // insere nova chave na árvore
    insert(key) {

        if (this.root == null) { // root === null || root === undefined (primeira inserção)
            this.root = new Node(key);
        } else { // qualquer posição que não seja root
            this.insertNode(this.root, key); //método auxiliar
        }
    }

    // método auxiliar para inserir novos nós; deveria ser privado
    insertNode(node, key) {
        // condição para captura menor valor.
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) { //insere menor valor por padrão no lado esquerdo da key (nó)
            //se lado esquerdo da key estiver desocupado, insira
            if (node.left == null) {
                node.left = new Node(key);
            } else { // se estiver ocupado, entre nesse key e repita o processo refazendo todas as validações.
                this.insertNode(node.left, key);
            }

        } // maior valor
        else { //insere maior valor por padrão no lado direito da key (nó)
            //se lado direito da key estiver desocupado, insira
            if (node.right == null) {
                node.right = new Node(key);
            } else { // se estiver ocupado, entre nesse key e repita o processo refazendo todas as validações.
                this.insertNode(node.right, key);
            }

        }
    }

    //busca chave na árvore devolvendo um bool caso exista ou não
    search(key) {
        return this.searchNode(this.root, key);
    }

    // método auxiliar que recebe nó root da árvore para colocar encontrar valor na árvore; deveria ser privado
    searchNode(node, key) {

        if (node == null) { //Verificação, se a chave for inválida ou null é sinal que não foi encontrada
            return false;
        }

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }
        else {
            return true;
        }
    }

    // visita todos os nós usando um percurso em-ordem
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    // método auxiliar que recebe nó root da árvore para colocar em orde,; deveria ser privado
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // visita todos os nós usando um percurso pre-ordem
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    // método auxiliar que recebe nó root da árvore para colocar em pré-ordem; deveria ser privado
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    // visita todos os nós usando um percurso pós-ordem
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }

    // método auxiliar que recebe nó root da árvore para colocar em pós-ordem; deveria ser privado
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    //devolve chave/valor mínimo da árvore
    min() {
        return this.minNode(this.root);
    }

    // método auxiliar que recebe nó root da árvore para devolver o valor mínimo na árvore; deveria ser privado
    minNode(node) {
        /* Opção 1
        if (node.left == null) {
            return node;
        } else {
            return this.minNode(node.left); // Sem o return no início perdemos a referência do nó, retornando undefined
        }
        */

        // Opção 2 (Mais perfomático por se trata de estrutura de repetição)
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    //devolve chave/valor máximo da árvore
    max() {
        return this.maxNode(this.root);
    }

    // método auxiliar que recebe nó root da árvore para devolver o valor máximo na árvore; deveria ser privado
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    //remove uma chave da árvore
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }

    // método auxiliar que recebe nó root da árvore para remover uma key na árvore; deveria ser privado
    removeNode(node, key) {

        if (node == null) {
            return null;
        }

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else { // key é igual a node.key
            // caso 1 
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            // caso 2
            if (node.left == null) {
                node = node.right;
                return node;
            }
            else if (node.right == null) {
                node = node.left;
                return node;
            }
            // caso 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(3);
tree.insert(2);
tree.insert(1);

const printNode = value => console.log(value);
tree.inOrderTraverse(printNode);
console.log('-----------------');
tree.preOrderTraverse(printNode);
console.log('-----------------');
tree.postOrderTraverse(printNode);

// console.log(tree.min());
// console.log(tree.max());

// console.log(tree.search(1) ? 'Chave 1 encontrada' : 'Chave 1 não encontrada');
// console.log(tree.search(8) ? 'Chave 8 encontrada' : 'Chave 8 não encontrada');

//caso1 remoção
// console.log(tree.search(6) ? 'Chave 6 encontrada' : 'Chave 6 não encontrada');
// tree.remove(6);
// console.log(tree.search(6) ? 'Chave 6 encontrada' : 'Chave 6 não encontrada');

//caso2 remoção
// console.log(tree.search(5) ? 'Chave 5 encontrada' : 'Chave 5 não encontrada');
// tree.remove(5);
// console.log(tree.search(5) ? 'Chave 5 encontrada' : 'Chave 5 não encontrada');
// console.log(tree.search(3) ? 'Chave 3 encontrada' : 'Chave 3 não encontrada');

//caso3 remoção
// console.log(tree.search(15) ? 'Chave 15 encontrada' : 'Chave 15 não encontrada');
// tree.remove(15);
// console.log(tree.search(15) ? 'Chave 15 encontrada' : 'Chave 15 não encontrada');


// Classe árvore autobalanceada. 
// Tenta sempre balancear assim que um nó é add ou rem.
// Ideal para operações de buscas (inserções e remoções são menos frequente).
class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);

        // Sobrescrevendo atributos
        // this.compareFn = compareFn;
        //this.root = null;
    }

    //inserir nó (key) na árvore
    insert(key) {
        this.root = this.insertNode(this.root, key);
    }

    // método auxiliar para add key a árvore; deveria ser privado
    insertNode(node, key) {

        if (node == null) {  // primeiro nó
            return new Node(key);
        } // qualquer posição que não seja root
        else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        }
        else {
            return node; // chave duplicada
        }

        // balanceia a árvore, se for necessário
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node);
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node);
            }
        }

        return node;
    }

    // calcular a altura de um nó
    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }

        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1;
    }

    // calcula o fator de balanceamento de um nó
    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    // método auxiliar para rotacionar simples à direita; deveria ser privado
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    // método auxiliar para rotacionar simples à esquerda; deveria ser privado
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    // método auxiliar para rotacionar dupla à direita; deveria ser privado
    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    // método auxiliar para rotacionar dupla à esqueda; deveria ser privado
    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }
}


// Árvore rubronegra. 
// Ideal para muitas inserções. 
class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);

        // herdando atributos da classe pai
        // this.compareFn = compareFn;
        //this.root = null;
    }

    // Sobrescrevendo método da classe pai
    insert(key) {
        if (this.root == null) { // árvore vazia
            this.root = new RedBlackNode(key); // primeira key
            this.root.color = Colors.BLACK; // de acordo com a regra o primeiro nó é preto
        } else {
            const newNode = this.insertNode(this.root, key); // inserção recursiva
            this.fixTreeProperties(newNode); // verifica a árvore para ver se as regras estão sendo respeitadas
        }
    }

    //Sobrescrevendo método auxiliar da classe pai
    // método auxiliar para inserir key; deveria ser privado
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node; // mantendo uma referência ao pai do nó inserido
                return node.left; // para verificar as propriedades em seguida
            } else {
                return this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node; // mantendo uma referência ao pai do nó inserido
            return node.right; // para verificar as propriedades em seguida
        }
        else {
            return this.insertNode(node.right, key);
        }

    }

    fixTreeProperties(node) {
        while (node && node.parent
            && node.parent.color === Colors.RED
            && node.color !== Colors.BLACK) {

            let parent = node.parent; // pai
            const grandParent = parent.parent; // avô

            // caso A: o pai é o filho à esquerda
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right;

                // caso 1A: tio do nó é vermelho - recolorir
                if (uncle && uncle.isRed()) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                }
                else {
                    // caso 2A: nó é o filho à direita - rotação à esquerda
                    if (node === parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // caso 3A: nó é o filho à esquerda - rotação à direita
                    this.rotationLL(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }

            } else { // caso B: o pai é o filho à direita

                const uncle = grandParent.left; // tio

                // caso 1B: o tio é vermelho - recolorir
                if (uncle && uncle.isRed()) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                }
                else {
                    // caso 2B: o nó é o filho à esquerda - rotação à direita
                    if (node === parent.left) {
                        this.rotationLL(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // caso 3B: o nó é o filho à direita - rotação à esquerda
                    this.rotationRR(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            }
        }
        this.root.color = Colors.BLACK;
    }

    // método auxiliar rotação esquerda-esquerda (rotação à direita); deveria ser privado
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }

    // método auxiliar rotação direita-direita (rotação à esquerda); deveria ser privado
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    }
}


const redBlackTree = new RedBlackTree();

redBlackTree.insert(1);
redBlackTree.insert(2);
redBlackTree.insert(3);
redBlackTree.insert(4);
redBlackTree.insert(5);