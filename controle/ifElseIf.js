// Com a palavra reservada prototype eu consigo acessar o link para o objeto e criar uma nova chave "entre" 
// e atribuir um função que recebe dois parâmetros 
Number.prototype.entre = function (inicio , fim) {
    return this >= inicio && this <= fim // O this aqui é o próprio Number. Nessa operação ele retorna um boolean
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de Honra. Tu é bem pow! ' + nota)        
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado = Mediano ' + nota)        
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação mané ' + nota)        
    } else if (nota.entre(0, 3.99)) {
        console.log('Maí tu é besta. Reprovado! '+ nota);
    } else {
        console.log('Nota inválida ' + nota);        
    }
}

imprimirResultado(10)
imprimirResultado(8.1)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)