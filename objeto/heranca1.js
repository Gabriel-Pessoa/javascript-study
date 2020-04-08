const ferrari = {
    modelo:'F40',
    velMax:324,
}

const volvo = {
    modelo:'V40',
    velMax:200
}

console.log(ferrari.prototype) // Objeto não tem esse atributo prototype 
console.log(ferrari.__proto__) // com __proto__ eu consigo acessar quem é o objeto pai
console.log(ferrari.__proto__ === Object.prototype); // true. Quer dizer que ao tentar acesar o objeto pai encontramos o Object.prototype que é o mais alto nível
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); // Object.prototype tem um objeto acima dele na herança? Não, não tem.

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);


