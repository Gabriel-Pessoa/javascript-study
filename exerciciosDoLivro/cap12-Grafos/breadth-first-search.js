const { graph, myVertices } = require('./cap12-grafos');
const { Queue } = require('../cap5-filasEDeques');

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

        color[u] = Colors.BLACK;
        if (callback) {
            callback(u);
        }
    }
}

const printVertex = (value) => console.log('Vértice visitado: ', value);

breadthFirstSearch(graph, myVertices[0], printVertex);
