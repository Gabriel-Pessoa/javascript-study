console.log( this === global) // this aponta para module.exports. this é um objeto que é exatamente igual a module.exports
console.log(this === module) // this aponta para module.exports 

console.log(this === module.exports) // Verdadeiro
console.log(this === exports) // Verdadeiro, pois exports aponta para a mesma referência de mémoria

function logThis() {
    console.log('Dentro da função!')
    console.log('1.', this === module.exports)
    console.log('2.', this === exports)
    console.log('3.', this === global)
      // Cuidadooo!!! Faz o exemplo abaixo, é colocar atributos no objeto global
      // this.perigo = '..'

}

logThis()