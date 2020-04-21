function comparaString (string1, string2) {

// Tratamento de dados, colocando todos no padrão maíusculo para facilitar manipulação de dados
const array1 = string1.toUpperCase()
const array2 = string2.toUpperCase()

let contador = 0;

for(let x = 0; x < array1.length; x++) {

    for(let y = 0; y < array2.length; y++){

        if(array1[x] === array2[y]) {
            contador++;
        }

    }
}

return console.log(`Número de vezes que alguma letra se repetiu = ${contador}`)
}

comparaString('abcd','def')  
