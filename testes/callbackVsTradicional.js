const fabricantes = ['Mercedes','Audi','BMW']

// for(i in fabricantes) {
//     console.log(`${ ( parseInt(i) +1 ) }. ${fabricantes[i]}`)
// }

// Com callback

const imprimirFabricantes = function (nome, indice) {
    console.log( ` ${indice + 1}. ${nome} `)
}

fabricantes.forEach(imprimirFabricantes)
