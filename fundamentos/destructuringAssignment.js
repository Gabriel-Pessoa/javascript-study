const arr = ['Apple', 'Banana', 'Orange', ['tomato']];

/*
var apple = arr[0];
var banana = arr[1];
var orange = arr[3];
*/

// Cuidado com os dois ou mais níveis de destructuring
const [apple, banana, orange, [tomato]] = arr;

//console.log(tomato)

const obj = {
    name: 'Celso'
};


//Quebra o objeto, encontra a propriedade "name" dentro do "obj", criando uma varíavel para acessa-lá.
const { name } = obj;
//console.log(name);

// Posso renomear a varíavel dentro do destructuring
let { name: name2 } = obj;
//console.log(name2);

// Não altera a propriedade do obj original
name2 = 'Henrique';
//console.log(obj);


//Acessando sub objetos e sub arrays
const obj2 = {
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

const { props: { age, favoriteColors: [color1, color2] } } = obj2;
// console.log(age);
// console.log(color1);
// console.log(color2);


const arr2 = [{ name: 'Apple', type: 'fruit' }]
const [{ name: name3 }] = arr2
//console.log(name3)


//Destructuring com funções e utilizar default values
function sum([a, b] = [0, 0]) {
    return a + b;
}

console.log(sum());