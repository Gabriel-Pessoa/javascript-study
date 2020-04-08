    function random ([min = 0, max = 1000]) {
    if (min > max)  [min, max] = [max, min]// Operador destructuring que troca variável caso min > max 
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor) 
} 

console.log(random([50,40]))
console.log(random([992])) // Como max está definido com 1000, 992 assume papel de min
console.log(random([, 10])) // Minimo assume zero
 console.log(random([])) // Max e min assume valores padrões passado na função
 

