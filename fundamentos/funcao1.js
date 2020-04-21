// Função sem retorno
function imprimirSoma (a, b)
{
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma (2) // number + undefined = Nan
imprimirSoma( 2, 10, 4, 5, 6, 7, 8) // Ele considera os dois primeiros parâmetros
imprimirSoma() // Somou 'a'+'b' e retornou NaN

// Função com retorno
// Podemos atribuir um valor a variavel dentro do parâmetro da função 
function soma (a, b = 0) 
{
    return a + b
}
console.log(soma(2,3))

// Como b=0 por padrão no parâmetro da função não irá retornar Nan
console.log(soma(2)) 

// Não foi definido o primeiro parâmetro, por isso retorna NaN
console.log(soma())