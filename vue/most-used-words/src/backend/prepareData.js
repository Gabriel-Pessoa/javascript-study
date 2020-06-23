
module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')// quebra em uma array, separando cada item desse array por espaço
                .map(word => word.toLowerCase()) // padroniza todas as palavras em letras minúscula
                .map(word => word.replace('"', '')) // removendo aspas duplas de todos os casos

            resolve(words)
        }catch(e) {
            reject(e)
        }
    })
}

// função para identificar linhas válidas
function filterValidRow(row) {
    const notNumber = !parseInt(row.trim()) // ao retorna verdadeiro quer dizer que tenho um número, é justamente o que não queremos
    const notEmpty = !!row.trim() // return false para linha vazia ou true para preenchida
    const notInterval = !row.includes('-->') // se incluir esse sinal é um intervalo na linha

    return notNumber && notEmpty && notInterval 
}


const removePunctuation = row => row.replace(/[,?!.-]/g, '') // substituindo pontuações por espaços em branco
const removeTags = row => row.replace(/(<[^>]+)>/ig,'').trim() // remove as tags e elimina os espaços
const mergeRows = (fullText, row) => `${fullText} ${row}` // todo o conteúdo em uma única string maior, com um espaço separando