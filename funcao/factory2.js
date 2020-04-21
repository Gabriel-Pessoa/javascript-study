// Sem o uso de this, grava dentro de um objeto
function criarProduto (nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.05
    }
}

console.log(criarProduto('Leite em pó', 5.50)) // Não existe o uso da palavra nem para instanciar um novo obj

// ou

// Lembra mais o paradigma O.O.
function criarProduto2 (nome, preco) {
    this.nome = nome
    this.preco = preco
    this.desconto = 0.05
}

const produto1 = new criarProduto2() // Uso da palavra new para criar uma nova instância do obj
produto1.nome = 'Farinha Láctea'
produto1.preco = 4.60

console.log(produto1)

