//ForEach percorre cada índice do array, retornando respectivamente nome e índice geralmente
const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach( (nome,indice) => console.log(`${indice+1}. ${nome}`))

aprovados.forEach( nome => console.log(nome))

const exibirAprovado = function (nome) {
    console.log(nome)
}

aprovados.forEach(exibirAprovado)

//Pode receber até o terceiro parâmetro que é o array
aprovados.forEach( (nome,indice,array) => {
     console.log(`${indice+1}. ${nome}`) 
     console.log(array) 
    }) 