function construtora(name) {
    this.name = name
    this.falar = function () { return console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new construtora('João')
p1.falar()