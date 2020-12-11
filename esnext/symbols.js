
//Simbolo é uma forma de gerar um identificador único, nunca é igual a outro. 
const uniqueId = Symbol('Hello');// Passa um valor dentro do symbol, serve para efeitos de debug
const uniqueId2 = Symbol('Hello');// Mesmo que eu passe o mesmo valor, ao fazer uma comparação resultará em false

// console.log(uniqueId === uniqueId2);


// Como propriedade de objeto, só acessível por quem tiver o symbol ou utilizar o método getOwnPropertySymbols
const obj = {
    // Não chega a ser uma propriedade privada, é para alerta a outros desenvolvedores 
    // que se trata de uma propriedade que não deve sofrer altereções diretas. Parecido com o underscore
    [uniqueId]: 'Hello'
};
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertySymbols(obj));


// Well know symbols

//Usada para add propriedades ao obj
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

// Cria uma interface iterator
const it = arr[Symbol.iterator]();

/*
while (true) {
    let { value, done } = it.next();

    console.log(value);

    if (done) break;
}
*/

//similar ao código acima
// for (const value of arr) {
//     console.log(value);
// }


const obj2 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it2 = obj2[Symbol.iterator]();
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());


//Agora podemos utlizar controles de laços como for of

// for (const value of obj2) {
//     console.log(value);
// }

// Spread
const arr2 = [...obj2];
//console.log(arr2)


//Generators: Maneiras de criar pausar
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    console.log(value) // Recebe valores de fora
    console.log('Function');
}

//Tenho que criar a interface de iteração
// hello(); <-- Assim não funciona

const it3 = hello();
// console.log(it3.next())
// console.log(it3.next())
// console.log(it3.next('Outside')) // Envio valores para serem captados pelo yield


//Ferramenta poderosa, consegue um controle externo de um loop
function* naturalNumbers() {
    let numbers = 0;
    while (true) {
        yield numbers;
        numbers++;
    }
}

const it4 = naturalNumbers()
// apesar de ter um loop infinito na função, eu consigo um controle utilizando generators
// console.log(it4.next())
// console.log(it4.next())
// console.log(it4.next())
// console.log(it4.next())
// console.log(it4.next())


// Podemos implementar uma propriedade symbol idêntica ao obj2, usando generators para simplificar
const obj3 = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i]; // cria a interface iterator            
        }
    }
};

for (let value of obj3) {
    console.log(value)
}