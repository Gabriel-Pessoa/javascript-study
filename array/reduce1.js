const alunos = [
    {nome:'João', nota:7.3, bolsista:false},
    {nome:'Maria', nota:9.2, bolsista:true},
    {nome:'Pedro', nota:9.8, bolsista:false},
    {nome:'Ana', nota:8.7, bolsista:true}
]

const somaNotas = alunos.map(a => a.nota) // Usando map estou pegando todas as notas dos objetos

const resultado = somaNotas.reduce((acumulador, atual) =>{
    console.log(acumulador,atual)
    return acumulador + atual
}, 0) // aqui eu posso passar o valor inicial do acumulador, ou posso passar um array [] ou objeto {} para ele me retornar um deles

console.log(resultado) // Aqui está o resultado do reduce