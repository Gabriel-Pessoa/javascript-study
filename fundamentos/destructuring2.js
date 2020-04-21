/* Destructuring de array de forma literal, cria a var 'a' e atribui o primeiro valor
que é '10' */
const [a] = [10] 

const [n1, ,n3, ,n5, n6=0] = [10,7,9,8]

console.log(n1,n3,n5,n6)    

/* Array de array = matriz. Destructuring de array, ignora a pos 0 do array 1, 
e na pos 1 do array 1 cria o array 2, ignora a pos 0 do array 2 e cria uma
variável 'nota' na pos 1 do array 2 
*/
const [,[,nota]] = [[,8,8] , [9,6,8]] /*primeiro par de colchete é a pos 0 do array 1,
a vírgula separa a pos 1 do array 1 onde está o array2, o segundo par de colchete é
o array 2*/

console.log(nota);
