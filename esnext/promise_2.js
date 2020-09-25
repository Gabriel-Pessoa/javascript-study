// setTimeout(function () {
//     console.log('Executando callback...');
//     setTimeout(function () {
//         console.log('Executando callback...');

//         setTimeout(function () {
//             console.log('Executando callback...');


//         }, 200)
//     }, 200)
// }, 200)


function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando promise...');
            resolve('value');
        }, tempo)
    });
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)