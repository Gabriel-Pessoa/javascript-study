function Pessoa () {
    this.idade = 0

    setInterval( ()=>{ // Com a função arrow dentro do contexto léxico da fuction 'Pessoa', irá sem-
        this.idade++ // pre apontar para 'Pessoa', mesmo estando dentro do setInterval.
        console.log(this.idade)
        
    }, 1000)
}
new Pessoa
