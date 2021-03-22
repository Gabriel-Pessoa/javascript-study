const { defaultCompare, Compare } = require('../cap6-listaLigadas/util');
const { swap } = require('./util');

class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }


    // adquirir posição de nó filho à esquerda
    _getLeftIndex(index) {
        return 2 * index + 1;
    }

    // adquirir posição de nó filho à direita
    _getRightIndex(index) {
        return 2 * index + 2;
    }

    // adquirir posição de nó pai
    _getParentIndex(index) {
        if (index === 0) return undefined;
        return Math.floor((index - 1) / 2);
    }

    _siftUp(index) {
        let parent = this._getParentIndex(index);
        while (index > 0
            && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
        ) {
            swap(this.heap, parent, index);
            index = parent;
            parent = this._getParentIndex(index);
        }
    }

    _siftDown(index) {
        let element = index;
        const left = this._getLeftIndex(index);
        const right = this._getRightIndex(index);
        const size = this.size();

        if (
            left < size
            && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
        ) {
            element = left;
        }

        if (
            right < size
            && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
        ) {
            element = right;
        }

        if (index !== element) {
            swap(this.heap, index, element);
            this._siftDown(element);
        }
    }

    // insere novo valor no heap
    insert(value) {
        if (value != null) {
            const index = this.heap.length; //última posição após add novo elemento na linha abaixo (length - 1)
            this.heap.push(value);
            this._siftUp(index);
            return true;
        }
        return false;
    }

    // remove o primeiro elemento do heap
    extract() {
        if (this.isEmpty()) return undefined;

        if (this.size() === 1) return this.heap.shift(); // remove e devolve valor

        const removedValue = this.heap[0];
        this.heap[0] = this.heap.pop(); // remove da última posição do array e atribui à primeira posição do array.
        this._siftDown(0);
        return removedValue;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0];
    }

}

//const minHeap = new MinHeap();

// minHeap.insert(1);
// console.log(minHeap.heap);
// console.log('Heap size', minHeap.size());
// console.log('Heap is empty', minHeap.isEmpty());
// console.log('Heap min value', minHeap.findMinimum());

//Teste 3
// for (let i = 1; i < 10; i++) {
//     minHeap.insert(i);
// }
// console.log('Extract minimum: ', minHeap.extract());


