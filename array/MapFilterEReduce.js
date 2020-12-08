/**
 * Filter
 * Retornar um novo array, sem modificar o anterior, 
 * filtrando os elementos baseado em uma callback.
 */
const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 4,
        weight: 5
    },
    {
        name: 'mingal',
        type: 'cat',
        age: 6,
        weight: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 0.01
    },
    {
        name: 'marrom',
        type: 'cat',
        age: 2,
        weight: 1
    },
    {
        name: 'bolinha',
        type: 'dog',
        age: 15,
        weight: 30
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 0.01
    }
];

const filterAge = pet => pet.age < 5;

const newsPets = pets.filter(filterAge);

//console.log(newsPets)

// Usando destructuring
const filterAge2 = ({ age }) => age < 5;

//console.log(pets.filter(filterAge2));

/**
 * Map
 * Retorna um novo array com a mesma quantidade de elementos 
 * que o array inicial
 */

const petNames = pets.map(pet => pet.name);

//console.log(petNames);


/*
   Reduce.
*/

// Sempre eu tenho que definir o acumulador.

/* const sumWeight = pets.map(pet => pet.weight).reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
}); */

const sumWeight = pets.reduce((accumulator, current) => {
    //console.log(`accumulator: ${accumulator}, current: ${current.weight}`);
    return accumulator + current.weight
}, 0);

//console.log(sumWeight.toFixed(2))



//Posso retornar um objeto modificado
const modifiedObject = pets.reduce((accumulator, current) => {
    return {
        totalAge: accumulator.totalAge + current.age,
        totalWeight: accumulator.totalWeight + current.weight
    }
}, { totalAge: 0, totalWeight: 0 })

//console.log(modifiedObject);



// Filtrando com reduce

const filterWeightDog = pets.reduce((accumulator, current) => {
    if (current.type === 'dog') {
        return accumulator + current.weight
    } else {
        return accumulator;
    }
}, 0);

//console.log(filterWeightDog);


/**
 * Bônus com Promises
 */

const items = ['a', 'b', 'c', 'd'];

// função autoinvocada
;(async function () {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        })
    }

    // const itemMapped = promiseFunction('x');
    // console.log(await itemMapped);

    //Transforma o array de items, em um array de promises
    const itemsMappedPromises = items.map(promiseFunction);
    
    //Resolve todas as promises do array
    const itemsMapped = await Promise.all(itemsMappedPromises)

    console.log(itemsMapped);
})()