function primeiroelemento(array) {
    return array[0];
}

function primeiraLetra(string) {
    return string[0];
}

const letraMinuscula = letra => letra.toLowerCase();



/*Promise recebe uma função como parâmetro. Essa função aceitar apenas um parâmetro*/
let promise = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']); // Se eu passar dois parâmetros para essa função, ele irá utilizar-se apenas do primeiro, ignorando os restantes
});


/* .then(recebe uma função como parâmetro, e o argumento dessa função é justamente o valor passado na Promise) */
promise
    .then(primeiroelemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log); 
    /* consigo chamar a função que imprime na tela, passando a resposta da última cadeia do then,
    e automaticamente  de forma interna será passado o valor como parâmetro*/
