var numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
    /* variável let possui uma diferença do var, que é justamente o escopo do bloco
    preservando a variável let dentro do escopo, sem perigo de subscrevê-la fora dele
    */
}

console.log('Fora =', numero)

