const { graph } = require("./cap12-grafos");
const { Colors, initializeColor } = require('./utils');

const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
}

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY;

    if (callback) {
        callback(u);
    }
    //console.log('Descoberto: ' + u);
    const neighbors = adjList.get(u); 
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]; 
        if (color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w, color, adjList, callback); // a const w será visitada nas próximas pilhas da função
        }
    }

    color[u] = Colors.BLACK;
    //console.log('explorado ' + u);
}

const printVertex = (value) => console.log('Vértice visitado: ', value);

depthFirstSearch(graph);
