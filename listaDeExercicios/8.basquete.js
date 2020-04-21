function resultadoJogos (string) {
    let pontuacao = string.split(" ") // Cria um array de caracteres, separando cada elemento pelo " " (espaço)
    
    function converteEmInteiro () {
        let recorde = []
        for ( let i in pontuacao) {
            recorde.push(parseInt(pontuacao[i]))
        }
        return recorde
    }

    let maiorPontuacao = 0
    let menorPontuacao = converteEmInteiro()[0]
    let numeroRecorde = 0
    let melhorJogo = 0
    let piorJogo = 0
     
    for (let i in converteEmInteiro()) {
        
        if( i == 0) {
            continue
        }

        if( converteEmInteiro()[i] > maiorPontuacao ) {
            maiorPontuacao = converteEmInteiro()[i]
            numeroRecorde++
            melhorJogo = (parseInt(i)+1)
        }

        if( converteEmInteiro()[i] < menorPontuacao ) {
            menorPontuacao = converteEmInteiro()[i]
            piorJogo = (parseInt(i)+1)
        }
    }

console.log(`Números de vezes que bateu o próprio recorde = ${numeroRecorde},
Jogo com a melhor pontuação = ${melhorJogo},
Maior pontuação = ${maiorPontuacao},
Menor pontuação = ${menorPontuacao},
Pior jogo = ${piorJogo}`)
      
}
                            
const pontuacaoMeusJogos = '10 20 20 8 25 3 0 30 1'
resultadoJogos(pontuacaoMeusJogos)
