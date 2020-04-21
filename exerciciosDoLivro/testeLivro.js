class Livro
{
    constructor(t,p,i)
    {
        // Criando atributos
        this.title = t
        this.pages = p
        this.isbn = i
    }

    printTitle ()
    {
        console.log(this.title)
    }

    prinIsbn()
    {
        console.log(this.isbn)
    }
}

class LivroDigital extends Livro
{
    constructor (t,p,i,d)
    {
        super (t,p,i)
        this.digital = d
    }
    
    printDigi ()
    {
        console.log(this.digital)
    }
}

let joel = new Livro("Profecias de Joel", 30 ,150068)

joel.printTitle()
joel.prinIsbn()

// let romanos = new Livro('Paulo aos Romanos',40,180069)

// romanos.printTitle()
// romanos.prinIsbn()

let galatas = new LivroDigital('Paulo aos Gálatas',35,200019,true)

galatas.printTitle()
galatas.prinIsbn()
galatas.printDigi()

