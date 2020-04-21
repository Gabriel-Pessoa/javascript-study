Array.prototype.filter2 = function(callback) {
    const array = []
    for (let i = 0; i < this.length; i++) {

        if(callback(this[i], i, this)) { // Se o callback retornar true ele adicionará ao array
         array.push(this[i])
        }

    }
    return array
}

const produtos = [
    {nome:'Notebook', preco: 2499, fragil:true},
    {nome:'iPad Pro', preco:4199, fragil: true},
    {nome:'Copo de Vidro', preco:12.49, fragil:true},
    {nome:'Copo de Plástico', preco:18.99, fragil:false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //Como fragil é um boolean, o filter só irá retorna se for verdadeiro. 

console.log(produtos.filter2(caro).filter2(fragil))