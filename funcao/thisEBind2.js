function Pessoa () {
    this.idade = 0 // Instância idade de pessoa, pegou um objeto do mundo real e instanciou 

    setInterval(function () {
        this.idade++ // Para evitar que o this aponte para o time e retorne NaN, podemos usar o .bind(this) 
        console.log(this.idade) // amarrando para classe Pessoa
        
    }.bind(this), 1000 ) // Esse valor é em milissegundos
}

// new Pessoa

function Pessoa2() {
    this.idade = 0

    const self = this // Outra maneira para que o this não varie no setInterval, é criar uma const
    setInterval(function () { // e associar o this que aponta para Pessoa2
        self.idade++
        console.log(self.idade)        
    }, 1000)
}

// new Pessoa2
