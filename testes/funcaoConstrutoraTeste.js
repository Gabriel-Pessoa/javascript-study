function Carro (velocidadeMaxima = 200, aceleracao = 5) {
   
    this.velocidadeAtual = 0

    setInterval( () => {
        this.velocidadeAtual += aceleracao
        console.log(this.velocidadeAtual)
        
    },1000)   
    
    
    // this.getVelocidadeAtual = function () {
    //     return aceleracao
    // }
}

const uno = new Carro
uno.velocidadeAtual
 


