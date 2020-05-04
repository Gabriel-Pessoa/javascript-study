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

// Recurso do ES8 (Async / Await)
// Objetivo simplicar 

let obterAlunos = async () => { // Precisamos marcar a função com a palavra async, senão o await não funciona e dá um erro
    const turmaA = await getTurma('A') // invés de preocupar em chamar o then, eu atribuir o resultado da função a const turmaA. Trabalhando de forma síncrona
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C') 
    return [].concat(turmaA, turmaB, turmaC)// por se tratar de uma função async, ela irá retorna um objeto async function (independente se eu retorno um array nesse caso)
}

//Usando o objeto async function abaixo:
obterAlunos() //resultado da função .then
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))