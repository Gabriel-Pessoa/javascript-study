const valores = [7.7 , 8.9 , 6.3 , 9.2]

console.log(valores[0],valores[3]) // imprimindo no console do array valores o indice 0 e 3
console.log(valores[4])// imprimindo no console do array valores o indice 4

valores [4] = 10 // atribui valor ao elemento de índice 4
console.log(valores) // imprimi no console todo o array valores
console.log(valores.length) // determina quantos elementos temos no array

valores.push({id: 3}, false, null , 'teste') // essa função adiciona elemento ao array

console.log(valores)

console.log(valores.pop()) //Pega o último elemento do array e também o exclui 

delete valores [0] // Deleta do array o índice passado no parâmetro

console.log(valores)

console.log( typeof valores)
