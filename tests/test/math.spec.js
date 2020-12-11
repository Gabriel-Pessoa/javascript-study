const assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function () {

    //hooks
    // Consigo redefinir o valor de uma variável, instância antes de reexecutar cada 'it'
    // Evita repetição
    beforeEach(function () {
        value = 0;
    });

    it('Sum two numbers', function (done) {
        const math = new Math();
        //não é recomendável utilizar arrow function, por conta do contexto léxico do this,
        // pois, alguns método são disponibilizados dentro do 'it'
        this.timeout(3000); // consigo alterar o limite do timeout de teste, que por padrão são 2000ms

        value = 5;

        math.sum(value, 5, value => {
            //assert.equal(value, 10);

            //utilizando o expect do chai, é mais descritivo
            expect(value).to.equal(10);

            done(); // Garante que o teste foi finalizado, mesmo sendo assíncrono.
        });

        //throw new Error('Oh not'); //Gerando nosso próprio erro

        /* Capturando erro com try/catch
        try {
            assert.equal(math.sum(5, 5), 10);
        } catch (error) {
            console.log(error);
        }*/
    });

    //it.only, executa apenas esse teste
    // it.skip consigo deixar o teste pendente
    it('Multiply two numbers', function () {
        const math = new Math();

        //Posso criar um objeto e validá-lo
        const obj = { name: 'Gabriel Júlio' };
        const obj2 = { name: 'Gabriel Júlio' };

        //expect(math.multiply(value, 5)).to.equal(0);
        //expect(obj).to.have.property('name').equal('Gabriel Júlio');
        //expect(obj).to.equal(obj2);// Lança erro, javascript compara referência quando se trata de obj
        expect(obj).to.deep.equal(obj2); // Comparação profunda do objeto, sem comparar referência, mas sim, valores.
    });

    it.only('Calls res with sum and index values', function () {
        const req = {}; // Como não está sendo chamado, posso criar um objeto vazio
        /*
        const res = {
            load: sinon.spy() //utilizando o sinon.spy() consigo saber se a função foi invocada
        };
        */
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };

        //sinon.spy(res, 'load') // o spy começa a monitor a propriedade 'load' do obj 'res' 

        sinon.stub(res, 'load').returns('retorno personalizado'); // substitui o método, gerando um retorno personalizado

        const math = new Math();
        math.printSum(req, res, 5, 5);

        res.restore(); //retorna o método ao normal, alterado no sinon.stub

        //expect(res.load.calledOnce).to.be.true; // espera que res.load tenha sido chamado uma vez para que seja true
        expect(res.load.args[0][0]).to.equal('index');
    });

    // Posso inicializar sem executar o código. Portanto, constará como pendente.
    //it('Division two numbers');
});
