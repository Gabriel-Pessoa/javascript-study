const { Dictionary } = require('../cap8-DicionariosEHashes/dictionary');

class Graph {
    constructor(isDirected = false) { // recebe parâmetro para grafo direcionado ou não; por padrão: não.
        this.isDirected = isDirected;
        this.vertices = []; // array para armazenar os nomes de todos os vértices
        this.adjList = new Dictionary(); // dicionário(utiliza o nome de vértice como chave) para armazenar a lista de adjacências.
    }

    // add novo vértice
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }

    // add arestas entre os vértices
    addEdge(v, w) { // recebe dois vértices como parâmetro: os vértices que queremos ligar no grafo.
        // caso vértice v não exista no grafo, add
        if (!this.adjList.hasKey(v)) {
            this.addVertex(v);
        }
        // caso vértice w não exista no grafo, add
        if (!this.adjList.hasKey(w)) {
            this.addVertex(w);
        }
        // adquiri vértice v na lista e add vértice w como sua adjacência
        this.adjList.get(v).push(w);


        // caso grafo não direcionado
        if (!this.isDirected) {
            // faz o inverso tbm: adquiri vértice w na lista e add vértice v como sua adjacência
            this.adjList.get(w).push(v);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }
            s += '\n';
        }
        return s;
    }
}

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// Teste
// console.log(graph.toString());

module.exports = { graph, myVertices };