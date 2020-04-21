function random({min=0,max=1000}) { // Operador destructuring passado com parâmetro que recebe somente objetos
    const valor = Math.random() * (max-min) + min // random função randômica
    return Math.floor(valor) // return número inteiro dentro do parâmetro 
}

const obj = { min:45, max:50 } // Criei objeto chamado obj

console.log(random(obj)) // Passei obj como parâmetro na função random que só aceita obj por causa do 
// destructuring
console.log(random({min:100, max:1000})); // Passei objetos de forma literal como parâmetro
console.log(random({ min:955 }) ) // como max e min já estão com valores definidos na função, posso optar por
// um deles 
 console.log(random({}));// como max e min já estão com valores definidos na função, posso optar por
 // somente a função
