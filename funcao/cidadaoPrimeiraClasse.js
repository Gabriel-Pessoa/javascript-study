// 1- Criando de forma literal
function func1 () {}

// 2- Armazenar uma função uma variável
const func2 = function (){}

// 3- Armazenar uma função em uma estrutura de dados

// 3.1 Armazendo em um array
const array = [function (a,b) { return a + b }, func1, func2 ]
console.log(array[0](2,3)) // Como a função está no índice 0 do array, depois invoco usando os paren
// teses e passos os valores como parâmetro

// 3.2 Armazendo em um objeto

const obj = {} // Criei um objeto de forma literal
obj.falar = function () { return 'Opa'} // Adicionei um atributo ao 'obj' com a chave 'falar' cujo o 
// valor é uma função

console.log(obj.falar()); // Acessando uma função dentro do obj; invocando a função com ()

// 4 Retornar uma função como valor de outra função

//4.1 Função que invoca outra função 
function funcao (func) {
    func() // Só pode receber outra função como parâmetro
}

funcao (function (){ console.log('Executando... ') } ) // Passei como parâmetro uma função de forma literal

// 4.2 Função que pode retornar/conter outra função
function soma (a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2,3)(4) // Passei os dois primeiros 
const valor = soma (2,3) //Armazenei a função soma que recebe os parâmetros a,b
valor (4) // Invoquei a função que recebe como parâmetro c, retornando a soma e impressão na tela

 