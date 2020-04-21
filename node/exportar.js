console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1

exports.b = 2 

module.exports.c = 3

exports = null

console.log(module.exports)

exports = {
    nome:'Teste'
}
// Mesmo que eu tenha referenciado exports para outro objeto ou atributo null a ele, module.exports não sofre alteração
console.log(module.exports)

module.exports = { publico: true}