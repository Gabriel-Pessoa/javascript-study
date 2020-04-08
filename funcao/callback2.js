const notas = [6.6, 8.8, 9.0, 10.0, 8.9, 6.7, 5.0]

let notasBaixas = []

for( i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback

// Ex1
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 //irá retornar true e armazenar no array
    } )

console.log(notasBaixas2)

// Ex2
const notasBaixas3 = notas.filter( nota => nota < 7) // irá retornar true e armazenar no array

console.log(notasBaixas3)

// Obs: posso criar um const que recebe a função arrow passada no filter, para acessar quando quiser
// const notaABaixo7 = nota => nota < 7 ; 
// O callback filter não altera o array que está filtrando, só altera o array que está adicionando