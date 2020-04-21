// Set não é indexado
const times = new Set()

times.add('Vasco')
times.add('Corinthians')
times.add('São Paulo').add('Grêmio').add('Internacional') // sdd muitos de uma vez
times.add('Vasco') // Ignorou, pois ja tem 

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Lucas','Raquel','Julia','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet) // Lucas na última posição do array foi excluído pois se repete com o primeiro
