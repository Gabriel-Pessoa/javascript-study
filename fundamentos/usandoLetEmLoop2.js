var funcs = []

/* usando a variável let, é como se fosse armazenado o valor na memória, é como se a
a função gravasse na memória */
for(let i = 0; i < 10; i++) 
{
    funcs.push(function(){
        console.log(i)
    })
}

funcs [2]()
funcs [6]()
funcs [8]()