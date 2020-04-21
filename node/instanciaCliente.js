const contadorA = require ('./instanciaUnica')
const contadorB = require ('./instanciaUnica')
const contadorC = require ('./instanciaNova')() // Cuidado!! Com se trata de uma função factory e module.exports retorna uma função, para invoca-lá temos que usar os parenteses
const contadorD = require ('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // Conseguimos driblar o cache do node com a fuction factory
