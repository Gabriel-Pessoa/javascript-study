//Operador ...rest/spread (juntar/espalhar)

//Spread(Espalhar) com objetos

const funcionario = { nome:'Maria', salario:12348.99 }
const copia = {ativo:true, ...funcionario} //Com o operador spread espalhei de forma organizada os atributos acima

console.log(copia)

// Com array a mesma coisa

const grupoA = ['João','Maria','Rinaldo']
const grupoFinal = ['Mateus',...grupoA,'Rafaela']
console.log(grupoFinal)