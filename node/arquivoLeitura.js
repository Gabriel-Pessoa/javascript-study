const fs = require('fs')

const caminho = __dirname + '/arquivo.json' // __dirname é o diretório absoluto que contém o arquivo em execução no momento

// sincrono. // Cuidado!! Lendo arquivo de forma assincrona, travando o event loop se for muito grande
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

// Assincrono, abordagem bem mais interessante, não trava o event loop
fs.readFile(caminho, 'utf-8',(err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) // Fazendo teste para saber se estamos recebendo um objeto, caso não, executo um comando da linha acima
})

// Modo mais fácil de ler json
const config = require('./arquivo.json') // so obrigado a passar a extensão do arquivo, porque ele sempre procura extensão JS
console.log(config.db)

//OBS: Mesmo as duas linhas sendo executada depois, a saida do bloco de código acima por ser assíncrono responde depois da execução do 2 códigos acima 

// Acessar uma pasta

fs.readdir(__dirname, (err, arquivo) => { // __dirname é o diretório absoluto que contém o arquivo em execução no momento
    console.log('Conteúdo da pasta...')
    console.log(arquivo)
})