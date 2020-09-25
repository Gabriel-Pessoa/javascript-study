class Set {
    constructor() {
        this.items = {};
    }

    // methods

    //add new element to the set
    add(element) {
        // verificamos se o elemento já está presente. Senão tiver, ele add.
        if (!this.has(element)) {
            this.items[element] = element; // add elemento como chave e valor, facilitando posteriormente a sua busca.
            return true; // retorna true, para sinalizar que foi add um novo elemento.
        }
        // caso o conjunto contenha o mesmo elemento, retorna false.
        return false;
    }

    //remove element of the set
    delete(element) {
        // verificamos se o elemento está presente. Caso sim, ele procede com a remoção
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        //Caso elemento não esteja presente no conjunto.
        return false;
    }

    // devolve true ou false se element estiver no conjunto
    has(element) {
        /* Primeira opção:  Operador "in" pode ser utilizado para verificar se o elemento especificado é uma propriedade do objeto.
         Poŕem, o operador 'in' devolve um booleano olhando a propriedade na cadeia do objeto. */
        //return element in this.items.

        /* Segunda opção: Melhor do que a primeira. O método hasOwnProperty devolve um booleano se o objeto tem a propriedade especificada */
        return Object.prototype.hasOwnProperty.call(this.items, element);
        /*Obs: Podia ter usado this.items.hasOwnProperty, mas algumas ferramentas lançam um erro, pois nem todos os objetos
         herdam o Object.prototype. Para evitar qualquer problema é melhor usar a linha de código acima. */
    }

    //remove all the elements of the set
    clear() {
        this.items = {};
    }

    // returns the number of elements. Funciona em navagadores mais modernos
    size() {
        /*Object contém um método chamado keys que retorna um array de chaves do objeto.*/
       return Object.keys(this.items).length;
    }

    // idêntico ao método size, porém funciona em qualquer navegador.
    sizeLegacy() {
        let count = 0;
        // percorre objeto
        for (let key in this.items) {
            //verificação se o objeto tem essa propriedade
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    // devolver um array com todos os valores do conjunto.
    values() {

        //Object.values retorna um array com os valores de todas as propriedades do objeto. 
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for (let key in this.items) {
            if(this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }
}

//Testes
const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values());

