const prop2 = 'Gabriel';

const sum1 = function sum1(a, b) {
    return a + b;
}

const obj1 = {
    prop1: 'Valor 1',
    prop2,
    sum1,
    sum2: function sum2(a, b) {
        return a + b;
    },
    sum3(a, b) {
        return a + b;
    }
};
//console.log(obj1);


//Add propriedade no objeto
var propName = 'test';

var obj2 = {    
    [propName]: 'propValue',
    [propName + 'concat']: 'propValue2'
};

//obj2[propName] = 'prop value'; // A forma acima é mais rápida de criar e atribuir valores a propriedades

console.log(obj2)
