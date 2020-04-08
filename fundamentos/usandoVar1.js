{
    {
        {
    
            {
                var sera = 'Será??'                 
            }  
        }
    }
}

console.log(sera) // Em JS var fora de escopo fica acessível, exceto em function

function teste (){
    var local = 123
}

//Erro! A variável "local" criada na fuction "teste "não fica acessível fora dela
console.log(local) 
