let a = 3
this.c = 456

console.log(this.a);
console.log(global.a);
console.log(this.c);
console.log(module.exports.c)
console.log(module.exports === this);
console.log(module.exports);
// Quando criamos uma variável ou uma constante o node cria o módulo dela

abc = 3 // Criando variável sem palavaras reservada. É perigoso pois jogamos ela no escopo global

console.log(global.abc)
