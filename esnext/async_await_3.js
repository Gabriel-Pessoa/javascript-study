const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000);
});

//Or
//Função Auto Invocada
(async function () {
    console.log('Begin');

    const text = await promise // resolve e depois atribui o valor para a variável
    console.log(text); // Imprime o valor
    //Or
    console.log(await promise);
    //Or
    promise.then(console.log);


    promise.then(
        res => setTimeout(() => console.log(res), 5000),
        rej => console.error(rej)
    )
    //Or
    try {
        const res = await promise;
        setTimeout(() => console.log(res), 5000); // Não posso utilizar essa síntaxe: 'console.log(await promise)', por que tenho uma arrow function sem Async 
    } catch (rej) {
        console.error(rej);
    }
})();
