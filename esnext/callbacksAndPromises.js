// Promises. Possui três estágios: Pending(pendente), Fulfiled(terminou de executar), Rejected(rejeitada)
const doSomethingPromise = new Promise((resolve, reject) => {
    // throw new Error('Something went wrong'); //simulando um erro
    setTimeout(function () {
        // fez algo
        resolve('Primeiro dado');
    }, 1500);
});

const doOtherSomethingPromise = new Promise((resolve, reject) => {
    //throw new Error('Something went wrong'); //simulando um erro
    setTimeout(function () {
        // fez algo
        resolve('Segundo dado');
    }, 1000);
});

/*Resolendo promises
doSomethingPromise
    .then(data => {
        console.log(data.split(''));

        // é obrigatório o retorno nessa função dentro do then para continuidade do encadeamento de chamadas
       return doOtherSomethingPromise;
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));

*/

/*Resolvendo várias promises
Promise.all([doSomethingPromise, doOtherSomethingPromise]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(console.log);
*/

//A promise que resolver primeiro da lista é continuada
Promise.race([doSomethingPromise, doOtherSomethingPromise]).then(console.log)


//Callbacks
function doSomething(callback) {
    setTimeout(function () {
        // fez algo
        callback('Primeiro dado')
    }, 1000)
}

function doOtherSomething(callback) {
    setTimeout(function () {
        // fez outro coisa
        callback('Segundo dado');
    }, 1000)
}

// callback hell
function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherSomething(function (data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2)
                        }, 1000);
                    } catch (error) {
                        // handle error
                    }
                });
            } catch (error) {
                // handle error
            }
        });
    } catch (error) {
        // handle error
    }
}

//doAll();