class Book {
    constructor(title, pages, isbn) {
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }
    printIsbn() {
        console.log(this.isbn)
    }
}

let book = new Book('Romanos', 64, 240809)
console.log(book.title)
book.title = '2 Coríntios'
console.log(book.title)

class ITBook extends Book {
    constructor(title, pages, isbn, tecnology) {
        super(title,pages,isbn)
        this.tecnology = tecnology
    }
    printTecnology() {
        console.log(this.tecnology)
    }
}

let jsBook = new ITBook('Gálatas', 10, 140219, 'JavaScript')

console.log(jsBook.title)
jsBook.printTecnology()