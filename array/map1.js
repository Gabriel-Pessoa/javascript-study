/**Serve para fazer uma transformação no array original. Mapea o array atual e transforma (a partir de comandos de uma função) em outro array do mesmo tamanho.
 * Transforma praticamente todos os tipos de dados (number, string, bool, JSON, Object).
 *  A única regra é que o tamanho do array criado pelo map é igual ao tamanho do array original.
 */

 // English
 /**To serve to make a transformation in the original array. Map the current matrix and transform (using commands from a function) into another matrix of the same size.
  *  Transform virtually all types of data (number, string, bool, JSON, Object). 
  * A single rule is the size of the matrix created by the map is equal to the size of the original matrix.
  */

const numbers = [1, 2, 3, 4, 5]

// For com próposito. Praticamente idêntico ao callback
// For purpose. Virtually identical to the callback

let result = numbers.map(e => e*2 )

console.log(result)


const sum10 = e => e+10
const triple = e=> e*3
const forCurrency = e => `R$ ${parseFloat(e).toFixed(2).replace('.' , ',')}`

// Successive transformations
result = numbers.map(sum10).map(triple).map(forCurrency)

console.log(result)