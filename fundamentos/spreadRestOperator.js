function sum(...args) {
    // para dois ou mais argumento
    return args.reduce((acc, curr) => acc + curr, 0);
}

function multiply(...args) {
    return args.reduce((acc, curr) => acc * curr, 1);
}

//console.log(sum(5, 5, 5, 41, 20));
//console.log(multiply(5, 5, 5, 41, 20));

//Pegar parâmetros restantes
function rest(a, b, ...rest) {
    console.log(a, b, rest)
}

//rest(10, 50, 88, 78, 15, 0);



//Strings, arrays, objecto literal e objectos iteraveis
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(...args) {
    console.log(args)
}

//logArgs(...str); // Quebra a string

function logArgs2(a, b, c) {
    console.log(a, b, c)
}
// quebra o array passando como parametro para a função.
//logArgs2(...arr);

//Concatena arrays
const arr2 = [...arr, 5, 6, 7];
//console.log(arr2);

// Para clonar arrays
const arr3 = [...arr2];
console.log(arr3);

//Copiar parametros de um obj para outro
const obj1 = {
    test: 123
};

const obj2 = {
    ...obj1,
    test2: 'hello'
};

//console.log(obj2);

/*
Lança um erro, pq objetos não são iteráveis 
const arr4 = [...obj];
console.log(arr4)
*/

const obj3 = {
    test: 123
}

/*Nesse caso uma alteração num obj4 reflete no obj3.
const obj4 = obj3;
obj4.test = 456;
*/

//Para evitar o problema acima clonamos o objeto em questão usando o operador spread/rest
// Mesmo assim, fazemos a clonagem raza do objeto, se tiver subobjetos passará pelo mesmo problema acima
const obj4 = { ...obj3 };
obj4.test = 456;

console.log(obj3)
console.log(obj4)

const obj5 = {
    test: 123,
    subObject: {
        test: 456
    }
};

// Mesmo assim, fazemos a clonagem raza do objeto, se tiver subobjetos passará pelo mesmo problema acima
const obj6 = { ...obj5 }; // Para resolver: const obj6 = { ...obj5, subObject: ...obj5.subObject } 
obj6.subObject.test = 789;

console.log(obj5);
console.log(obj6);
