const alunos = [
    {nome:'João',nota:7.5},
    {nome:'Maria',nota:8.5},
    {nome:'José',nota:9.5},
    {nome:'Jonas',nota:6}
]

// Imperativa - Diz como o programa deve proceder

let soma = 0
for (let i = 0; i < alunos.length; i++ ) {
    soma += alunos[i].nota 
}
console.log(soma / alunos.length) //Média

// Declarativa

const getSoma = (soma, atual) => soma + atual
const  getNota = aluno => aluno.nota

const soma2 = alunos.map(getNota).reduce(getSoma)

console.log(soma2 / alunos.length)
