let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // Desafio! Retorna true, porque dá prioridade a comparar os valores primeiro
//pois o decremento está pós fixado, se tivesse pré fixado faria primeiro o decremento para depois comparar

console.log(num1 === num2) // Com a operação do decremento realizada, ele retorna false



