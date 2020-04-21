var funcs = []

/* usando a variável var, é como se não fosse armazenado o valor na memória, é como se
a função não gravasse na memória, memoriando apenas o valor da saída do loop de  "i" 
*/
for(var i = 0; i < 10; i++)
{
    funcs.push(function(){
        console.log(i)
    })
}

funcs [2]()
funcs [8]()