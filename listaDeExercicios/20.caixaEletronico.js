function saque(valor) {
    let nota1 = 0, nota5 = 0, nota10 = 0, nota50 = 0, nota100 = 0;
    let valorInicial = valor

    while (valor != 0) {

        if (valor >= 100) {
            nota100++
            valor -= 100
        }
        else if (valor >= 50) {
            nota50++
            valor -= 50
        }
        else if (valor >= 10) {
            nota10++
            valor -= 10
        }
        else if (valor >= 5) {
            nota5++
            valor -= 5
        }
        else if (valor >= 1) {
            nota1++
            valor -= 1
        }
        else {
            return console.log ('Valor inválido')
        }
    }
    console.log(`${nota100} notas de R$ 100. ${nota50} notas de R$ 50. ${nota10} notas de R$ 10. 
    ${nota5} notas de R$ 5. ${nota1} notas de R$ 1. Valor do saque R$ ${valorInicial}
    ` )
}
saque(250)
saque(18)
saque(-4)


