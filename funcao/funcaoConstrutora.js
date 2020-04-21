function Carro (velocidadeMaxima = 200, delta = 5) {
  // Atributo privado, acessível somente dentro do escopo da função/classe
  let velocidadeAtual = 0

  // Método público, acessível fora da função/Classe
  this.acelerar = function () {
    if( (velocidadeAtual + delta) <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }

    // Método público
    this.getVelocidadeAtual = function () {
      return velocidadeAtual
    }
  } 
}

const uno = new Carro // Estanciei um novo objeto a partir  da função/Classe Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
