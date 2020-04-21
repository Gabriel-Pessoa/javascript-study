// Arrow Fuction, sempre são anônimas, por isso sempre atribuimos ela a uma varíavel, sem chaves ela tem o retorno implícito
const soma = (a, b) => a + b
console.log(soma(2,3))

// Contexto léxico this
console.log(this === exports) // Fora de uma função this aponta para o mesmo objeto exports que é a mesma coisa de mudole.exports

const lexico1 = () => console.log(this === exports) // dentro de uma função this aponta para global. No qual devemos ter cuidado ao fazer this.var = .... Mas como se trata de
                                                   // arrow fuction ela sempre aponta o this para o contexto que definimos                                                
lexico1()

const lexico2 = lexico1.bind({}) // Mesmo que eu forçasse com bind,call ou apply, o this de uma arrow fuction permanece apontando para o que definimos acima
lexico2()

function lexico3() {
    return console.log(this === exports) // False porque this aponta para global dentro de uma função
}
lexico3()

const lexico4 = lexico3.bind(exports) // Permanece fora da dunção aponta para exports, outros mostrará falso
lexico4()


//Parametro default 
function log(texto = 'Node') { // Caso o parâmetro default, definimos um valor padrão que assumirá
    console.log(texto)
}

log() //Sem parâmetro, assume o valor padrão
log('Sou mais forte') // Assume o valor do parâmetro


// Operador rest
function total(...numeros) { // cria um array dentro da função (numeros, funções, objetos,strings)
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(4,3,7,8,45))