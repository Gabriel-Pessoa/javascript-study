let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //! interrogação é operador de negação, para testar se um valor é true || false 

console.log('Os verdadeiros ...')
console.log(!!3)
console.log(!!-1)  
console.log(!!' ')
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar')

/* Operador 'OU' lógico, retorna o primeiro dado que ele encontra que 
seja verdadeiro */
console.log(!!('' || null || 0 ||'epa')) // No caso o primeiro valor verdadeiro é o 'epa' 

let nome = 'Lucas'

/* Esse exemplo mostra o que operador lógico 'OU' pode realizar, se o 
primeiro for falso ele procura o próximo para ver se é verdadeiro,
e apresenta na tela.   */
console.log( nome || 'Desconhecido') 
// Se a váriavel nome estiver vazia, ele apresentará Desconhecido

    

