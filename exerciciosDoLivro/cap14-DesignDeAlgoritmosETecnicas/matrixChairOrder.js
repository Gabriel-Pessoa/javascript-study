/**
 * O problema consiste em encontrar a melhor maneira (ordem) de multiplicar um conjunto de matrizes.
 */
function matrixChainOrder(p) {
    const n = p.length;
    const m = [];
    const s = []; // {2} código adicional

    for (let i = 0; i <= n; i++) {
        s[i] = [];
        for (let j = 0; j <= n; j++) {
            s[i][j] = 0;
        }
    }

    for (let i = 1; i <= n; i++) {
        m[i] = [];
        m[i][i] = 0;
    }

    for (let l = 2; l < n; l++) {
        for (let i = 1; i <= (n - l); i++) {
            const j = (i + l) - 1;
            m[i][j] = Number.MAX_SAFE_INTEGER;
            for (let k = i; k <= j - 1; k++) {
                const q = m[i][k] + m[k + 1][j] + ((p[i - 1] * p[k]) * p[j]);
                if (q < m[i][j]) {
                    s[i][j] = k;
                    m[i][j] = q;
                }
            }
        }
    }

    printOptimalParenthesis(s, 1, n - 1);
    return m[1][n - 1];
}

function printOptimalParenthesis(s, i, j) {
    if (i === j) {
        console.log("A[" + i + "]");
    } else {
        console.log("(");
        printOptimalParenthesis(s, i, s[i][j]);
        printOptimalParenthesis(s, s[i][j] + 1, j);
        console.log(")");
    }
}

// Test 
const p = [10, 100, 5, 50, 1];
console.log(matrixChainOrder(p));