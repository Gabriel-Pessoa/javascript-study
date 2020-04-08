function quantidadeParesEImpares(args) {
    let pares = 0
    let impares = 0
    for (let i = 0; i <= args.length; i++) {

        if ((args[i] % 2) == 0) {
            pares++
        }
        else {
            impares++
        }
    }
    console.log(`A quantidade de pares são = ${pares}, e a quantidade de impares são = ${impares}`)
}
let paresEImpares = [2,1,3,4,5,12,34,12]
quantidadeParesEImpares(paresEImpares)