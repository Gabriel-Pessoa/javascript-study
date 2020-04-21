function Aula(nome,videoID) {
    this.nome = nome
    this.videoID = videoID
} 

const aula1 = new Aula('Introdução', 123)
const aula2 = new Aula('Conclusão', 456)

console.log(aula1,aula2);

// Criei uma função que simula o operador 'NEW'
function novo(f, ...params) { 
    const obj = {}
    obj._proto__ = f.prototype
    f.apply(obj, params) // O apply serve para indicar para quem o this irá apontar
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Conclusão', 456)

console.log(aula3,aula4);
