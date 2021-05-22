class Queue {
    constructor() {
        this.count = 0; // prooriedade que ajuda a controlar o tamanho da fila
        this.lowestCount = 0; //propriedade que ajuda a controlar os elementos da frente da fila
        this.items = {} // items. Objeto, estrura da dados para salvar os elementos da fila. Torna o acesso ao elemento mais eficiente.
    }

    //add elemento ao final da fila
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // remove e retorna o primeiro elemento da fila
    dequeue() {
        if (this.isEmpty()) return undefined; //verifica se a fila está vazia
        const result = this.items[this.lowestCount]; //guarda o valor numa variável antes de remover
        delete this.items[this.lowestCount]; // remove elemento, usando como propriedade a variável que controla a frente da fila
        this.lowestCount++; //propriedade de controle de remoção de elemento da frente da fila 
        return result; // retorna elemento removido
    }

    // retorna primeiro elemento da fila
    peek() {
        if (this.isEmpty()) return undefined; // verifica se a fila está vazia
        return this.items[this.lowestCount];
    }

    // retorna um booleano para fila vazia ou não
    isEmpty() {
        // se fila estiver vazia devolve true, senão false.
        // return this.count - this.lowestCount === 0;

        //segunda opção
        return this.size() === 0;
    }

    // retorna tamanho da fila
    size() {
        return this.count - this.lowestCount;
    }

    // método que limpa retornando ao estado inicial a fila
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) return '';

        //começa a iterar pela frente da fila, sendo o valor de lowestCount o primeiro elemento.
        let objString = `${this.items[this.lowestCount]}`;

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }

        return objString;
    }
}

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('John');
// queue.enqueue('Jack');
// console.log(queue.toString());
// queue.enqueue('Camila');
// console.log(queue.toString());
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.toString());


// fila especial de duas pontas.
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    isEmpty() {
        // Primeira opção
        // return this.count - this.lowestCount === 0;

        //Segunda opção
        return this.size() === 0;
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    size() {
        return this.count - this.lowestCount;
    }

    toString() {
        if (this.isEmpty()) return '';

        let objString = `${this.items[this.lowestCount]}`;

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }

        return objString;
    }

    // adiciona elementos na frente da fila
    addFront(element) {
        //ao add elemento na frente de uma fila existem três cenários
        // cenário 1: fila vazia. 
        if (this.isEmpty()) {
            /* Chamamos o add back que irá adiciona o elemento ao final da fila que nesse caso também será a frente, 
               pois se trata apenas de um elemento ocupando a fila. */
            this.addBack(element);

        } else if (this.lowestCount > 0) { // cenário 2: elementos removidos da frente da fila incrementaram o valor de lowestCount
            this.lowestCount--;
            this.items[this.lowestCount] = element;
            /*
                items = {
                    // '0: X' foi removido
                    1: 8,
                    2: 9 
                }
                Count = 3
                lowesCount = 1
                Para adicionar elemento na frente dessa fila, basta decrementar o valor de lowestCount e 
                usá-lo como chave de items[0]
             */

        } else { // cenário 3: lowestCount = 0

            // Opção 1: muito custoso, tem que iterar por toda a fila deslocando os elementos para a direita uma posição.
            /* Precisamos desocupar a primeira posição afim de colocar um elemento na frente da fila, 
                deslocando todos os elementos para trás 1 posição
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.item[i - 1];
            }
            this.count++; // adicionar elemento na frente da fila incrementa tamanho da fila
            this.lowestCount = 0; // permanece igual a zero, pois não foi removido, mas sim, add elemento.
            this.items[0] = element; // com posição agora desocupada, podemos adicionar o elemento na frente da fila.
            */

            //Opção 2: economiza processamento, porém trabalha com números negativos.

            this.lowestCount--; // adiciona elemento a frente da fila
            this.items[this.lowestCount] = element;
            // Não posso incrementar o valor de count, senão causará inconsistência no números de elementos  

        }

    }

    //adiciona elementos atrás da fila
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    //remove da frente da fila
    removeFront() {
        if (this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result;
    }

    //remove de trás da fila
    removeBack() {
        if (this.isEmpty()) return undefined;
        const lastPosition = this.count - 1;
        const result = this.items[lastPosition];
        delete this.items[lastPosition];
        this.count--;
        return result;
    }

    //visualiza o primeiro elemento da frente da fila
    peekFront() {
        if (this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    //visualiza o primeiro elemento de trás da fila
    peekBack() {
        if (this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }
}

// const deque = new Deque();

// console.log(deque.isEmpty());
// deque.addBack('John');
// deque.addBack('Jack');
// console.log(deque.toString());
// deque.addBack('Camila');
// console.log(deque.toString());
// console.log(deque.size());
// console.log(deque.isEmpty());
// console.log(deque.lowestCount);
// deque.removeFront();
// console.log(deque.toString());
// deque.removeBack();
// console.log(deque.toString());
// deque.addFront('John');
// console.log(deque.toString());


// função que simula o jogo Batata Quente usando a classe de fila Queue
// function hotPotato(elementsList, num) {
//     const queue = new Queue();

//     const elimitatedList = [];

//     for (let i = 0; i < elementsList.length; i++) {
//         // percorre a lista de array, add cada elemento ao final da fila.
//         // Enfilerando a lista
//         queue.enqueue(elementsList[i]);
//     }

//     while (queue.size() > 1) { // maior que 1, pq tem que sobrar o vencedor

//         //o número passado como segundo argumento determina quantas repetições terá o laço
//         for (let i = 0; i < num; i++) {
//             //remove e retorna os primeiros elemento da fila, add novamente ao final,
//             // Formando uma fila circular e simulando o jogo batata quente.
//             queue.enqueue(queue.dequeue());
//         }
//         // após laço for ser finalizado, remove e retorna o primeiro elemento da fila, adicionando-o ao array.
//         // Simulando o candidato que foi elimando nessa roda do jogo batata quente.
//         elimitatedList.push(queue.dequeue());

//         //repete todo o laço while, até que o tamanho da fila seja de apenas 1 elemento.
//         // Se inicia mais uma rodada do jogo. Até que haja um vencedor.
//     }

//     // Retorna um objeto que tem duas propriedades.
//     return {
//         eliminated: elimitatedList, // lista de elementos eliminados.
//         winner: queue.dequeue() // único elemento vencedor.
//     };
// }

// const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];

// const result = hotPotato(names, 7);
// result.eliminated.forEach(name => {
//     console.log(`${name} foi eliminado do jogo Batata Quente`);
// });
// console.log(`O vencedor é: ${result.winner}`);


// function palindromeChecker(aString) {
//     // verificação para saber se string passada como argumento é válida.
//     // sai da função retornando um false
//     if (aString === undefined || aString === null ||
//         (aString !== null && aString.length === 0)) {
//         return false;
//     }
//     const deque = new Deque();
//     // transformando toda a string em minúsculo e tirando todos os espaços
//     const lowerString = aString.toLocaleLowerCase().split(' ').join('');

//     let isEqual = true;
//     let firstChar, lastChar;

//     for (let i = 0; i < lowerString.length; i++) {
//         deque.addBack(lowerString.charAt(i)); // add cada caractere a fila
//     }

//     while (deque.size() > 1 && isEqual) { //quando size <= 1 ou isQual == false, sai do laço.
//         firstChar = deque.removeFront();// remove o primeiro elemento
//         lastChar = deque.removeBack(); // remove o último elemento
//         if (firstChar !== lastChar) { // comparativo, se for diferente: setar variável para false;
//             isEqual = false;
//         }
//     }
//     return isEqual; // retorna um boolean
// }

// console.log('a', palindromeChecker('a'));
// console.log('aa', palindromeChecker('aa'));
// console.log('kayak', palindromeChecker('kayak'));
// console.log('level', palindromeChecker('level'));
// console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
// console.log('Step on no pets', palindromeChecker('Step on no pets'));

module.exports = { Queue };