// Outra possibilidade não indicada seria o usar o caminho do arquivo (Não use, dará problema em outra aplicações):
//C:\Users\Gabriel_Pessoa\Google Drive\Estudo Java\arquivoDeEstudoJS\javascript-study\node\moduloA.js
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// posso também criar uma pasta por exemplo 'saudacao' dentro do node_modules com o arquivo index.js acessando somente // const saudacao = require('saudacao')
// Não é uma boa prática criar arquivos dentro do node_modules


const c = require('./pastaC/index') //posso acessar o script da pasta c apontando para o index ou index.js, apontando somente para a pasta, pois o é esperado sempre
// encontrar um arquivo chamado index. É como acontece dentro da pasta node_modules 

//const http = require('http')

// http.createServer((require, response) => {
//     response.write('Bom dia!')
//     response.end()
// }).listen(8080)