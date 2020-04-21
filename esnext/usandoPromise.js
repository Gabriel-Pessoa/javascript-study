const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` // Interpolei a variável letra pode ser a,b ou c
    return new Promise((resolve, reject) => {
        http.get(url, res => { //pega url, callback que recebe os dados fatorados em strings
            let resultado = '' //variável que irá receber concatenação dos dados passado pela callback 

            res.on('data', dados => { //Intercepa os eventos e vai atribuindo a string
                resultado += dados
            })
            res.on('end', () => { // Ao término dos eventos, evento end. Pego os dados e converto em JSON
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}


/*
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))

            console.log(nomes)
        })
    })
})
*/


// Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
//     .then(turmas => [].concat(...turmas))
//     .then(alunos => alunos.map( a => a.nome))
//     .then(nomes => console.log(nomes))
//     .catch(e => console.log(e)) // Se um possível erro

getTurma('D').catch(e => console.log(e)) // forçando um erro