function geInteiroAletorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}
 
let opcao = 0 // Se opção = -1, o laço não será executado

while (opcao != -1){ // Enquanto a expressão for verdadeira, ele irá executar até que se torne falsa
    opcao = geInteiroAletorioEntre(-1,10) // É atribuida a variável 'opcao' a função de número aleatório
    console.log('A opção escolhida é: '+ opcao)// Imprime cada repetição gerada com o valor da varíavel 'opcao'
}

console.log('Terminamos! '); // é executado ao terminar o laço

// Estrutura parecida com for
let i = 0

while (i < 10){
    console.log('o valor de i é: '+ i);
    i++
}

console.log('o valor de i é: ' + i);