function teste1 (num) {
    if (num > 7) 
    console.log(num) // Sem a delimitação das chaves, somente essa linha de código faz parte da condição
    console.log('Final');// Essa não faz parte da condição, por isso é executada de qualquer jeito 
    
}

// teste1(8)
// teste1(6)

function teste2 (num) {
    if( num > 7) ; { // o ponto e vírgula delimita o bloco de código, sendo ele mesmo executado nesse bloco
        console.log('É verdade. É maior que 7') // Portanto essa sentença não faz parte da condição
    }
}
 
teste2(7.1)
teste2(6.9)