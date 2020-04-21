console.log('01', '01' == 1); // '1' é igual a 1. Sim, o string '01' o java entende o valor da 
// string que é 1 e compara com o número
console.log('02', '01' === 1); // operador que leve em conta o tipo. Com é mesmo valor, só que de
// tipos diferentes, string e number, ele retorna falso
console.log('03', '3' != 3); // 3 é diferente de 3. Não, são iguais
console.log('04', '3' !== 3) //// 3 é diferente em valor ou tipo de 3. Sim, um é string o outro é number

console.log('05', 3 < 2);
console.log('06', 3 > 2);
console.log('07', 3 <= 2 );
console.log('07', 3 >= 2 );

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09', d1 === d2);
console.log('10', d1 === d2); // nos dois caso ele compara referência de mémorias e retorna false
console.log('11', d1.getTime() === d2.getTime()); // True, os dois são number. 
console.log('12', undefined == null);
console.log('13', undefined === null); // Dê preferência usar ===, porque não é aconselhado ficar 
// comparando váriaveis de tipos diferente.






