function resultadoNota(codigo, nota1 = 0, nota2 = 0, nota3 = 0) {
    let mediaPonderada = 0
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a - b) // Sort precisa de uma função para ordenar valores numéricos, essa retorna crescente
    //((a,b) => a < b ? 1 : -1) e essa retorna decrescente
    mediaPonderada = (notas[0] * 3 + notas[1] * 3 + notas[2] * 4) / 10
    
    console.log(`Código aluno = ${codigo}, Notas = ${nota1}, ${nota2}, ${nota3}. Resultado = ${mediaPonderada >= 5 ? 'Aprovado' : 'Reprovado'}`)

}

resultadoNota(123, 4, 5, 4)
