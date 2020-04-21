var obj = new Object()

obj = {
    name: {
        nome :'Gabriel',
        sobrenome : 'Pessoa'
    },
    endereco:'Rua Rio das estrelas, 180'
}

function Livro (titulo, paginas,isbn) {
    this.titulo = titulo
    this.paginas = paginas
    this.isbn = isbn
}

var livro = new Livro ('O senhor dos anéis', 200, 158600)

console.log(livro.titulo)
livro.titulo = 'O hobbit'
console.log(livro.titulo)

Livro.prototype.imprimeTitulo = function () { // Uma forma de incluir um metodo numa classe
    console.log(this.titulo)
}

livro.imprimeTitulo()




