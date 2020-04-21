//usando notaçao literal
const obj1 = {}

console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

console.log(obj2)


// Funções construtoras
function Produto(nome,preco,desc) {  // preço e desconto estão encapsuladas. nome está publica e pode ser alterada  
    this.nome = nome
    this.getPrecoComDesconto = function () {
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('Notebook',2998.99,0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto);

// Funções Factory

function criarFuncionario (nome,salario,faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Mária',7800,4)
const f2 = criarFuncionario('João', 3500, 6)

console.log(f1.getSalario(),f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

// JSON
const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON.info);
 
