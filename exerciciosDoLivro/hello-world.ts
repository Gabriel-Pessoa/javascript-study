interface Comparable<T> {
    compareTo(b: T): number;
}

class MyObject implements Comparable<MyObject> {
    age: number;
    compareTo(b: MyObject): number {
        if(this.age === b.age) {
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