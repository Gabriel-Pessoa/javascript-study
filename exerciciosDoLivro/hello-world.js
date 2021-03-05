"use strict";
exports.__esModule = true;
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
// @ts-check
/**
 * Calcular a área de um círculo
 * @param {number} r (raio do círculo)
 */
var circleArea = function (r) { return 3.14 * (Math.pow(r, 2)); };
// const convertArrayToObject = (array: any[]) => {
//     const initialValue = {};
//     return array.reduce((obj, item) => {
//         return {
//             ...obj,
//             [item]: ''
//         };
//     }, initialValue);
// };
var testePessoa = { nome: 'Gabriel', idade: 25, email: 'gabriel@emai.com', curso: 'Análise e Desenvolvimento de Sistemas' };
console.log(Object.keys(testePessoa));
