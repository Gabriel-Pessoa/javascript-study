
function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tempo)
    });
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    });
}

async function retornarValorRapido() {
    /* Equivale a retorna uma promise com resolve(20) */
    return 20;
}


async function executar() {
   // let valor = await retornarValor(); // primeiro é aguardado resolver essa promise, para depois resolver as de baixo
   let valor = await retornarValorRapido();

    await esperarPor(1500)
    console.log(`Async/Await 1 ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await 1 ${valor + 1}...`)
  

    await esperarPor(1500)
    console.log(`Async/Await 1 ${valor + 2}...`)

    return valor + 3;
}


// /* Não consigo atribuir o valor de uma promise a uma variável, só depois que ela for resolvida através do método then*/
// executar()
//     .then(console.log);


async function executarDeVerdade() {
    /* Como estou dentro de uma função marcada como async, posso atribuir a uma variável o valor de uma promise marcada como await*/
   const valor = await executar();
   console.log(valor)
}

executarDeVerdade();