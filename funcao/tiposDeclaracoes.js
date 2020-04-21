console.log(soma(3,4)) // A única diferença é que na declaration podemos invocar antes da função, nas outras não
// console.log(sub(3,4))
// console.log(mult(3,4))

// Fuction declaration
function soma (x,y) {
    return x + y
}

//Fuction expression

let sub = function (x,y) {
    return x-y
}

// Named function expression

let mult = function mult (x,y) {
    return x * y
}