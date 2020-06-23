// Recebe a lista de caminhos e retorna todas as linhas da legenda
// Junta todos os arquivos passado pelo usuário em um grande texto, faz um split gerando um array em cada um das linhas dos arquivos
const fs = require('fs')

module.exports = paths => {
    return new Promise((resolve, reject) => {
        try {
            // recebe todas as legendas organiadas em linhas
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8')) // pega um array de string e retorna um array de conteúdo de forma assíncrona
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`) // resultado é uma string
                .split('\n') // usa a quebra de linha para separar as posições do array

            resolve(rows)
        }catch(e) {
            reject(e)
        }
    })
}