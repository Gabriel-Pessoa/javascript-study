// Toda arrow function é anônima, portanto deve ser atribuída a uma variável ou usada dentro de uma função
const arrowFunction = () => { };

function log(value) {
    return () => {
        console.log(value);
    }
}

// log('Gabriel')();

/**
 * Uso de parentêses obrigatórios em arrow functions
 */

// Dois ou mais argumentos
const parenteses1 = (a, b, c) => a + b + c;

//Operador destructuring ou spread
const parenteses2 = ({ prop }) => prop;
const parenteses3 = ({ ...prop }) => prop;

//Retornando um objeto ou array;
const parenteses4 = _ => ({});
const parenteses5 = _ => ([]);


/* O conceito de hoisting não funciona em arrow function */
// log2('Gabriel');
const log2 = (a) => console.log(a);


//Contexto THIS
var object = {
    showContext: function showContext() {
        //console.log(this); //Referencia o próprio objeto
        this.log('teste'); // Referencia a propriedade do próprio objeto

        /*
        setTimeout(
            function () {
                //o contexto léxico sem o bind dentro dessa função é o window
                console.log(this);
            }.bind(this), 1000) // é preciso utilizar o bind para fixar o contexto do this
        */
       
       // Para resolver esse problema, utilizamos arrow functions, pq ele grava o contexto léxico do escopo em que ela está inserida
       setTimeout(() => {
            this.log(this);
       }, 1000)
    },
    log: function log(value) {
        console.log(value);
    }
};

object.showContext();