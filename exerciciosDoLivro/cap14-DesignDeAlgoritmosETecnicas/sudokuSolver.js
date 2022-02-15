/**
 * Primeiro passo é verificar se o quebra-cabeça foi resolvido ({1}). Se não houver espaços em branco (posiçoẽs com valor 0), é sinal 
 * de que o quebra-cabeça está completo ({4}). Contudo, se houver espaços em branco ({2}), sairemos dos dois laços ({3}) e as variáveis
 * row e col terão posição do espaço em branco que deve ser preenchido com um dígito de 1 a 9, um de cada vez ({5}). Verificamos se 
 * é seguro add o dígito ({6}), o que siginifica que ele não está presenta na linha, na coluna ou no quadrado (a matriz 3x3). Se for seguro,
 * add o dígito quebra-cabeça ({7}) e executamos a função solveSudoku novamente para tentar o próximo espaço disponível ({8}). Caso um dígito
 * seja colocado em uma posição incorreta, marcamos essa posição como vazia novamente ({9}), e o algoritmo fará o retrocesso ({10}) e tentará 
 * um dígito diferente
 */
function sudokuSolver(matrix) {
    if (solveSudoku(matrix) === true) {
        return matrix; // devolverá a matriz preenchida com os dígitos que estavam faltando, caso seja encontrada uma solução
    }

    return 'NO SOLUTION EXISTS!'; // ou devolverá uma mensagem de erro.
}

const UNASSIGNED = 0;

function solveSudoku(matrix) {
    let row = 0;
    let col = 0;
    let checkBlankSpace = false;

    for (row = 0; row < matrix.length; row++) { // {1}
        for (col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === UNASSIGNED) {
                checkBlankSpace = true; // {2}
                break;
            }
        }
        if (checkBlankSpace === true) { // {3}
            break;
        }
    }

    if (checkBlankSpace === false) {
        return true; // {4}
    }

    for (let num = 1; num <= 9; num++) { // {5}
        if (isSafe(matrix, row, col, num)) { // {6}
            matrix[row][col] = num; // {7}
            if (solveSudoku(matrix)) { // {8}
                return true;
            }
            matrix[row][col] = UNASSIGNED; // {9}
        }
    }

    return false; // {10}
}

function isSafe(matrix, row, col, num) {
    return (
        !usedInRow(matrix, row, num) &&
        !usedInCol(matrix, col, num) &&
        !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
    );
}

function usedInRow(matrix, row, num) {
    // Verificamos se o dígito já existe na linha (row), iterando por todas as posições da matriz na linha (row)
    // especificada.
    for (let col = 0; col < matrix.length; col++) {
        if (matrix[row][col] === num) {
            return true;
        }
    }
    return false;
}

function usedInCol(matrix, col, num) {
    // Iteramos por todas as colunas para verificar se o dígito já existe na dada coluna
    for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][col] === num) {
            return true;
        }
    }
    return false;
}

function usedInBox(matrix, boxStartRow, boxStartCol, num) {
    // Consiste em ver se o dígito existe no quadrado, iterando por todas as posições da matriz quadrada 3x3
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (matrix[row + boxStartRow][col + boxStartCol] === num) {
                return true;
            }
        }
    }
    return false;
}

// Test 
const sudokuGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(sudokuSolver(sudokuGrid));