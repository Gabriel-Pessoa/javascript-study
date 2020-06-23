
module.exports = words => {
    return new Promise((resolve, reject) => {
        try {
            // ['ana', 'ana', 'ana', 'bia', 'bia']
            // { ana: 3, bia: 2 }

            // transforma o array em objetos com as palavras e quantidades de repetições
            const groupedWords = words.reduce((obj, word) => {

                if(obj[word]) {
                    obj[word] = obj[word] + 1
                } 
                else {
                    obj[word] = 1
                }

                return obj
            }, {})
              
            const groupedWordsArray = Object
                .keys(groupedWords) // ['ana', 'bia']
                .map(key =>({ name: key, amount: groupedWords[key] }))
                .sort((w1, w2) => w2.amount - w1.amount) // ordena do maior para o menor

            resolve(groupedWordsArray)
            
        }catch(e) {
            reject(e)
        }
    })
}