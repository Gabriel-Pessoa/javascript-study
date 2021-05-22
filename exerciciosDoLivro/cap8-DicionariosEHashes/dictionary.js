const { defaultToString, ValuePair } = require('./util');


class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn; // Função para transformar uma key em uma String.
        this.table = {}; // Objeto que irá guardar os elementos da classe.
    }

    //Add novo elemento ao dicionário. Se key já existir, seu valor será sobrescrito.    
    set(key, value) {
        //Verificação: Se key == null ou undefined && value == null ou undefined, não entra na condição 
        if (key != null && value != null) {
            //Converte a key para string, caso essa seja um objeto complexo.
            const tableKey = this.toStrFn(key);
            //Cria uma nova chave (ou subscreve uma antiga) e atribui a classe que retorna o par [chave, valor].
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    // Remove value do dicionário usando a key como parâmetro de busca
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    //Esse método devolve true caso a key esteja presente no dicionário e false caso não.
    hasKey(key) {
        // O JavaScript permite apenas usar strings como key/propriedade dos objetos.
        // Caso tenhamos um objeto complexo passado como key, será necessário transformá-lo em string.
        return this.table[this.toStrFn(key)] != null; // retorna false caso null ou undefined.
    }

    // Devolve o valor específico baseado na chave
    get(key) {
        const valuePair = this.table[this.toStrFn(key)]; // Obtendo  o objeto armazenado na propriedade específica.
        return valuePair == null ? undefined : valuePair.value; // Se propriedade === null ou undefined, devolve undefined; senão valuePair.value

        /*
            Segunda opção, com um custo maior de processamento, faz a consulta ao objeto table duas vezes:

            if(this.hasKey(key)) { // Primeira consulta ao table
                return this.table[this.toStrFn(key)]; // Segunda consulta ao table
            }
            return undefined;
         */
    }

    // Esse método remove todo os valores do dicionário
    clear() {
        this.table = {};
    }

    //Retorna uma string com todos os pares [chave, valor]
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const valuePairs = this.keyValues();
        //Se dicionário estiver vazio, devolve uma string vazia.
        // Caso contrário, adicionamos seu primeiro ValuePair.
        let objString = `${valuePairs[0].toString()}`;
        // só entra no laço a partir de dois ValuePairs.
        for (let i = 1; i < valuePairs.length; i++) {
            // Pega o valor de objString anterior e vai montando a objString final.
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }

    // Esse método devolve a quantidade de valores contida no dicionário. Semelhante a length do Array.
    size() {
        return Object.keys(this.table).length;

        /*
            Segunda opção:
            return this.keyValues().length;
        */
    }

    // Esse método devolve true caso size for igual a zero, e false caso contrário.
    isEmpty() {
        return this.size() === 0;
    }

    // Esse método devolve um array com todas as chaves contidas no dicionário.
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    //Esse método devolve um array com todos os valores contidos no dicionário.
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    // Esse método devolve um array com todos os pares de valores [chave, valor].
    keyValues() {
        return Object.values(this.table);

        /*
           Segunda opção: Object.values pode não está disponível em todos os navegadores. 
            const valuePairs = []
            for(const k in this.table) {
                if(this.hasKey(k)) {
                    valuePairs.push(this.table[k]);
                }
            }
            return valuePairs;
        */
    }

    /* Esse método iterar pelos valores (value) do dicionário. Pode ser interrompido caso a função devolva false.
        Semelhane ao método every do Array
    */
    forEach(callbackFn) {
        const valuePairs = this.keyValues(); // atribui a variável todos os pares [chave, valor] do dicionário.
        for (let i = 0; i < valuePairs.length; i++) { //Itera por cada ValuePair
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value); //Armazena na variável 'result' o resultado da callback
            // sai do laço for quando o result === false
            if (result === false) {
                break;
            }
        }
    }
}

//Teste 1
// const dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');

// console.log(dictionary.hasKey('Gandalf'));
// console.log(dictionary.size());

// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Tyrion'));

// dictionary.remove('John');
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.keyValues());

// dictionary.forEach((k, v) => {
//     console.log('forEach: ', `key: ${k}, value: ${v}`);
// });

module.exports = { Dictionary }