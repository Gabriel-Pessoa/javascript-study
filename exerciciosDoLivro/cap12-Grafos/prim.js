
const INF = Number.MAX_SAFE_INTEGER;

const minKey = (graph, key, visited) => {
    let min = INF;
    let minIndex = 0;

    for (let v = 0; v < graph.length; v++) {
        if (visited[v] === false && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }

    return minIndex;
}

const prim = graph => {
    const parent = [];
    const key = [];
    const visited = [];
    const { length } = graph;

    for (let i = 0; i < length; i++) {
        key[i] = INF;
        visited[i] = false;
    }

    key[0] = 0; // primeiro vértice é sempre o nó raiz
    parent[0] = -1; // idem do comentário acima

    for (let i = 0; i < length - 1; i++) {
        const u = minKey(graph, key, visited); // vértice com key mínima

        visited[u] = true;

        for (let v = 0; v < length; v++) {
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) { // peso mínimo encontrado, 
                parent[v] = u; // armazenaremos o caminho 
                key[v] = graph[u][v]; // definimos o novo custo
            }
        }
    }

    return parent;
}

// Teste

const graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
];

const parent = prim(graph);
console.log('Edge   Weight');
for (let i = 1; i < graph.length; i++) {
  console.log(parent[i] + ' - ' + i + '   ' + graph[i][parent[i]]);
}
