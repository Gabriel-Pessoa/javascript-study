const { graph, myVertices } = require('./cap12-grafos');
const { Queue } = require('../cap5-filasEDeques');
const { Stack } = require('../cap4-pilhas');
const { Colors, initializeColor } = require('../utils');


const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices); // objeto color, com chave igual ao vertice e valor igual ao color ("color:{ vertice:color }")
    const queue = new Queue(); // armazenará vértices visitados e explorados

    queue.enqueue(startVertex); // ponto de partida (origem)

    while (!queue.isEmpty()) {
        const u = queue.dequeue(); // remove e retorna o primeiro elemento da fila
        const neighbors = adjList.get(u); // acessa a lista de adjacência do vértice u
        color[u] = Colors.GREY; // marca vértice como visitado, mas não explorado

        // percorre a lista de vizinhos (vértices adjacente) do vértice u
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]; // cada vizinho (vértice adjacente)
            if (color[w] === Colors.WHITE) { // se vértice ainda não visitado
                color[w] = Colors.GREY; // marca vértice como visitado, mas não explorado
                queue.enqueue(w); //add elemento ao final da fila, para acabar de explorá-lo quando for removido da fila (linha 17).
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
console.log(shortesPathA);

const fromVertex = myVertices[0]; // vértice de origem

for (let i = 1; i < myVertices.length; i++) {
    const toVertex = myVertices[i]; // vértice de destino atual
    const path = new Stack(); // CUIDADO!!! Cria uma instância a cada iteração

    for (let v = toVertex; v !== fromVertex; v = shortesPathA.predecessors[v]) {
        path.push(v);
    }
    path.push(fromVertex); // add vértice de origem para caminho completo
    let vertexSequence = path.pop();
    let s = vertexSequence;
    let d = shortesPathA.distances[vertexSequence];

    while (!path.isEmpty()) {
        vertexSequence = path.pop()
        s += ' - ' + vertexSequence;
        d = shortesPathA.distances[vertexSequence]; // ida e volta: d += shortesPath...
    }
    console.log("caminho: ", s);
    console.log(`distância: ${d} \n`);
}
