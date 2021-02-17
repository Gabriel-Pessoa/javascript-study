const { defaultToString, ValuePair } = require('./util');
const { LinkedList } = require('../cap6-listaLigadas/linked-list');


class HashTable {

    constructor(toStrFn = defaultToString) {
        this._toStrFn = toStrFn;
        this._table = {};
    }

    // Add novo item à tabela hash (ou pode atualizá-la também)
    put(key, value) {
        //Verificação se parâmetros são válidos.
        if (key != null && value != null) {
            const position = this.hashCode(key); //Criamos um chave hash ASCII
            this._table[position] = new ValuePair(key, value); //Com essa chave incluimos o novo par [chave, valor]
            return true;
        }
        return false;
    }

    // Remove o value da tabela hash usando a key
    remove(key) {
        // Inicialmente devemos saber qual posição acessar.
        const hash = this.hashCode(key);
        //Adquirimos o par do elemento específicado.
        const valuePair = this._table[hash];
        //Verificação para saber se é um valor válido.
        if (valuePair != null) {
            //Remove elemento
            delete this._table[hash]; //Invés de usar o operador delete, podemos atribuir ao elemento o valor null ou undefined.
            return true;
        }
        return false;
    }

    // Devolve um value específico encontrado com a key
    get(key) {
        //Obtemos a posição do parâmetro key especificado
        const valuePair = this._table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    //Cria o valor hash para a chave
    loseloseHashCode(key) {
        //Verificação. Se key for um number, apenas devolva.
        if (typeof key === 'number') {
            return key;
        }
        //Converte a key em uma string caso seja um objeto, e não uma string.
        const tableKey = this._toStrFn(key);

        let hash = 0; // Valor inicial padrão para atribuição aditiva

        //Itera por cada caractere da string convertida.
        for (let i = 0; i < tableKey.length; i++) {
            //Gera um número baseado na soma do valor de cada caractere ASCII que compõe a key.
            hash += tableKey.charCodeAt(i);
        }
        //Devolve o valor de hash. Para trabalhar com valores menores, devemos usar o resto da divisão usando um número arbitrário.
        return hash % 37;
    }

    // Retorna o método loseloseHashCode
    hashCode(key) {
        return this.loseloseHashCode(key);
    }


    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const keys = Object.keys(this._table);
        let objString = `${keys[0]} => ${this._table[keys[0]].toString()}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString},${keys[i]} => ${this._table[keys[i]].toString()}`;
        }
        return objString;
    }

    size() {
        return Object.keys(this._table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

//Teste 2
// const hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com')
// hash.put('John', 'johnsnow@email.com')
// hash.put('Tyrion', 'tyrion@email.com')
// console.log(hash.hashCode('Gandalf') + ' - Gandalf');
// console.log(hash.hashCode('John') + ' - John');
// console.log(hash.hashCode('Tyrion') + ' - Tyrion');
// console.log(hash.get('Gandalf'));
// console.log(hash.get('Loiane'));
// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));


//Teste 3
// const hash = new HashTable();
// hash.put('Ygritte', 'ygritte@email.com');
// hash.put('Jonathan', 'jonathan@email.com');
// hash.put('Jamie', 'jamie@email.com');
// hash.put('Jack', 'jack@email.com');
// hash.put('Jasmine', 'jasmine@email.com');
// hash.put('Jake', 'jake@email.com');
// hash.put('Nathan', 'nathan@email.com');
// hash.put('Athelstan', 'athelstan@email.com');
// hash.put('Sue', 'sue@email.com');
// hash.put('Aethelwulf', 'aethelwulf@email.com');
// hash.put('Sargeras', 'sargeras@email.com');

// console.log(hash.hashCode('Ygritte') + ' - Ygritte');
// console.log(hash.hashCode('Jonathan') + ' - Jonathan');
// console.log(hash.hashCode('Jamie') + ' - Jamie');
// console.log(hash.hashCode('Jack') + ' - Jack');
// console.log(hash.hashCode('Jasmine') + ' - Jasmine');
// console.log(hash.hashCode('Jake') + ' - Jake');
// console.log(hash.hashCode('Nathan') + ' - Nathan');
// console.log(hash.hashCode('Athelstan') + ' - Athelstan');
// console.log(hash.hashCode('Sue') + ' - Sue');
// console.log(hash.hashCode('Aethelwulf') + ' - Aethelwulf');
// console.log(hash.hashCode('Sargeras') + ' - Sargeras');

// console.log(hash.toString());



class HashTableSeparateChaining extends HashTable {
    constructor(toStrFn = defaultToString) {
        super(toStrFn);
    }


    //Sobrescrevendo métodos da classe pai
    put(key, value) {
        if (key != null && value != null) {
            //const position = this.hashCode(key); // utilizando método da classe pai,
            const position = super.hashCode(key); // utilizando método da classe pai; apenas deixando evidente com "super"

            //verificação se a posição na qual estamos tentando add já contém valor
            if (this._table[position] == null) {
                //sendo o primeiro elemento, inicalizamos com uma Lista Ligada
                this._table[position] = new LinkedList();
            }
            // Lista ligada já inicializada no elemento, basta aplicar o método push(implementado em LinkedList) para add mais elemento ao mesmo hash
            this._table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    get(key) {
        //const position = this.hashCode(key); //Obtém o hash Code para a posição do elemento
        const position = super.hashCode(key); // utilizando método da classe pai; apenas deixando evidente com "super"

        const linkedList = this._table[position]; //Obtém a lista ligada do elemento
        if (linkedList != null && !linkedList.isEmpty()) { //!linkedList.isEmpty() == false
            let current = linkedList.getHead(); // pega o primeiro elemento da lista
            while (current != null) { //Até chegar ao último elemento da lista
                if (current.element.key === key) { //Acessando a propriedade key do Node de linkedList, e comparando com o argumento recebido no método.
                    return current.element.value; //Retorna a propriedade value do Node de linkedList do elemento encontrado.
                }
                current = current.next; //Adentrando na lista
            }
        }
        //Caso não encontre a instância de LinkedList
        return undefined;
    }

    remove(key) {
        //const position = this.hashCode(key);
        const position = super.hashCode(key); // utilizando método da classe pai; apenas deixando evidente com "super"

        const linkedList = this._table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key == key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) { //Se lista estiver vazia, removemos a instancia
                        delete this._table[position]
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}

const hashTableSeparateChaining = new HashTableSeparateChaining();

hashTableSeparateChaining.put("Jack", "jack@email.com");
hashTableSeparateChaining.put("Athelstan", "athelstan@email.com");
hashTableSeparateChaining.put("Nathan", "nathan@email.com");
hashTableSeparateChaining.put("Sargeras", "sargeras@email.com");

console.log(hashTableSeparateChaining.hashCode('Jack') + ' - Jack');
console.log(hashTableSeparateChaining.hashCode('Athelstan') + ' - Athelstan');
console.log(hashTableSeparateChaining.hashCode('Nathan') + ' - Nathan');
console.log(hashTableSeparateChaining.hashCode('Sargeras') + ' - Sargeras');

console.log(hashTableSeparateChaining.toString()); // Chama o toString em cadeia: o toString da Lista, que chama o toString do ValuePair

console.log(hashTableSeparateChaining.get('Sargeras'));
hashTableSeparateChaining.remove('Sargeras');
console.log(hashTableSeparateChaining.toString()); // Chama o toString em cadeia: o toString da Lista, que chama o toString do ValuePair
