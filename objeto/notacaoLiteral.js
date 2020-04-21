const a = 1
const b = 2
const c = 3

const obj1 = {a:a, b:b, c:c}

// Mudança no ES6, o atributo assume a variável sem precisar atribuir 
const obj2 = {a, b, c}

console.log(obj1,obj2)

// Antes do ES6
const nomeAtrib = 'nota'
const valorAtrib = 7.89

const obj3 = {}
obj3[nomeAtrib] = valorAtrib
console.log(obj3)

// Com Es6
const obj4 = {[nomeAtrib]:valorAtrib}
console.log(obj4);

// ES6 Mudança de função dentro de objetos
const obj5 = {
    funcao:function myFunction(){ // antes do ES6

    },
    myFunction2(){ // Com ES6

    }
}

console.log(obj5);

