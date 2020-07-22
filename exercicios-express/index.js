const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid');
const usuarioApi = require('./api/usuario');

//require('./api/produto')(app, 'com param!')
const produtoApi = require('./api/produto');

produtoApi(app, 'com param!');


const port = process.env.PORT || 3000;
 
// qualquer url e tipo de requisição retorna essa middleware
// app.use((req, resp) => {
//     resp.send('Estou bem!');
// });

// qualquer tipo de requisição retorna essa middleware
// app.all('/opa', (req, resp) => {
//     resp.send('Estou bem!');
// });

// Posso colocar html na resposta e ele será interpretado
// app.get('/opa', (req, resp) => {
//     resp.send("<h1>Hello</h1></br></br><b>World</b>!");
// });

// a resposta pode ser um objeto que será convertido em json
// app.get('/opa', (req, resp) => {
//     resp.json({
//         name: 'Gabriel Júlio',
//         idade: 24,
//         endereco: 'rua rio pajeú',
//         numero: 34
//     });
// });

app.use(saudacao('Gabriel'));

// a ordem importa no express por conta do conceito de cadeia
app.use('/opa', (req, resp, next) => {
    console.log('Antes...');
    next();
});

app.get('/opa', (req, resp, next) => {

    console.log('Durante...');
    
    resp.json({
        data: [
            { id: 1, name: 'Gabriel Júlio', position: 1 },
            { id: 2, name: 'Ana', position: 45 },
            { id: 3, name: 'Bia', position: 50 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    });

    next();
});


app.use('/opa', (req, res) => {
    console.log('Depois...');
});


// Não é uma boa prática usar no método post passando params ou query na requisiçãoo
// É muito comum utilizar o body da requisição
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`);
});

// passando informações pela url através do params.
// pode ser number, string
app.get('/clientes/:id', (req, res) => {s
    res.send(`Cliente ${req.params.id} selecionado!`);
});

app.use(bodyParser.text()); // interpreta texto. Chama a função text e dentro dela retorna uma middleware
app.use(bodyParser.json()); // interpreta json. Chama a função json e dentro dela retorna uma middleware
app.use(bodyParser.urlencoded({ extended: true })); // interpreta urlencoded. Chama a função urlencoded com configuração e dentro dela retorna uma middleware


app.post('/corpo', (req, res) => {

    // let corpo = '';

    // req.on('data', function(parte) { // quando estiver chegando dados dessa requisição
    //     corpo += parte;
    // }); 

    // req.on('end', function() {
    //     res.send(corpo);
    // });

    res.send(req.body);
});

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);


app.listen(port, () => {
    console.log(`Running aplication port: http://localhost:${port}`);
});