// Promise - Promessa, dois parâmetro resolve e reject.
// Quando resolve a promise o then é chamado, passando objeto que deseja

//Resolve 

/*
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(frase) // aceita um único parâmetro, solução ({})
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Resposta do promise')
    // para acessar o resultado de uma promise eu uso o then
    .then(frase => frase.concat(' Resposta do then1'))
    // posso encadear uma chamada atrás da outra, o resultado do then acima eu concateno com o de baixo
    .then(outraFrase => console.log(outraFrase))
 
*/

//Reject
    function falarDepoisDe(segundos, frase) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                reject(frase) // aceita um único parâmetro, solução ({})
            }, segundos * 1000)
        })
    }
    
    falarDepoisDe(3, 'Resposta do promise')
        // para acessar o resultado de uma promise eu uso o then
        .then(frase => frase.concat(' Resposta do then1'))
        // posso encadear uma chamada atrás da outra, o resultado do then acima eu concateno com o de baixo
        .then(outraFrase => console.log(outraFrase))
        .catch(e => console.log(e)) // Para tratar reject é somente com catch, e o (e) da fuction é a própria frase
     
    