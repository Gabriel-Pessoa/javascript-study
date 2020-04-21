let f = function () {
    this.a = 1
    this.b = 2
}

// Instancia da classe f ou funcao. Quer dizer que assumi 
// as propriedades de f 
let o = new f() // {a:1 , b:2}

// add propriedades no prótotipo da função f
f.prototype.b = 3
f.prototype.c = 4


console.log(o.a) 
// Existe uma propriedade 'a' no objeto o? Sim, e seu valor é 1.

console.log(o.b)
// Existe uma propriedade própria 'b' em o? Sim, e seu valor é 2.
// O protótipo também tem uma propriedade 'b', mas não é visitado.
// Isso é chamado de sombreamento de propriedade(Property Shadowing)

console.log(o.c)
// Existe uma propriedade própria 'c' em o? Não, verifique seu protótipo.
// Existe uma propriedade 'c' própria em o. [[Prototype]]? Sim, seu valor é 4.

console.log(o.d)
// Existe uma propriedade 'd' própria em o? Não, verifique seu prototype.
// Existe uma propriedade 'd' em o. [[Prototype]]? Não, verifique seu prototype.
