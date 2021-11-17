const { defaultEquals, Node, Compare, defaultCompare } = require('../utils');

class LinkedList {
    //constructor recebe uma função como argumento, caso não seja passado, assume função padrão.
    constructor(equalsFn = defaultEquals) {
        this._count = 0; // armazena o número de elementos que temos na lista
        this._head = undefined; // referência ao primeiro elemento
        this._equalsFn = equalsFn; //comparação de igualdade entre os elementos, será implementado em algum método.
    }

    //add elementos ao final da lista
    push(element) {
        //existe dois cenários ao add elemento.

        const node = new Node(element);
        let current;

        //1) primeiro cenário: Lista vazia
        if (this._head == null) { // this.head === undefined || this.head === null
            this._head = node; // cabeça recebe o nó
        } else { // 2) segundo cenário: Lista não está vazia.
            current = this._head;
            while (current.next != null) { // obtém o último item
                current = current.next;
            }
            // e atribui o novo elemento ao último current.next para criar a ligação
            current.next = node;
        }
        this._count++; // incrementa o tamanho da lista
    }

    //insere elemento em posição específica
    insert(element, index) {
        // verificação de valor dentro do intervalo válido
        if (index >= 0 && index <= this._count) { //index <= this.count (significa que posso adicionar elemento após o último elemento (index - 1))
            const node = new Node(element);

            if (index === 0) {
                const current = this._head; // a variável current aponta para o índice 0, antes da adição de um novo elemento.
                node.next = current; // faz a ligação do novo nó que ocupará o lugar do current(índice 0), jogando o current para a próxima posição(índice 1).
                this._head = node; // atribui o novo elemento ao head, que ocupa o índice 0, já com as ligações subsequentes feita acima.
            }
            else {
                const previous = this.getElementAt(index - 1); //valor anterior ao valor corrente, ou seja, uma posição antes da adição do novo elemento
                const current = previous.next; //valor que ocupará a posição após a inserção de um novo elemento.
                /* Segunda opção para as duas linhas acima 
                    for (let i = 0; i < index; i++) {
                        previous = current;
                        current = current.next;
                    }
                */
                node.next = current; //ligação do valor corrente ao nó que irá ocupar o seu lugar e faze-lo pular uma posição à frente
                previous.next = node; //atribuir ao valor anterior o novo nó, já com a ligação feita para os nós subsequentes.
            }
            this._count++; //atualiza o tamanho da lista
            return true; // retorno da função
        }
        return false;
    }

    //retorna elemento em posição específica.
    getElementAt(index) {
        if (index >= 0 && index <= this._count) { //index <= this.count (significa que posso obter o último elemento após o (index - 1))
            let node = this._head;

            // intera pela lista até chega no elemento passado como index
            for (let i = 1; i <= index && node != null; i++) {
                node = node.next;
            }

            return node; // retorna o elemento do índice desejado
        }
        return undefined;
    }

    //procura e remove elemento da lista, caso não encontre retorna undefined
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    //procura na lista o elemento e retorna seu índice, caso não encontre, retorna -1.
    indexOf(element) {
        let current = this._head;
        //Não entra no laço, caso lista vazia
        for (let i = 0; i < this._count && current != null; i++) { //somente por garantia, verificar-se a variável current é diferente de null ou undefined.
            //Para cada interação compara-se o elemento atual do índice com o passado como argumento
            if (this._equalsFn(element, current.element)) return i; // interrompe o método, retornando o índice
            current = current.next; //iterando pela lista
        }
        return -1; // caso não encontre o elemento ou lista vazia
    }

    //remove elemento de uma posição específica
    removeAt(index) {
        //verificação para evitar valores fora do intevalo
        if (index >= 0 && index < this._count) { // posição válida do índice, do zero(incluso) até o count - 1
            let current = this._head;
            //remove o primeiro elemento
            if (index === 0) {
                this._head = current.next; // atribui ao head o próximo nó, fazendo a ligação e pulando o elemento de índice zero
                // outra alternativa para o código acima: this.head = this.head.next;
            } else {
                let previous;
                // iterar a lista até o elemento passado como índice
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                    //quando índice é alcançado, previous tem o valor do índice anterior ao passado como parâmetro,
                    // e current tem valor do próximo índice (index + 1), afim de pula o índice passado como parâmetro.
                }
                /** OU (Sem o uso do for, refatorando o código)
                 * const previous = this.getElementAt(index - 1);
                 * current = previous.next
                 */

                // faz a ligação de previous com o next de current, pulando elemento passado no index para removê-lo
                previous.next = current.next;
            }
            this._count--;
            return current.element;
        }
        return undefined; // caso não passe na verificação
    }

    //retorna tamanho da lista
    size() {
        return this._count;
    }

    //Retorna true caso a lista esteja vazia e false caso contrário.
    isEmpty() {
        return this.size() === 0;
    }

    //retorna o primeiro elemento da lista
    getHead() {
        return this._head;
    }

    //retorna uma representação em string da lista ligada
    toString() {
        if (this._head == null) return ''; // verificação de lista vazia(null ou undefined)

        let objString = `${this._head.element}`; //inicia sempre com primeiro elemento
        let current = this._head.next; // variável current recebe próximo nó. Obtêm a posição 0 (índice 0) da lista
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`; // concatena os elemento durante interação do laço, do índice 1 em diante
            current = current.next; // avança pela lista, iterando a cada laço
        }
        return objString; // retorna a string com o conteúdo da lista
    }
}

const list = new LinkedList();
list.push(20);
list.push(25);
list.push(35);

/* É uma extensão do node, acrescido de mais uma propriedade, que
    faz referência aos elementos anteriores de cada posição da lista
*/
class DoublyNode extends Node {
    // constructor(element, next, prev) {
    //     super(element, next); // herda propriedades da classe pai
    //     this.prev = prev; // instancia sua própria propriedade
    // }
    constructor(element) {
        super(element);
        this.prev = undefined;
    }
}

//Lista duplamente ligada. Iterar do ínicio até o final, ou, vice-versa.
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn); // herda propriedades e métodos da classe pai. Inicializa this.head, this.count e this.equalsFn
        this._tail = undefined; // instancia sua própria propriedade. Referência o último elemento da lista.
    }

    // Sobrescrevendo método da classe pai.
    // Método insere um elemento em qualquer posição
    insert(element, index) {
        if (index >= 0 && index <= this._count) { //index <= this.count (significa que posso adicionar elemento após o último elemento (index - 1))
            const node = new DoublyNode(element);
            let current = this._head;

            //primeiro cenário para add de elementos: Add na posição 0
            if (index === 0) {
                if (this._head == null) { // this.head === undefined || this.head === null, ou seja, lista vazia.
                    this._head = node;
                    this._tail = node;
                } else { //Lista não vazia
                    node.next = current;
                    current.prev = node;
                    this._head = node;
                }
            } else if (index === this._count) { // segundo cenário: inserir após último item
                current = this._tail; //obtêm o último elemento antes da adição do novo
                current.next = node; //atribui ao next desse último, o elemento que queremos adicionar após ele
                node.prev = current; // o prev desse último elemento aponta para seu antecessor, que será o penúltimo elemento da lista
                this._tail = node; // atribuimos o novo nó/elemento ao último elemento da lista
            } else { // terceiro cenário: inserir no meio da lista
                /*  for (let i = 1; i < index && current.next != null ; i++) {
                        previous = current.prev
                        current = current.next;
                    }
                    current = previous.next;
                 */
                const previous = this.getElementAt(index - 1); // faz uma interação até chega ao elemento desejado
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this._count++;
            return true;
        }
        return false;
    }

    // Sobrescrevendo método da classe pai.
    // Método remove um elemento em qualquer posição
    removeAt(index) {
        if (index >= 0 && index < this._count) {
            let current = this._head;
            if (index === 0) {
                this._head = current.next;

                if (this._count === 1) { // se houver apenas um item, atualiza também o tail
                    this._tail = undefined;
                } else { // maior que 1 item
                    this._head.prev = undefined; // ou current.next.prev = undefined;
                }
            } else if (index === this._count - 1) { // último item
                current = this._tail;
                this._tail = current.prev;
                this._tail.next = undefined;
            } else {
                /* for(let i = 1; i < index && current.next != null; i++) {
                   current = current.next;
               } OU */
                current = this.getElementAt(index); //interar até chegar no índice.
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this._count--;
            return current.element;
        }
        return undefined;
    }
}

class CircularLinkedList extends LinkedList { // herdará ou terá acesso a todas as propriedades e métodos da classe LinkedList
    constructor(equalsFn = defaultEquals) {
        super(equalsFn); //chamamos o constructor de LinkedList, que inicializará as propriedades nele contida.
    }

    //métodos
    //Sobrescrevendo método da classe pai
    insert(element, index) {
        if (index >= 0 && index <= this._count) { //index <= this.count (significa que posso adicionar elemento após o último elemento (index - 1))
            const node = new Node(element);
            let current = this._head;
            if (index === 0) {
                if (this._head == null) { //Lista vazia
                    this._head = node;
                    node.next = this._head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size()); // referencia do último elemento, ou tail.
                    this._head = node;
                    current.next = this._head; // faz a ligação do último elemento ao head, formando a lista circular.
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next
                node.next = current;
                previous.next = node;
            }
            this._count++;
            return true;
        }
        return false;
    }

    //Sobrescrevendo método da classe pai
    removeAt(index) {
        if (index >= 0 && index < this._count) {
            let current = this._head;
            if (index === 0) {
                if (this.size() === 1) { // apenas um elemento na lista
                    this._head = undefined;
                } else {
                    const removed = this._head; // elemento que será removido
                    current = this.getElementAt(this.size()); //referência ao último nó
                    this._head = this._head.next;
                    current.next = this._head;
                    current = removed; //armazena o elemento removido para ser retornado no final do método
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this._count--;
            return current.element;
        }
        return undefined;
    }
}


// essa classe herdará todos os métodos e propriedades da classe LinkedList
class SortedLinkedList extends LinkedList {
    // argumento do constructor recebe função por padrão
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn; //usado para comparar os elementos
    }

    // sobrescrevendo método da classe pai
    insert(element, index = 0) { // segundo parâmetro index está sendo ignorado, o conceito de lista ordenada é inserir o elemento após o outro.
        // se lista vazia
        if (this.isEmpty()) {
            // retornando resposta recebido do método da classe pai, passando o elemento recebido como argumento na posição zero.
            // sempre será na posição, a lista começa nessa posição.
            // não podemos passar o valor de index como segundo argumento, causaria um erro no conceito de lista ordenada.
            return super.insert(element, 0);
        }

        // captura o index correto, controlado internamente, evitando ruptura no conceito e ordenação da lista.
        const pos = this.getIndexNextSortedElement(element);
        // insere elemento na posição correta na ordenação, baseada no index verificado na linha acima.
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {
        let current = this._head;
        let i = 0;
        // percorre toda a lista.
        for (; i < this.size() && current; i++) { // i < tamanho da lista && current != false

            // variável assume valor -1, 0 ou 1 que compara elemento de entrada do método e o elemento da lista
            const comp = this.compareFn(element, current.element);

            //se valor for igual a -1, ou seja, elemento que queremos inserir é menor que o da lista
            if (comp === Compare.LESS_THAN) {
                return i; // retorna a posição para inserção
            }
            current = current.next;
        }
        return i;
    }
}

// usando listas ligadas e variantes em pilhas, filas e deques
class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList(); // Instancia da classe DoublyLinkedList
    }

    push(element) {
        this.items.push(element);
    }


    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    size() {
        return this.items.size();
    }

    clear() {
        this.items.clear();
    }

    toString() {
        return this.items.toString();
    }
}

module.exports = { LinkedList };