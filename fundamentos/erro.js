function tratarErroELancar (erro) {
   // throw new Error ('Deu erro mano')
   // throw true
   // throw 'mensagem'
   throw {
       nome: erro.nome,            //Posso fazer várias coisas. Relançar erro por exemplo
       msg: erro.mensagem,
       data: new Date
   }
}

function imprimirNomeGritando (obj) {
    try {                                             // Se eu achar que um código é passivo de erro, jo-
        console.log(obj.name.toUpperCase() + ' !!!')  // go dentro do try
    } catch (e) {                                     // O try lança no catch
       tratarErroELancar(e)                           // Chamei uma função para tratamento de erro
    } 
    finally{
        console.log("Final")        // Executa no final, tendo erro ou não
    }   
}

const obj = { nome: 'Gabriel'} // Mudando a chave para nome ou name para testar o erro

imprimirNomeGritando(obj)