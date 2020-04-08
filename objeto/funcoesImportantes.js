const pessoa = {
    nome:'Rebeca',
    idade:2,
    peso:13
}

console.log(Object.keys(pessoa)); // Retorna só as chaves do objeto
console.log(Object.values(pessoa)); // Retorna so os valores do objeto
console.log(Object.entries(pessoa)); // Retorna uma array para cada par chave/valor

Object.entries(pessoa).forEach(e => { // forEach percorrer os valores. Cada elemento é um array com duas posições; primeiro elemento é a chave e o segundo é o valor
    console.log(`${e[0]}:${e[1]}`)    
})

// ou
Object.entries(pessoa).forEach(([chave, valor]) => { // Fazendo a mesma coisa de cima, agora usando operador destructuring
    console.log(`${chave}: ${valor}`)    
})

Object.defineProperty(pessoa,'dataNascimento',{ // Define atributo do objeto com restrições
    enumerable:true, // Vai ser listado?
    writable:false, // Vai ser modificada?
    value:'01/01/2019'
})

pessoa.dataNascimento = '01/01/2020' // irá assumir esse valor, pois eu freeze no object.defineProperty
console.log(pessoa);
Object.keys(pessoa) // Permiti anteriormente que atributo dataNascimento seja listado

// Object.assign (ES6) // Adiciona um cópia do objetos, se tiver duas chaves idênticas, a última irá sobscrever a primeira
const dest = { a:1 }
const o1 = { b:2 }
const o2 = {c:3, a:4} // o "a" desse objeto sobrescreveu o "a" do objecto "dest" 

const obj = Object.assign(dest,o1,o2)

console.log(obj);
Object.freeze(obj)
obj.c = 123
console.log(obj);

