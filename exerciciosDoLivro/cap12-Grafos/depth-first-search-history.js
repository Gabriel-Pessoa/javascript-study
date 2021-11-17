const { Colors, initializeColor } = require('../utils');
const { Graph, graph, myVertices } = require("./cap12-grafos");


const DFSHistory = graph => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const d = {};
    const f = {};
    const p = {};
    const time = { count: 0 }; // objeto aponta para uma referência de memória (ponteiro)

    for (let i = 0; i < vertices.length; i++) {
        d[vertices[i]] = 0;
        f[vertices[i]] = 0;
        p[vertices[i]] = null;
    }

    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            // passando valor por referência com o objeto 'time'
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }

    return {
        discovery: d,
        finished: f,
        predecessors: p,
    };
}

const DFSVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.GREY;
    d[u] = ++time.count; // quando um vértice é descoberto, registramos o instante da sua descoberta

    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            p[w] = u; // quando ele for descoberto como uma aresta de u, registramos também o seu antecessor
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }
    color[u] = Colors.BLACK;
    f[u] = ++time.count;
}

// Teste 1 
//console.log(DFSHistory(graph));

// Teste2: Grafo Acíclico Direcionado (pág.320)
const directedGraph = new Graph(true);
const myVertices2 = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myVertices2.length; i++) {
    directedGraph.addVertex(myVertices2[i]);
}
directedGraph.addEdge('A', 'C');
directedGraph.addEdge('A', 'D');
directedGraph.addEdge('B', 'D');
directedGraph.addEdge('B', 'E');
directedGraph.addEdge('C', 'F');
directedGraph.addEdge('F', 'E');

const result = DFSHistory(directedGraph);
//console.log(result);

//Ordenação Topológica (pág.321)
const fTimes = result.finished;
console.log(fTimes)
let s = '';
for (let count = 0; count < myVertices2.length; count++) {
    let max = 0;
    let maxName = null;

    // resultado válido: A - B - C - D - E - F
    // if (fTimes[myVertices2[count]] > max) {
    //     max = fTimes[myVertices2[count]];
    //     maxName = myVertices2[count];
    // }

    // resultado válido: B - A - D - C - F - E
    for (let i = 0; i < myVertices2.length; i++) {
        if (fTimes[myVertices2[i]] > max) {
            max = fTimes[myVertices2[i]];
            maxName = myVertices2[i];
        }
    }

    s += ' - ' + maxName;
    if (count === 0) s = maxName;
   
    delete fTimes[maxName];
}

console.log(s);

module.exports = { DFSHistory };
