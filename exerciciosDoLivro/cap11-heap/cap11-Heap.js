const { defaultCompare, Compare } = require('../cap6-listaLigadas/util');
const { swap, reverseCompare } = require('../utils');


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

    heapify(array) {
        if (array.length) this.heap = array;

        const maxIndex = Math.floor(this.size() / 2) - 1;

        for (let i = 0; i <= maxIndex; i++) {
            this._siftDown(i);
        }

        return this.heap;
    }

    // retorna tamanho do heap
    size() {
        return this.heap.length;
    }

    // retorna um boolean para heap vazio
    isEmpty() {
        return this.size() === 0;
    }

    //retorna array de heap
    getAsArray() {
        return this.heap;
    }
    // Retorna o menor valor do heap
    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0];
    }

}

//const minHeap = new MinHeap();
//Teste 1
// minHeap.insert(2);
// minHeap.insert(3);
// minHeap.insert(4);
// minHeap.insert(5);
// minHeap.insert(1);
// console.log(minHeap.heap);
// console.log('Heap size', minHeap.size());
// console.log('Heap is empty', minHeap.isEmpty());
// console.log('Heap min value', minHeap.findMinimum());
//Teste 2
// for (let i = 1; i < 10; i++) {
//     minHeap.insert(i);
// }
// console.log('Extract minimum: ', minHeap.extract());

class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn); // inverte a lógica de min para max
    }
}

//Teste 1
// const maxHeap = new MaxHeap();
// maxHeap.insert(2);
// maxHeap.insert(3);
// maxHeap.insert(4);
// maxHeap.insert(5);
// maxHeap.insert(1);
// console.log('Heap size ', maxHeap.size());
// console.log('Heap min value ', maxHeap.findMinimum());


// //Heap Sort
function heapify(heap, index, heapSize, compareFn) {
    let element = index;
    const left = (2 * index + 1);
    const right = (2 * index + 2);
    const size = heapSize;

    if (
        left < size
        && compareFn(heap[element], heap[left]) === Compare.BIGGER_THAN
    ) {
        element = left;
    }

    if (
        right < size
        && compareFn(heap[element], heap[right]) === Compare.BIGGER_THAN
    ) {
        element = right;
    }

    if (index !== element) {
        swap(heap, index, element);
        heapify(heap, element, heapSize, compareFn);
    }
}

function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length, compareFn);
    }
    return array;
}

function heapSort(array, compareFn = defaultCompare) {

    let heapSize = array.length;
    buildMaxHeap(array, compareFn);

    while (heapSize > 1) {
        swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn);
    }
    return array;
}

//Teste Heap Sort
// const array = [7, 6, 3, 5, 4, 1, 2];
// console.log('Antes de Ordenar ', array);
// console.log('Depois de Ordenar ', heapSort(array));


module.exports = { MinHeap, MaxHeap };
