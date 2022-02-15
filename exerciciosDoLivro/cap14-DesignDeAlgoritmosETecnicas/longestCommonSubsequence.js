/**
 * Esse problema consiste em encontrar o tamanho da maior subsequência em duas sequências de string.
 * A maior subsequência é uma sequência que aparece na mesma ordem relativa, mas não precisa ser 
 * necessariamente contígua (não é uma substring) nas duas strings.
 * EX:
 *  string 1 'acbaed'
 *  string 2 'abcadf'
 *  LCS: "acad" com tamanho 4
 */
function lcs(wordX, wordY) {
    const m = wordX.length;
    const n = wordY.length;
    const l = [];
    const solution = []; // código adicional para printar solução

    for (let i = 0; i <= m; i++) {
        l[i] = [];
        solution[i] = []; // código adicional para printar solução

        for (let j = 0; j <= n; j++) {
            l[i][j] = 0;
            solution[i][j] = '0';
        }
    }

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                l[i][j] = 0;
            } else if (wordX[i - 1] === wordY[j - 1]) {
                l[i][j] = l[i - 1][j - 1] + 1;
                solution[i][j] = 'diagonal'; // código adicional para printar solução
            } else {
                const a = l[i - 1][j];
                const b = l[i][j - 1];

                l[i][j] = a > b ? a : b; // max(a, b)
                solution[i][j] = (l[i][j] == l[i - 1][j]) ? 'top' : 'left'; // código adicional para printar solução
            }
        }
    }

    printSolution(solution, wordX, m, n); // código adicional para printar solução
    return l[m][n];
}

function printSolution(solution, wordX, m, n) {
    let a = m;
    let b = n;
    let x = solution[a][b];
    let answer = '';

    while (x !== '0') {
        if (solution[a][b] === 'diagonal') {
            answer = wordX[a - 1] + answer;
            a--;
            b--;
        } else if (solution[a][b] === 'left') {
            b--;
        } else if (solution[a][b] === 'top') {
            a--;
        }
        x = solution[a][b];
    }
    console.log('lcs: ' + answer);
}

// Test
const stringA = 'acbaed';
const stringB = 'abcadf';

console.log(lcs(stringA, stringB)); // 4