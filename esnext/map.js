const tecnologias = new Map()

tecnologias.set('react',{ framework:false })
tecnologias.set('angular',{ framework:true })

console.log(tecnologias.get('react')) // A chave que queremos acessar
console.log(tecnologias.get('react').framework) //ou o valor diretamente 

//criando um map já atribuindo elementos
const chavesVariadas = new Map([ 
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Números'],
])

chavesVariadas.forEach((valor,chave)=>{
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) // .has método que retorna se chave está presente no map 
chavesVariadas.delete(123) // delete retorna true ou false também, se deletou, true
console.log(chavesVariadas.has(123)) 

console.log(chavesVariadas.size) // tamanho do map

chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b') // map não aceita chaves repetidas, então sobrescreveu a de cima
chavesVariadas.set(456,'b') // Map aceita valores repetidos

console.log(chavesVariadas)





