// O filter serve para filtrar o array. Cada elememto do array o filter vai examinar, se for objeto pode ser acessado com objeto.atributo. 
// Se de acordo com o callback passado como função para o filter retornar todos false, o filter irá retornar um array vazio, se o callback 
// retornar um array com todos os elementos dentro 

const produtos = [
    {nome:'Notebook', preco: 2499, fragil:true},
    {nome:'iPad Pro', preco:4199, fragil: true},
    {nome:'Copo de Vidro', preco:12.49, fragil:true},
    {nome:'Copo de Plástico', preco:18.99, fragil:false}
]

// const caro = produto => produto.preco >= 500

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //Como fragil é um boolean, o filter só irá retorna se for verdadeiro. 

//console.log(produtos.filter(caro).filter(fragil))

console.log(produtos.filter)

function maiorPreco(callback) {
    let acumuludor = 0


}
