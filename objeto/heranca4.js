function MeuObjeto() {}
console.log(MeuObjeto.prototype); // O atríbuto é um objeto vazio

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__); // OS dois apontom para o mesmo prototype
console.log(obj1.__proto__ === MeuObjeto.prototype); // As instâncias de uma função apontam para o prototype dessa função

MeuObjeto.prototype.nome = 'Anônimo' // Criei diretamente no protótipo da função um atributo chamado nome, logo todas as instâncias herdam esse atríbuto
MeuObjeto.prototype.falar = function () { //Criei diretamente no protótipo da função uma função falar, logo todas as instâncias herdam essa função 
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar() // Acessei atríbuto herdado da função
obj2.nome = 'Rafael' // Sobscrevi nesse objeto específico o atributo nome, herdado do pai
obj2.falar()


const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Estou mudando a referência de 'Object.prototype' (padrão para todos os objetos) para MeuObjeto.prototype
obj3.nome = 'Obj3' // Agora eu herdo os atributos do pai (MeuObjeto), e sobscrevi nessa linha o atríbuto nome
obj3.falar()

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // A instância da função MeuObjeto (que é um objeto por ser instância de uma função), apona para o prototype da função
console.log(MeuObjeto.__proto__ === Function.prototype) // A função MeuObjeto aponta para o protótipo do construtor Fuction.prototype 
console.log(Function.prototype.__proto__ === Object.prototype); // O prótotipo de uma função também aponta para o Object.prototype
console.log(Object.prototype.__proto__ === null); // é o último na cadeia de protótipos, não tem ninguém acima dele


