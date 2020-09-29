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
            if (this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }


    // Operations with Conjucts

    // união de conjuntos
    union(otherSet) {
        // instancia do Set da API JavaScript
        const unionSet = new Set(); // criação de uma conjunto para armazenar o resultado

        // Acessando todos os valores do primeiro conjunto, iteramos add no conjunto que representa a union
        this.values().forEach(value => unionSet.add(value));

        // Object.values() retorna um array
        // Itera pelos valores do conjunto passado como argumento, não permitindo repetição de elementos por si tratar de um Set.      
        otherSet.values().forEach(value => unionSet.add(value));

        return unionSet; //Retorna o novo conjunto, união de A e B 
    }

    //intersecção de conjuntos
    intersection(otherSet) {
        /**
         * Opção 1: sem economia de processamento
         
        //instancia da classe Set da API do JavaScript
            const intersectionSet = new Set(); // criação de uma conjunto para armazenar o resultado
            const values = this.values();
        // Iterar por todos os valores da classe Set
            for (let i = 0; i < values.length; i++) {
                //verificação se elemento está presente no conjunto passado como argumento
                if (otherSet.has(values[i])) {
                    // add à variável intersectionSet
                    intersectionSet.add(values[i]);
                }
        }
        return intersectionSet;
       
        */

        /**
         * Opção 2: Economia de processamento.
         */
        // instancia da classe Set da API do JavaScript
        const intersectionSet = new Set(); // criação de uma conjunto para armazenar o resultado
        const values = this.values(); //Obter valores da instância atual do conjunto
        const otherValues = otherSet.values(); //Obter valores do conjunto passado como parãmetro.

        let biggerSet = values;
        let smallerSet = otherValues;

        // Comparação de tamanho dos conjunto, caso o conjunto específico seja maior que o atual, trocamos os valores.
        //if(smallerSet.length > biggerSet.length) [smallerSet, biggerSet] = [biggerSet, smallerSet];
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }

        // iteramos pelo conjunto menor economizando processamento
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet
    }


    difference(otherSet) {
        /**
         * Opção 1: Sem economia de processamento
        
            const differenceSet = new Set();
            this.values().forEach(value => {
                if(!otherSet.has(value)) {
                    differenceSet.add(value);
                }
            });
            return differenceSet;
        */

        /**
         * Opção 2: Economia de processamento.
         */
        // Criando conjunto de resultados interno, para evitar qualquer alteração indevida.
        const differenceSet = new Set();

        const values = this.values();
        const otherValues = otherSet.values();

        let smallerSet = values;
        let biggerSet = otherValues;

        if (smallerSet.length > biggerSet.length) [smallerSet, biggerSet] = [biggerSet, smallerSet];

        // Iterando por todos os valores do conjunto corrente 
        smallerSet.forEach(value => {
            //compara cada valor individualmente
            if (!biggerSet.includes(value)) { // se elemento não estiver no conjunto, ele é add.
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    isSubsetOf(otherSet) {
        // verificação se a instância atual é maior que a instância otherSet. Se sim, então não é um subconjunto.
        if(this.size() > otherSet.size()) return false;
        let isSubset = true;
        //Iteramos por todos os elementos do conjunto atual
        // Utilizamos o método every que será chamado enquanto a função callback devolver true, se devolver false o laço será interrompido.
        this.values().every(value => {
            //Verificamos se o elemento está presente em otherSet
            //Se houver algum elemento que não está presente em otherSet, é sinal que de esse conjunto não é subconjunto.
            if(!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            //Se todos os elementos estiverem presente em otherSet, ele é um subconjunto.
            return true;
        });
        return isSubset
    }
}

//Testes 1
// const set = new Set();
// set.add(1);
// console.log(set.values());// se elemento não estiver no conjunto, ele é add.
// console.log(set.has(1));
// console.log(set.size());
// set.add(2);
// console.log(set.values());
// console.log(set.has(2));
// console.log(set.size());
// set.delete(1);
// console.log(set.values());
// set.delete(2);
// console.log(set.values());


// Testes 2
// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);

// const unionAB = setA.union(setB);
// console.log(unionAB.values()); [1, 2, 3, 4, 5, 6]


// Teste 3
// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);

// const intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values()); [1, 2, 3, 4, 5, 6]


// Teste 4
// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// const differenceAB = setA.difference(setB);
// console.log(differenceAB.values());

//Teste 5 
const setA = new Set();
setA.add(1);
setA.add(2);
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));



