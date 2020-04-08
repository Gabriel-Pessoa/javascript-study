const fabricantes = ["Mercedes","Audi", "BMW"]

const imprimir = function (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)  // Com índice do array começa em zero, somamos mais 1 a todos
    // para começar do 1 
}

fabricantes.forEach(imprimir) // for Each é um callback, o evento são os elementos que o loop percorre
// no array. Voltando o próprio elemento e o índice 

fabricantes.forEach((fabricante) => console.log(fabricante)) //Função arrow passada no forEach, 
// que imprime o valor do array

