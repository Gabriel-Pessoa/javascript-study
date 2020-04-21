Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]

    for(let i = indiceInicial; i < this.length; i++) { 
        acumulador = callback(acumulador, this[i], i , this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(aluno => aluno.bolsista).reduce2((resultado, bolsista) => resultado && bolsista))


console.log(alunos.map(aluno => aluno.bolsista).reduce2((resultado,bolsista)=> resultado || bolsista))


// const notas = [0,1,2,3,4] // this

// const reducer = notas.reduce2((acumulador,valorAtual) => acumulador + valorAtual)
// console.log(reducer)
