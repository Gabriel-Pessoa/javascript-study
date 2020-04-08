const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// for(let i = 0; i < nums.length; i++) {
//     console.log(`O valor do índice ${i} é: ${nums[i]}`);    
// }

// for ( i in nums) { 
//     if( i == 5) { // var i é uma string por isso o operador === não funciona
//         break // o break desvia o fluxo não para fora do 'if', mas sim para o laço mais próximo
//               // no caso o 'for'
//     }
//     console.log(`O índice é: ${i}, o valor é: ${nums[i]}`)
// }

// for ( y in nums) {
//     if (y == 5) {
//         continue
//     }
//     console.log(`O índice é: ${y}, o valor é: ${nums[y]}`)
// }

externo: for( a in nums){ // Criei um rótulo para o for chamado externo
    for( b in nums) {
        if( a == 2 && b== 3){
            break externo // Determinei ao break que desviasse o fluxo para o 'for' rotulado externo
        }
        console.log(`O par = ${a},${b}`);        
    }
}
console.log('Fim!'); // O break desviou o fluxo para cá

