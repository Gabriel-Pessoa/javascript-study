console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome ='Gabriel'
obj1.idade = 24
obj1['logradouro']='Rua Rio Pajeú, 34' // Não indicado utiliza 'string' para definir novo atributo
obj1['bairro']='Ibura'

console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec= function (){
        console.log('Exec...')
    }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()