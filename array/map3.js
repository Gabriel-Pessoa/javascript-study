Array.prototype.map2 = function (funcIn) {

    const arrayAux = []
    for(let i = 0; i < this.length; i++) {  
        arrayAux[i] = funcIn(this[i], i, this)  
    }
    return arrayAux
}

const shoppingCart = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const parseObject = json => JSON.parse(json)
const justPrice = product => product.preco 

let result = shoppingCart.map2(parseObject).map2(justPrice)
console.log(result)

