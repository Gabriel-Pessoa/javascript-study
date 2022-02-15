/* Algoritmo de caminho mais curtos em um grafo. Esse é um algoritmo do tipo guloso (), ou seja, segue um método
    heurístico de resolução de problemas segundo o qual fazemos a escolha ideal (a melhor solução na ocasião) em cada etapa, na esperança
    de encontrar uma solução ideal global (a melhor solução global).
*/
const { Stack } = require('../cap4-pilhas');

const INF = Number.MAX_SAFE_INTEGER;

const minDistance = (dist, visited) => {
    let min = INF;
    let minIndex = -1;
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}

const road = (predecessors, size, src) => {
    const route = [];
    route[src] = "0";

    for (let i = 1; i < size; i++) {
        const toVertex = i;
        const path = new Stack();

        for (let v = toVertex; v !== src; v = predecessors[v]) {
            path.push(v);
        }

        path.push(src);
        let s = path.pop();

        while (!path.isEmpty()) {
            s += ' - ' + path.pop();
        }

        route[i] = s;
    }
    
    return route;
}

const dijkstra = (graph, src) => {
    const dist = [];
    const visited = [];
    const predecessors = {};
    const { length } = graph;
    // inicializa todos as distâncias (dist) como INF e visited como false.
    for (let i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }

    dist[src] = 0; // definimos a distância do vértice de origem a partir de si mesmo como 0
    
    for (let i = 0; i < length - 1; i++) { // encontramos o caminho mais curto para todos os vértices
        const u = minDistance(dist, visited); // para isso, devemos selecionar o vértice com distância mínima a partir do conjunto de vértices que ainda não foram processados

        visited[u] = true; // marcamos o vértices para não calculamos ele duas vezes

        for (let v = 0; v < length; v++) {
            // caso o caminho mais curto seja encontrado, definimos o novo valor do caminho mais curto 
            if (!visited[v] &&
                graph[u][v] !== 0 &&
                dist[u] !== INF &&
                dist[u] + graph[u][v] < dist[v]
            ) {
                dist[v] = dist[u] + graph[u][v];
                predecessors[v] = u;
            }
        }
    }

    const route = road(predecessors, length, src);

    // depois que todos os vértices forem processados, devolvemos o resultado contendo o valor do caminho mais curto a partir do vértice de origem (src) para todos os vértices
    return {
        route,
        dist
    };
}

// Rodando algoritmo:
const graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0],
];

const result = dijkstra(graph, 0);

for (let i = 0; i < result.dist.length; i++) {
    console.log(`route: ${result.route[i]}, distance: ${result.dist[i]}`);
}

/* Ver pág. 323.
{
    Caminho | Distância
    A -> A = 0
    A -> B = 2
    A -> C = 4
    A -> D = 6
    A -> E = 4
    A -> F = 6
}
*/
