const porta = 3003

const express = require('express') // na pasta node_modules tenho uma pasta express e dentro dela o arquivo index.js que vai ser carregado nessa requisição

const app = express()

const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')


/*
app.get('/produtos',(req, res, next) => { // Para a mesma rota podemos ter duas funções middleware, sem o next a requisição não vai para a função de baixo e fica sem resposta
    
    console.log('Passou por Middleware 1...')
    next()
 })
 

app.use((req, res, next) => { // Para o método use, para qualquer rota ele retorna a resposta dessa função
     res.send( { nome:'Notebook', preco:123.45 } )
    })
     

app.get('/produtos',(req, res, next) => { // Conceito de middlewares
   // pego a middleware response e dou um send (envio)
    res.send( { nome:'Notebook', preco:123.45 } ) // O método send converte automaticamente para .JSON
})
*/

app.use(bodyParser.urlencoded( { extended:true } ) ) // Transforma os itens mandados pela require url e transforma em objeto. Como não passei nenhuma retoa, ele irá palicar em todas url coded

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) =>{
    res.send(bancoDeDados.getProduto(req.params.id)) // Dentro do objeto id eu tenho um atributo id, acessado com ponto. se viesse depois dele, algum outro, era só acessar .(o nome do parâmetro)
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id, // id passado na requisição irá substituir algum existente ou não
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) // JSON
})


app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`)
})   