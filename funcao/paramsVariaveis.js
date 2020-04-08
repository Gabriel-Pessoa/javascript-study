function soma() {
    let soma = 0
    for ( i in arguments ) { // Arguments é um objeto similar ao array, que armazena os argumentos de uma função
        soma += arguments[i] // Os argumentos armazenados são somados à medida que são acrescentados
    }
    return console.log(soma);
}

soma(2,4,6)
/* arguments [0] = 2 ,arguments [1] = 4 , arguments [2] = 6  */

soma(2,4,6,' Olá',' Ana') // Com o operador aditivo para a variável soma dentro da função,serve 
// tanto para somar, como para concatenar 