/*
function multiply (a, b) {
    //poderia atribuir um valor padrão, porém tem um problema caso 
    //o segundo argumento seja zero, que é convertido para false.
    b = b || 1;

    // Seria mais correto, porém mais verboso dessa forma abaixo:
    b = typeof b === 'undefined' ? 1 : b; 

    return a * b;
}

console.log(multiply(5, 5));
console.log(multiply(5)); // Ao multiplicar apenas um argumento, ele multiplica por undefined, gerando um NaN

*/

// Tem o mesmo comportamento da função acima, porém menos verboso
// A ordem importa

function randomNumber() {
    return Math.random() * 10;
}

function multiply2(a, b = 1) {
    return a * b;
}

console.log(multiply2(5, 5));
console.log(multiply2(5)); 



// Posso atribuir uma função como default arguments (lazy evalution)
function randomNumber() {
    return Math.random() * 10;
}

function multiply3(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply3(5)); 


