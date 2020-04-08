function mediaAritmeticaVetor(args) {
    let somatorio = 0
    for (let i in args) {
        somatorio += args[i]
    }
    console.log(`A média aritmética é = ${somatorio / args.length}`)
}
const vetorInteiros= [10,20,30]
mediaAritmeticaVetor(vetorInteiros)