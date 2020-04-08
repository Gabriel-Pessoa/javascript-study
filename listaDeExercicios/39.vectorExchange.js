function vectorExchange(array1,array2) {
   
    for(let i = 0; i < array2.length; i++){
        array1.push(array1[i]) 
        array1[i] = array2[i]
        array2[i] = array1.pop()
    }
       
    console.log(array1)
    console.log(array2)
    
}

let vectorA = [1,2,3,4,5]
let vectorB = [6,7,8,9,10]

vectorExchange(vectorA,vectorB)