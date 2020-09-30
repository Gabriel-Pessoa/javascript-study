import { defaultToString } from '../util';

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn; // Função para transformar uma key em uma String.
        this.table = {}; // Objeto que irá guardar os elementos da classe.
    }


    //Add novo elemento ao dicionário. Se key já existir, seu valor será sobrescrito.    
    set(key, value) {
        this.table[key] = value;
    }

    // Remove value do dicionário usando a key como parâmetro de busca
    remove(key) {
        if (!this.hasKey(key)) return undefined;
        const value = this.table[key];
        delete this.table[key];
        return value;
    }

    //Esse método devolve true caso a key esteja presente no dicionário e false caso não.
    hasKey(key) {
        // O JavaScript permite apenas usar strings como key/propriedade dos objetos.
        // Caso tenhamos um objeto complexo passado como key, será necessário transformá-lo em string.
        return this.table[this.toStrFn(key)] != null; // retorna false caso null ou undefined.
    }

    // Devolve o valor específico baseado na chave
    get(key) {
        return this.table[key];
    }

    // Esse método remove todo os valores do dicionário
    clear() {
        this.table = {};
    }

    // Esse método devolve a quantidade de valores contida no dicionário. Semelhante a length do Array.
    size() {
        return Array.from(this.table).length;
    }

    // Esse método devolve true caso size for igual a zero, e false caso contrário.
    isEmpty() {
        return this.size() === 0;
    }

    // Esse método devolve um array com todas as chaves contidas no dicionário.
    keys() {
        return Object.keys(this.table);
    }

    //Esse método devolve um array com todos os valores contidos no dicionário.
    values() {
        return Object.values(this.table);
    }

    // Esse método devolve um array com todos os pares de valores [chave, valor].
    keyValues() {

    }

    /* Esse método iterar pelos valores (value) do dicionário. Pode ser interrompido caso a função devolva false.
     Semelhane ao método every do Array
    */
    forEach(callBackFn) {
        callBackFn = (key, value) => {
            for (let i = 0; i < this.size(); i++) {

            }
        }
    }
}