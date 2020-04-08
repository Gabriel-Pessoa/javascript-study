// Estrátegia 1 para formatar valores padrões caso a,b,c não informados (Null ou Undefined ou NaN)
function soma1(a,b,c) {
    a = a || 1 // Operador || (ou) se o primeiro for falso, ele retorna o segundo caso true.
    b = b || 1 // Como null, undefined, NaN são falsos na linguagem, ele convertera para 1 
    c = c || 1 // que é verdadeiro
    return a + b + c
}

console.log( soma1() , soma1(3) , soma1(1,2,3) , soma1(0,0,0) ) // Efeito colateral, pois zero na linguagem é falso. Irá retornar 3

// Estratégia 2,3 e 4
function soma2(a,b,c) {
    a = a !== undefined ? a : 1 // Estratégia não indicada, caso null, irá assumir valor de a
    b = 1 in arguments ? b : 1 //Dentro do índice 1 existe o valor de b, senão pegue o valor de 1
    c = isNaN(c) ? 1 : c // Se variável c é NaN retorne valor padrão 1, senão c
    // Essa talvez seja a forma mais segura 
    return a + b + c
}

// Estratégia 5 ES2015 
console.log(soma2(), soma2(3) , soma2(1,2,3) , soma2(0,0,0) )

function soma3 ( a=1, b=1 , c=1) {
    return a + b + c
}

// Se tiver criado uma variável dentro de uma função, você ira usar a 1 primeira estratégia

console.log(soma3(), soma3(3) , soma3(1,2,3) , soma3(0,0,0) )
