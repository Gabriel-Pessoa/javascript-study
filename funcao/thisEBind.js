const pessoa = {
    saudacao : 'Bom dia! ',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito do this, não está apontando ao atributo saudacao do objeto 'pessoa', e sim para
// outro objeto que não tem o atributo 'saudacao'. Conflito funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa) // Função que Amarra o this ao objeto 'pessoa'
falarDePessoa()