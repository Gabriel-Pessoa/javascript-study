function numerosPares(inicio = 0,fim = 0) {
    let pares = []
    for ( let i = inicio; i <= fim; i++) {
        if (i%2 == 0) {
            pares.push(i)
        }
    }     
return pares
}

console.log(numerosPares(1,100))
console.log(numerosPares(0,100))
console.log(numerosPares(13,55))

