const soma = function (x,y) { // Declaração de função anônima
    return x + y
}

const imprimirSoma = function (a, b, operacao = soma) { // Declaração de de outra função anônima
    console.log(operacao(a,b)) // Criei uma variável que recebe a função soma
}

imprimirSoma(3,4)
imprimirSoma(3,4,soma)
imprimirSoma(3,4, function (x,y) { // No terceiro parâmetro passei uma função que subtrai o primeiro 
    return x - y                  // e o segundo parâmetro
})

imprimirSoma(3,4, (x,y) => x*y) // Criei uma função arrow no terceiro parâmetro que multiplica o pri-
                                // meiro e o segundo parâmetro
const pessoa = {
    falar: function () { // Ou podia colocar direto falar ()
        console.log('Opa')
    }
}

pessoa.falar()