Object.prototype.atrib0 = '0' // não aconselhado
const avo = { atrib1:'A' }
const pai = {__proto__:avo, atrib2:'B', atrib3:3}
const filho = {__proto__:pai , atrib3:'C'} // O atributo 3 do filho, sobreou o do pai

console.log(filho.atrib1, filho.atrib2, filho.atrib0)

const carro = {
    velocidadeAtual : 0,
    velocidadeMax:200,
    acelerarMais(delta) {
        if(this.velocidadeAtual += delta <= this.velocidadeMax) {
            this.velocidadeAtual += delta
        }
        else {
            this.velocidadeAtual= this.velocidadeMax
        }
    },
    status() {
        return `${this.velocidadeAtual}Km/h de ${this.velocidadeMax}Km/h` 
    }
}

const ferrari = {
    modelo:'F40',
    velocidadeMax:324 // Conceito shadowing (sombreamento) de atributo carro velocidadeMax
}

const volvo = {
    modelo:'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // Chamei a função status do objeto carro para ser executada aqui
    }
}

Object.setPrototypeOf(ferrari, carro) // Serve para referenciar protótipos de objetos. Ferrari tem um protótipo carro. (Herança)
Object.setPrototypeOf(volvo, carro) // Serve para referenciar protótipos de objetos. Volvo tem um protótipo carro. (Herança)

console.log(ferrari); // Imprime os atributos de dentro do objetos, não adiciona os atributos dos protótipos
console.log(volvo); // Imprime os atributos de dentro do objetos, não adiciona os atributos dos protótipos

volvo.acelerarMais(100)
console.log(volvo.status()); // "o this" dentro do objeto carro ( o seu prototype) aponta para o objeto volvo

ferrari.acelerarMais(300)
console.log(ferrari.status());





