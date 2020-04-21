function equacaoSegundoGrau(a,b,c) {
    const delta = (b**2) - 4 *a * c  
    const bhaskara = []

    if(delta >= 0) {
       
        let valorBNegativo = b * (-1)
        let raizDelta = Math.sqrt(delta)
        let divisor = 2 * a

       bhaskara[0] = (valorBNegativo + raizDelta) / divisor
       bhaskara[1] = (valorBNegativo - raizDelta) / divisor
               
        return console.log(bhaskara)
        
    } else{
        console.log('Delta é negativo')        
    }
}

equacaoSegundoGrau(4,2,-6)

