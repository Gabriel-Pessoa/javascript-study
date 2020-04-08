const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna com caracter da constante que está na posição 4, contando a partir do zero.
console.log(escola.charCodeAt(3)) // Retorna com o código da tabela Unicode referente ao caracter selecionado

console.log(escola.indexOf('3')) // Procura na string o caracter definido e retorna com sua posição

console.log(escola.substring(1)) //Retorna a partir da posição definida em diante
console.log(escola.substring(0,3)) // Retorna do número 0 até o 3, mas não inclui o ú ltimo.

console.log("Escola ".concat
(escola).concat("!")) // Concatenação de caracter

console.log(escola.replace(3,'e')) // Irá procura o digito igual a 3 e subistituir por 'e'

console.log("Ana,Maria,João".split(",")) // Transforma a string em array, utilizando o separador ",".
