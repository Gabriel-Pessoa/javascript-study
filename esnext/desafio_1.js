const fs = require('fs');
const path = require('path')


function lerArquivo(caminho) {
    return new Promise((resolve) => {
        fs.readFile(caminho, (error, data) => {
            resolve(data.toString());
        });
    })
}

const caminho = path.join(__dirname, 'dados.txt'); // caminho para arquivo dados.txt

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(texto => `O valor final é: ${texto}`)
    .then(console.log)