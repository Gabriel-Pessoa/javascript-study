console.log(typeof String); 
console.log(typeof Array);
console.log(typeof Object); // todos tem um atributo chamado .prototype

String.prototype.reverse = function () { // Consigo criar novas funções ou atributos ao prototype do construtor
    return this.split('').reverse().join('')  
}

console.log('Gabriel Júlio'.reverse());


Array.prototype.first = function () {
    return this[0]
}

console.log(['a','b','c'].first())

// Cuidado!! Não substitua comportamentos que já existam