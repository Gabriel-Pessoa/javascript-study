import LinkedList from '../cap6-listaLigadas/data-structure/linked-list'
import { defaultToString } from './util';
import { ValuePair } from './value-pair';

class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            //verificação se a posição na qual estamos tentando add já contém valor
            if (this.table[position] == null) {
                //sendo o primeiro elemento, inicalizamos com uma Lista Ligada
                this.table[position] = new LinkedList();
            }
            // Lista ligada já inicializada no elemento, basta aplicar o método push(implementado em LinkedList) para add mais elemento ao mesmo hash
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    get(key) {
        const position = this.hashCode(key); //Obtém o hash Code para a posição do elemento
        const linkedList = this.table[position]; //Obtém a lista ligada do elemento
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
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key == key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) { //Se lista estiver vazia, removemos a instancia
                        delete this.table[position]
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}