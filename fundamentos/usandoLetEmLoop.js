for(let i = 0; i < 10; i++)
{
    console.log(i)
}
/* o valor de i só sai do loop quando chega a 10, mas como se trata de um let,
não fica acessível fora do bloco de código do loop */
console.log('Valor de i fora do loop =', i) 