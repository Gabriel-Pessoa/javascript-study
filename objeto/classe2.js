class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome 
    }
}

class Pai extends Avo{
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome) // Silva foi atribuido pelo filho, que subiu na escala de herança até chegar ao avó
        this.profissao = profissao 
    }
}

class Filho extends Pai {
    constructor () {           
        super('Silva')
    }
}

const filho = new Filho
console.log(filho); // Como nenhum atributo foi mudado na profissão filho, assumiu a profissão do pai


