function getPreco (imposto = 0, moeda = 'R$') {
    return `${this.nome} ${moeda} ${this.preco *(1-this.desc)*(1+imposto)}`
}

const produto = {
    nome : 'Notebook',
    preco : 4589 , 
    desc:0.15 ,
    getPreco // função add no obj produto, como não utilizei ':', ele atribui a função a ela mesma
}

global.nome = 'Chocolate'
global.preco = 20 // o this da fuction getPreco aponta para o global
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco()) // Acesso o atritubo getPreco (que é uma função), e ela retorna o cálculo com
// os atributos do próprio objeto

const carro = { nome:'BMW', preco:49990, desc: 0.20}

// Call e apply são praticamentes idênticos na sintaxe
console.log(getPreco.call(carro)) // Obj carro passado como contexto para função getPreco
console.log(getPreco.apply(carro))// Obj carro passado como contexto para função getPreco

/*Apesar de a sintaxe desta função ser quase idêntica à de apply(), a principal diferença é que call()
aceita uma lista de argumentos, enquanto apply() aceita um único array de argumentos.*/
console.log(getPreco.call(carro,0.17,'$')) // 1 parametro é o contexto, 2 imposto, 3 moeda
console.log(getPreco.apply(carro,[0.17,'$']))// 1 parametro é o contexto, 2 imposto, 3 moeda

