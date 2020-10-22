//Recursão Direta
function recursiveFunction(someParam) {
    recursiveFunction(someParam);
}

//Recursão Indireta
function recursiveFunction1(someParam) {
    recursiveFunction2(someParam);
}

function recursiveFunction2(someParam) {
    recursiveFunction1(someParam);
}

//Entendendo recursão
function understandRecursion(doIUnderstandRecursion) {
    const recursionAnswer = confirm('Do you understand recursion?');
    if (recursionAnswer === true) { //Ponto de parada, para evitar execução infinita.
        return true;
    }
    understandRecursion(recursionAnswer);
}

/*  Ex1: Fatorial */
// Sem Recursão
function factorialIterative(number) {
    if (number < 0) return undefined;
    let total = 1;
    for (let n = number; n > 1; n--) {
        total = total * n;
    }
    return total;
}

//Com Recursão
function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


/* Ex2: Fibonacci*/
//Sem Recursão
function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) { // n >= 2
        fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN
    }
    return fibN;
}

//Com recursão
function fibonacci(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//Com Memoization
function fibonacciMemoization(n) {
    const memo = [0, 1];
    const fibonacci = (n) => {
        if (memo[n] != null) return memo[n];
        return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    }
    return fibonacci;
}