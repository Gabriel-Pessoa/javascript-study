interface Comparable<T> {
    compareTo(b: T): number;
}

class MyObject implements Comparable<MyObject> {
    age: number;
    compareTo(b: MyObject): number {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}

// @ts-check

/**
 * Calcular a área de um círculo
 * @param {number} r (raio do círculo)
 */

const circleArea = r => 3.14 * (r ** 2);

export interface pessoa {
    nome: string;
    idade: number;
    email: string;
    curso: string;
}


// const convertArrayToObject = (array: any[]) => {
//     const initialValue = {};
//     return array.reduce((obj, item) => {
//         return {
//             ...obj,
//             [item]: ''
//         };
//     }, initialValue);
// };

const testePessoa: pessoa = { nome: 'Gabriel', idade: 25, email: 'gabriel@emai.com', curso: 'Análise e Desenvolvimento de Sistemas' };


console.log(Object.keys(testePessoa));
