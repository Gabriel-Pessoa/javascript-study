const bodyParser = require('body-parser') // módulo de terceiros responsável por fazer o parser do body da requisição. Usuário faz um request, ele vem com dados na requisição, o body parser vai interpretar esse dados para deixá-los prontos.
const express = require('express')
const multer = require('multer')

const app = express() // instância de express

// Definindo os middlewares que serão aplicados sempre que acontecer uma requisição
// Middlewares são funções que são executadas quando determinada(s) requisição(ões) chegar. Podemos definir o middlewares para requisição com padrão de url ou para todas as requisições. 

// 1.middleware aplicado a todas as requisições
app.use(express.static('.')) // dentro da pasta atual (onde server.js está) sirva todos os arquivos estáticos, são eles: js,css,html,fontes,json,xml

// 2.middlewares aplicado a todas as requisições
app.use(bodyParser.urlencoded({ extended: true })) // Analisa url, retorna apenas corpo {urlencoded}, analisando apenas solicitações de formulário. Esse analisador suporta apenas codificação utf-8. Um novo objeto de corpo que contém os dados analisados ​​é preenchido no objeto de solicitação após o middleware (ou seja, req.body).
// Este objeto conterá pares de valores-chave, nos quais o valor pode ser uma sequência ou matriz (quando estendido é falso) ou qualquer tipo (quando estendido é verdadeiro).

//3. middlewares aplicado a todas as requisições
app.use(bodyParser.json())// Retorna middleware que analisa apenas JSON. Transforma json em objeto


// app.get('/teste', (req, res) => { //(req, res) => res.send('Ok!') (função middleware) que é invocada por '/teste' por uma requisição do tipo get
//     res.send('Ok!')
// })

// Definido configurações de armazenamento do multer
const storage = multer.diskStorage({
    // função que define destino do upload
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    // função que define nome do arquivo, tendo cuidado para que não sobrescreva o outro
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)// para evitar sobrescrição de arquivos, uso date.now + originalName, formando nome do arquivo
    }
})

// passei storage para dentro do multer(seu construtor), chamei a função single('nome do input na requisição') e salvei a chamada dentro da variável upload
const upload = multer({ storage }).single('arquivo') // vou receber um input com name="arquivo"

// função invocada na requisição do tipo post por /upload
app.post('/upload', (req, res) => {
    //tratando callback do upload
    upload(req, res, err => {
        if (err) { // erro setado, verdadeiro
            return res.end('Ocorreu um erro') // return sai da função e passa para a próxima linha
        }

        res.end('Concluído com sucesso.')
    })
})

// função invocada na requisição do tipo post por /formulario
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // tudo que veio na resposta eu vou espalhar nesse objeto criado de forma literal que está sendo devolvido como resposta do backend
        id: 1
    })
})

//recebe como parâmetro um número
app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query: url/parOuImpar?numero=1
    // req.params: url/parOuImpar/1 (/:numero)

    const par = parseInt(req.query.numero) % 2 === 0 // recebo os parâmetros da query
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))