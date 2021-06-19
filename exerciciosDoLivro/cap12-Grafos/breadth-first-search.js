const { graph, myVertices } = require('./cap12-grafos');
const { Queue } = require('../cap5-filasEDeques');
const { Stack } = require('../cap4-pilhas')

const Colors = {
    WHITE: 0, // vértice não visitado (not visited)
    GREY: 1, // vértice visitado, mas não explorado (visited, but not explored yet)
    BLACK: 2 // vértice foi totalmente explorado
};

const initializeColor = vertices => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
}

const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices); // objeto color, com chave igual ao vertice e valor igual ao color ("color:{ vertice:color }")
    const queue = new Queue(); // armazenará vértices visitados e explorados

    queue.enqueue(startVertex); // ponto de partida (origem)

    while (!queue.isEmpty()) {
        const u = queue.dequeue(); // remove e retorna o primeiro elemento da fila
        const neighbors = adjList.get(u); // acessa a lista de adjacencia do vértice u
        color[u] = Colors.GREY; // marca vértice como visitado, mas não explorado

        // percorre a lista de vizinhos (vértices adjacente) do vértice u
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]; // cada vizinho (vértice adjacente)
            if (color[w] === Colors.WHITE) { // se vértice ainda não visitado
                color[w] = Colors.GREY; // marca vértice como visitado, mas não explorado
                queue.enqueue(w); //add elemento ao final da fila, para acabar de explorá-lo quando for removido da fila (linha 27).
            }
        }

        color[u] = Colors.BLACK; // marca vértice como totalmente explorado
        if (callback) { // se o parâmetro "callback" da função breadthFirstSearch estiver setado
            callback(u); // invoca a função, passando como parâmetro o vértice atual
        }
    }
}

//const printVertex = (value) => console.log('Vértice visitado: ', value);
//breadthFirstSearch(graph, myVertices[0], printVertex);

const BFSToDistance = (graph, startVertex) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    const distances = {}; 
    const predecessors = {}; 
    queue.enqueue(startVertex);

    // itera por toda a lista de vertice
    for (let i = 0; i < vertices.length; i++) {
        // inicializa os objetos distances e predecessors com seus valores correspondente
        /*
            distances: { v: 0 }
            predecessors: { v: null }
        */
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;

        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }

    return {
        distances,
        predecessors
    };
}

const shortesPathA = BFSToDistance(graph, myVertices[0])
//console.log(shortesPathA);

const fromVertex = myVertices[0];

for (let i = 1; i < myVertices.length; i++) {
    const toVertex = myVertices[i];
    const path = new Stack();

    for (let v = toVertex; v !== fromVertex; v = shortesPathA.predecessors[v]) {
        path.push(v);
    }
    path.push(fromVertex)
    let s = path.pop();

    while (!path.isEmpty()) {
        s += ' - ' + path.pop();
    }
    console.log(s);
}