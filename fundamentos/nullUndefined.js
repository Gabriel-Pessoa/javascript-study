let valor // Não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! Não pode acessar propriedade de nulo

const produto = {}
console.log(produto.preco) // Preço não possui nenhum valor, portanto indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Forma mais correta. Significa que está sem preço
console.log(!!produto.preco)
console.log(produto)


