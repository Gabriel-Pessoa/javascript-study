//extendendo a classe Error
class CustomError extends Error {
    constructor({ message, data }) {
        super(message); // Passo a messagem recebida no constructor para ter o mesmo comportamento da super classe
        this.data = data; // Porém, eu posso add atributos a classe atual e usá-las nas minhas instâncias
    }
}


// Exemplos:

// Criando um erro
try {

    console.log(name);
    const name = 'Gabriel Júlio';

} catch (error) { // Captura erro no catch

    console.log(error);
}

// Forçando um erro através da classe de erro do javascript, que pode
// customizar a messagem do erro
try {

    const myError = new Error('Custom message');
    throw myError; // palavra reservada para lançar o erro

} catch (error) {

    console.log(error);

} finally { // Palavra reservada que força a execução desse bloco de código com erro ou não

    console.log('Keep going...');
}

// Erro personalizado
try {

    const customError = new CustomError({
        message: 'Custom error with instance of class',
        data: {
            type: 'Server error'
        }
    });
    throw customError;

} catch (error) {
    console.log(error);
    //Além de captura os dados personalizados do erro, poderia fazer algum tipo de controle
    // Usando o if 
    console.log(error.data);

    if(error.data.type === 'Server error') {
        console.log('Test!');
    }
}