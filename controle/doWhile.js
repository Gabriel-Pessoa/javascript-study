const numeroAleaInt = function (min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // Mesmo com opção = -1, o laço será executado modificando o valor de opção até que
// se torne -1 de novo

do {
    opcao = numeroAleaInt(-1,10)
    console.log('A opção escolhida foi: '+ opcao)
} while (opcao != -1)

console.log('Terminamos! ');
