/**
 * Algoritmo de backtracking: é usado para encontrar e compor uma solução de forma incremental. Começamos com um possível movimento
 * e tentamos resolver o problema com o movimento selecionado. Se não funcionar, retrocedemos (fazemos um backtracking) e então 
 * selecionamos outro movimento, e assim por diante, até termos resolvido o problema.
 */
function ratInMaze(maze) {
    const solution = []; // matriz que conterá a solução

    for (let i = 0; i < maze.length; i++) {
        solution[i] = [];
        for (let j = 0; j < maze[i].length; j++) {
            solution[i][j] = 0; // Inicializamos todas as posições com zero
        }
    }

    // se o algoritmo for capaz de encontrar uma solução, ele devolverá a matriz solution ({2}),
    // ou devolverá uma mensagem de erro ({3}), caso contrário
    if (findPath(maze, 0, 0, solution) === true) {
        return solution; // {2}
    }

    return 'NO PATH FOUND'; // {3}
}

/**
 * Primeiro passo do algoritmo é verificar se o rato alcançou o destino ({4}). Em caso afirmativo, marcamos a última posição como parte
 * do caminho e devolvemos true, o que significa que o movimento foi bem-sucedido. Se não for a última posição, verificamos se é seguro 
 * para o rato mover-se para a posição ({5}, o que significa que a posição está livre, conforme declarado no método isSafe apresentado
 * adiante). Se forseguro, adicionamos o movimento no caminho ({6}) e tentaremos nos deslocar verticalmente para a próxima posição, em 
 * direção à parte inferior da matriz ({8}). Se não for possível nos movermos horizontalmente nem verticalmente, removemos o movimento
 * do caminho e retrocedemos ({9}), o que significa que o algoritmo tentará outra solução possivel. Depois de tentar todos os movimentos
 * possíveis e uma solução não for encontrada, ele devolverá false ({10}).
 */
function findPath(maze, x, y, solution) {
    const n = maze.length;

    if (x === n - 1 && y === n - 1) { // {4}
        solution[x][y] = 1;
        return true;
    }

    if (isSafe(maze, x, y) === true) { // {5}
        solution[x][y] = 1; // {6}
        if (findPath(maze, x + 1, y, solution)) { // {7}
            return true;
        }
        if (findPath(maze, x, y + 1, solution)) { // {8}
            return true;
        }
        solution[x][y] = 0; // {9}
        return false;
    }

    return false; // {10}
}

function isSafe(maze, x, y) {
    const n = maze.length;
    if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
        return true;
    }
    return false;
}

// Test 
const maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
];

console.log(ratInMaze(maze));