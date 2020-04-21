const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio1: Usando reduce. Todos os alunos são bolsistas?

console.log(alunos.map(aluno => aluno.bolsista).reduce((resultado, bolsista) => resultado && bolsista))


//Desafio2 : Usando reduce. Algum aluno é bolsistas?

console.log(alunos.map(aluno => aluno.bolsista).reduce((resultado,bolsista)=> resultado || bolsista))