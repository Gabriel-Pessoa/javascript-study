// exemplo pilha com array
class Stack {
    constructor() {
        // declarando atributos privados, teoricamente devem ser acessíveis somente dentro da classe
        this._items = [];
    }

    push(element) {
        this._items.push(element);
    }

    pop() {
        return this._items.pop();
    }

    peek() {
        return this._items[this._items.length - 1];
    }

    isEmpty() {
        return this._items.length === 0;
    }

    size() {
        return this._items.length;
    }

    clear() {
        this._items = [];
    }
}

//exemplo de pilha com Objeto
class Stack2 {
    constructor() {
        // declarando atributos privados, teoricamente devem ser acessíveis somente dentro da classe
        this._items = {};
        this._count = 0;
    }

    push(element) {
        this._items[this._count] = element;
        this._count++;
    }

    pop() {
        // primeiro verifica se objeto está vazio
        if (this.isEmpty()) return undefined;

        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }

    peek() {
        // primeiro verfica se objeto está vazio
        if (this.isEmpty()) return undefined;

        return this._items[this._count - 1];
    }

    isEmpty() {
        return this._count === 0;
    }

    size() {
        return this._count;
    }

    clear() {
        this._items = {};
        this._count = 0;
    }

    toString() {
        if (this.isEmpty()) return '';

        let objString = `${this._items[0]}`; // primeira valor do obj. O valor entre parênteses será convertido em chave do objeto para acessar valor.

        // se a pilha contiver um único elemento, não entrará no laço pois não satisfaz a condição i < this.count.
        for (let i = 1; i < this._count; i++) {
            objString = `${objString},${this._items[i]}`;
        }
        return objString;
    }
}

const stack2 = new Stack2();

//atributos não são privados
// console.log(Object.getOwnPropertyNames(stack2));
// console.log(Object.keys(stack2));
// console.log(stack2.items);

// Utilizando tipo primitivo imutável, que pode ser usado como propriedade de objeto
// Sua filosofia permite alterar elementos(add e remove) pelo meio, não sendo recomendado para estruturas de pilhas
const _items = Symbol('stackItems');

class Stack3 {
    constructor() {
        this[_items] = [];
    }

    push(element) {
        this[_items].push(element);
    }

    pop() {
        return this[_items].pop();
    }

    peek() {
        return this[_items][this[_items].length - 1];
    }

    isEmpty() {
        return this[_items].length === 0;
    }

    size() {
        return this[_items].length;
    }

    clear() {
        this[_items] = [];
    }

    print() {
        console.log(this[_items]);
    }
}

// const stack3 = new Stack3();
// stack3.push(5);
// stack3.push(8);

// let objectSymbols = Object.getOwnPropertySymbols(stack3);
// console.log(objectSymbols.length);
// console.log(objectSymbols);
// console.log(objectSymbols[0]);
// stack3[objectSymbols[0]].push(1);
// stack3.print();


//Usando WeakMap: Tipo de dado que garante que a propriedade é private dentro de uma classe. Porém, o código perde um pouco a legibilidade.
// Não é possível herdar as propriedade private.
const items = new WeakMap(); // instancia de WeakMap
class Stack4 {
    constructor() {
        //this representa a classe stack que é a chave WeakMap, e o array que representa a pilha
        items.set(this, []);
    }

    push(element) {
        const s = items.get(this);
        s.push(element);
    }

    pop() {
        const s = items.get(this);
        const r = s.pop();
        return r;
    }
}

// função que converte decimpal para binário
function decimalToBinary(decNumber) {
    const remStack = new Stack2();

    let number = decNumber;
    let rem;
    let binaryString = '';

    while (number > 0) {
        rem = Math.floor(number % 2); // atribui a variável um float, resto da divisão pelo number
        remStack.push(rem); // faz o push na pilha, colocando o elemento no topo da pilha (final)
        number = Math.floor(number / 2); // atualiza o número para o próximo laço
    }

    while (!remStack.isEmpty()) { //enquanto for false
        binaryString += remStack.pop().toString(); //operador aditivo, atribui a variável os elementos na ordem da base da pilha (inicío)
    }

    return binaryString;
}

// console.log(decimalToBinary(233));
// console.log(decimalToBinary(10));
// console.log(decimalToBinary(1000));

// função que converte número decimal em outro passado como base
function baseConverter(decNumber, base) {
    const remStack = new Stack2();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';

    if (!(base >= 2 && base <= 36)) return '';

    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

// console.log(baseConverter(100345, 2));
// console.log(baseConverter(100345, 8));
// console.log(baseConverter(100345, 16));
// console.log(baseConverter(100345, 35));

const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = { Stack }