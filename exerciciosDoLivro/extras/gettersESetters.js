class Person {
    constructor(name){
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }
}

let person1 = new Person('Frodo')

console.log(person1) // Note que as funcionalidade com as palavras reservadas get e set ficaram privadas

console.log(person1.name) // get name() (pege a função name)

person1.name = 'Gandalf' // set name() (alterar a função name)

console.log(person1.name)

person1._name = 'Sam' //Alterei diretamente no atributo _name que é público 

console.log(person1.name)



