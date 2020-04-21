const shoppingCart = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Resolution 1
let result = shoppingCart.map(e => JSON.parse(e)).map(e => e.preco)
console.log(result)

//Resolution 2

const parseObject = json => JSON.parse(json)
const justPrice = product => product.preco 

result = shoppingCart.map(parseObject).map(justPrice)
console.log(result)

