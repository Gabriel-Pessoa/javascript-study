let comparaComThis = function (param) {
    console.log( this === param)
}

comparaComThis(global) // Cuidado ao chamar o this dentro de uma função pois estará trabalhando 
                      // com o escopo global
const obj = {}
comparaComThis = comparaComThis.bind(obj) // Irá fazer que o this aponto para 'obj'

comparaComThis(global) // False, pq aponta para obj agora
comparaComThis(obj) // True, pq aponto para o próprio 'obj'

let comparaComThisArrow = param => console.log(this === param) // Arrow fuction, que trava o this no
// contexto que a função foi escrita. 

comparaComThisArrow(global) // A função arrow foi escrita no contexto contexto léxico no module.
comparaComThisArrow(module.exports) // This na funcção arrow escrita no contexto global aponta para o module.
comparaComThisArrow(this) // This é igual ao this dentro da função arrow que é passado como parâme-
                         // tro

comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj)// Arrow fuction ganha para bind, mesmo eu forçando o this aponta para 
// obj, ele não abre pq foi definido dentro de arrow fuction
comparaComThisArrow(module.exports) // Continua firme no contexto léxico onde foi escrito o arrow 
// fuction no module

