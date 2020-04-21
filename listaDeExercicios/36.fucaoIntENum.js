function multiplicaArray(array1,multiplicador) {
   let resultado = []

    array1.forEach( index => resultado.push(index * multiplicador)) // index representa cada valor do array

    return console.log(resultado)
}

const array1 = [1,2,3,4,5]

multiplicaArray(array1,2)
