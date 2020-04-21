const sequence = {
    _id: 1,
    get id() { return this._id++  } // Quando for chamar a função id(), é só pelo atributo e internamente ele invoca a função
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id // Add id caso o produto.id não esteja setado
    produtos[produto.id] = produto // ??  De onde vem esse produto. É um objeto?
    return produto
}

function getProduto(id) { //
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProdutos(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}


module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos} // Sequence não foi exportada, ficou acessada internamente dentro do módulo