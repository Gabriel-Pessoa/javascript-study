const baseUrl = 'http://localhost:3001/users';

/* Permite realizar chamadas api baseado em promises, o segundo parâmetro é um objeto com as configurações da chamada
fetch(baseUrl,
    {
        method: 'get', headers: '', body: ''
    })
    // Tenho que me atentar que só cai no catch se for erro de rede, posso conserta fazendo um tratamento com o status 
    .then(response => {
        // Assim eu garanto que cairá no catch por outro motivo que não seja apenas rede
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
*/


//Async/Await - Forma de criar promises de maneira simples, e lhe dar com outras promises.

//Criei uma promise
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345)
    }, 1000);
});

// Cria uma promise com a palavra reservada async
const simpleFunc = async () => {
    //throw new Error('Oh no!') // forçando uma erro para teste

    // Com a palavra reservada await, ele aguarda a resolução da promise e atribui ao data.
    const data = await asyncTimer();
    console.log(data);

    //Outro exemplo parecido com a linha cima
    const dataJSON = await fetch(baseUrl).then(response => response.json());
    console.log(dataJSON);

    //Para resolver duas ou mais promises em paralelo
    const dataAll = await Promise.all(
        asyncTimer(),
        fetch(baseUrl).then(response => response.json())
    )
    console.log(dataAll);

    //return data;
};

/*
simpleFunc()
    .then(data => console.log(data))
    .catch(error => console.log(error)); // Posso tratar um erro do mesmo jeito que uma promise
*/



//EventEmitter: Consigo tratar eventos
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Criando um consumidor do evento
emitter.on('User logged', data => {
    console.log(data);
});

// Criando uma emissão do evento
emitter.emit('User logged', { user: 'Celso Henrique' });


// Podemos extender uma classe e utilizar o método da classe pai
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

// usando: 'users.once', loga apenas o primeiro
users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Gabriel Júlio' });
users.userLogged({ user: 'Bruno Henrique' });
