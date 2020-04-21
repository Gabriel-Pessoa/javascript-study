const anonimo = process.argv.indexOf('-a') !== -1 // Se tiver presente na lista de argumentos, ele retorna verdadeiro
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anônimo!\n') //  (\n) quebra de linha (enter)
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ') // process.stdout saída semelhante ao console.log
    process.stdin.on('data', data => { // stdin entrada de dados. Evento que é disparo após teclar enter
        const nome = data.toString().replace('\n', '') // Quando o usúario aperta enter com a entrada do nome, a tecla enter vem junto. Isso serve para pegar o enter e troca por espaço vazio
        
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}