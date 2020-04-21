const pilotos = ['Vettel', 'Alonso','Raikkonen','Massa']
pilotos.pop() // Apaga o último elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona ao primeiro (é um push ao contrário)
console.log(pilotos)

// adicionar com splice
pilotos.splice( 2 , 0 , 'Bottas' , 'Massa') // Irá adicionar antes do índice 2
console.log(pilotos)

//Remover 
pilotos.splice(3,1)
console.log(pilotos)

// copia de array com slice

const algunsPilotos1 = pilotos.slice(2) // Cria um cópia do array pilotos a partir do índice 2
console.log(algunsPilotos1) 

const algunsPilotos2 = pilotos.slice(1,4) // Copia o array pilotos do índice 1 até o 4; sem incluir o 4.
console.log(algunsPilotos2)
