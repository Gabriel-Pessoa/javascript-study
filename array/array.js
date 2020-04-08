//Array dentro do JS é um objeto. Não existe um array nativo dentro do JS
//Estrutura dinâmica, não precisa delimitar o tamanho do array
//Como o JS é fracamente tipada, aceitar qualquer dados(string, bool, number). Ele é heterogênea
// É uma boa prática deixar o array homogêneo
console.log(typeof Array, typeof new Array, typeof []) 

let aprovados = new Array('Bia','Carlos','Ana') // Uma forma não muito usual de declarar um array
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana'] // A forma literal é a forma mais comum e também recomendada de se declarar um array e seta-lo
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Adicionando itens ao array de índice 3
aprovados.push('Abia') // Adicionandoi 
console.log(aprovados.length);

aprovados[9] = 'Rafael' // Adicionei uma string ao índice 9 do array, ficando o índice 5 ao 8 undefined
console.log(aprovados.length);
console.log(aprovados[8] === undefined)

console.log(aprovados);
aprovados.sort() // Ordena o array por ordem alfabética
console.log(aprovados);

delete aprovados[1] // Exclui o item dessa posição e ele passa a ser undefined
console.log(aprovados[1]);
console.log(aprovados[2]); //O array não perde a ordem depois que exclui um item

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 1) // .slice exclui ou add elementos ao mesmo tempo. Para excluir o primeiro parametro define o primeiro indice e a partir dele quantos depois serão excluídos 2,3,4,5...n
console.log(aprovados);

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 2) // excluiu 2(dois) índices a partir do índice 1
console.log(aprovados);

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,2,'elemento1','elemento2') // a partir do índice 1, excluiu 2 (dois) índice posteriores e adicionou dois novos valores posteriores ao índice 1
console.log(aprovados);







