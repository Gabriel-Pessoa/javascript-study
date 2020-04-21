class Book {
    constructor (title, pag, isbn) {
        this.title = title
        this.pag = pag
        this.isbn = isbn
    }
}

const book1 = new Book('Romanos',22,551901)


// Com prototype a função será compartilhada entre todas as instâncias (new Book), e somente uma cópia será criada. Isso economiza mémoria e reduz o custo
// de processamento no que diz respeito a atribuir funções à instância
Book.prototype.imprimirTitulo = function() {
    console.log(this.title)
}

book1.imprimirTitulo() 