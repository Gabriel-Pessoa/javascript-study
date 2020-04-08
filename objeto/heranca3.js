const pai = {nome:'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai) // Defini o prototype de filha como sendo o pai
filha1.nome = 'Ana' //Criei um atributo nome e dei um valor. Object.keys irá listar apenas esse atríbuto pois ele é próprio do objeto
console.log(filha1.corCabelo); // Acessei o atributo corCabelo filha que herdou do pai

const filha2 = Object.create(pai, { // Criei um novo objeto que é herdado do objeto pai. No segundo parâmetro passei ->
    nome: {value:'Bia', writable:false, enumerable:true} //  -> um objeto que recebe o novo atributo desse objeto e as ->
})                                                       //características desse atributo(pode ser alterado: false, pode ser listada:true)

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));// Object.keys irá listar apenas atríbutos próprios do objeto, não irá listar os herdados
console.log(Object.keys(filha2));// Object.keys irá listar apenas atríbutos próprios do objeto, não irá listar os herdados

for (let key in  filha2) { //Porém o "for in" lista todos os atríbutos, até os herdados
    console.log(key);
}

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // Por com a função 'hasOwnProperty' ele retorna os atríbutos próprios do objetos, não os herdados. 
    console.log(key) : console.log(`Por henraça ${key}`);   
}


