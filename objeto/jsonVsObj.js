const obj = { a:1, b:2, c:3, soma () {return a+b+c} }
console.log(JSON.stringify(obj)) // Converteu o objeto em JSON. O atríbuto soma não é um dado, mas sim, uma funcionalidade 

console.log(JSON.parse('{"a":1 , "b":2 , "c":3 }')) //Os atríbutos devem estar com aspas duplas, senão dá problema

console.log(JSON.parse('{ "a":1.7, "b": "string" , "c": true, "d": {}, "e":[] }'))
// Podemos criar JSON que já saem formatados em site validador de JSON, 
