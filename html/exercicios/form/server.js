const express = require('express')
const bodyParse = require('body-parser') // Ao submeter os dados do formulário, fará um parse no body da requisição (request). E ficará disponível em request.body


const app = express()

app.use(bodyParse.urlencoded( {extended:true} )) // urlencoded é o padrão de formulário, o body parse fará o parse nesse formulário

app.post('/usuarios',(req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns! Usuário Incluido.</h1>')
})

app.post('/usuarios/:id',(req, res) => {
    //console.log(req.query) usando método get os parâmetros vão na url e são acessados pelo req.query
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns! Usuário Alterado.</h1>')
})


app.listen(3003)