const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` // Interpolei a variável letra pode ser a,b ou c
    http.get(url, res => { //pega url, callback que recebe os dados fatorados em strings
        let resultado = '' //variável que irá receber concatenação dos dados passado pela callback 

        res.on('data', dados => { //Intercepa os eventos e vai atribuindo a string
            resultado += dados
        })
        res.on('end', () => { // Ao término dos eventos, evento end. Pego os dados e converto em JSON
            callback(JSON.parse(resultado)) 
        })
    })
}

let nomes = []
getTurma('A', alunos =>{
   nomes = nomes.concat(alunos.map( a => `A: ${a.nome}`))
   getTurma('B', alunos =>{
    nomes = nomes.concat(alunos.map( b => `B: ${b.nome}`))
    getTurma('C', alunos =>{
        nomes = nomes.concat(alunos.map( c => `C: ${c.nome}`))
        
        console.log(nomes)
         }) 
     })
})


