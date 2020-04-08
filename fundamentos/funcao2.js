// Armazenando um função numa constante ou variável
const imprimirSoma = function soma (a , b)
{
    console.log(a+b)
}

imprimirSoma (2,3)

// Armazenando uma função arrow numa constante ou variável
const soma = (a , b) => { // Arrow fuction 
    return a+b 
}
console.log(soma (2,3))

// Retorno implicito
const subtracao = (a, b) => a-b // Arrow fuction reduzida com retorno implícito que recebe dois parâmetros
console.log(subtracao(2,3))

// Retorno implicito com apenas 1 parâmetro
const imprimir2 = a => console.log(a) // Arrow fuction reduzida com retorno implícito que recebe 1 parâmetro
imprimir2('Legal!!')

