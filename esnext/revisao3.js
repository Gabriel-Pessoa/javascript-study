/// ES8: Object.values/Object.entries
const obj= {a:1, b:2, c:3}
console.log(Object.keys(obj)) // Retorna somente as chaves do objeto
console.log(Object.values(obj)) // Retorna somente os valores do objeto
console.log(Object.entries(obj)) // Retorna uma matriz do objeto, sendo cada par chave/valor um array dentro array

// Melhoria na notação literal
const nome = 'Carla'

const obj2 = {
    nome, // Atribui automaticamente o seu valor (nome:nome) -criado acima)
    ola() {
        return `Olá meu nome é ${this.nome}` // Para criar uma função é só colocar os parênteses com ou sem parâmetros. Não precisa da palavra reservada "fuction"
    }
}

console.log('Nome dentro do objeto = '+ obj2.nome, obj2.ola())

obj2.nome = 'Ana'
console.log(obj2.ola())

// Class 

class animal {}
class cachorro extends animal { //extends quer dizer extensão de animal, no caso herança
    falar() {
        return 'Au au!'
    }
}

console.log(new cachorro().falar())