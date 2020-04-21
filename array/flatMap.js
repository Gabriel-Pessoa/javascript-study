const  escola = [{
    nome:'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome:'Ana',
        nota:9.3
    }],
    nome:'Turma M2',
    alunos:[{
        nome:'Rebeca',
        nota:8.9
    }, {
        nome:'Roberto',
        nota:7.3
    }]
}]

console.log(escola)


const getNota = aluno => aluno.nota // Cada aluno é uma posição do array
const getTeste = turma => turma.alunos.map(getNota)
let nota = escola.map(getTeste)
console.log(nota)