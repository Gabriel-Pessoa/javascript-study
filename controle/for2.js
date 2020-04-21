const notas = [6.6, 10, 4.5, 7.8] // Array

for(let i in notas ) { // Recomendado utilizar let para a variável ficar acessível somente no 
                       // bloco do for. 'I' é o índice
    console.log(i, notas[i]);    
}

const pessoa = {
    nome:'Gabriel',
    sobrenome: 'Pessoa',
    idade: 24,
    peso: 75
}


for(let atributo in pessoa) { // variável atributo assume os nome dos atributos  
    console.log(` ${atributo} = ${pessoa[atributo]} `)
}

