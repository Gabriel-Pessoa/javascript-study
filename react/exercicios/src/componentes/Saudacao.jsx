/* Componente baseado em class. Características: estados, métodos de ciclo de vida (chamar deerminado trecho de código antes do componente ser renderizado ou destruído)
*/
import React, { Component } from 'react'

export default class Saudacao extends Component { // conceito de herança
    
    // não conseguimos alterar variáveis de leituras
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // é necessário chamar o super passando o props como parâmetro

        this.setTipo = this.setTipo.bind(this) // força o this apontar para Saudacao
        // poderia ter feito para setNome também
        // outra forma é arrow function, que é o this não varia       
    }

    setTipo(e) {
        // Alterando state com função setState
        this.setState({ tipo: e.target.value }) // alterando atributo do objeto
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    // função responsável por renderizar o componente
    render() {
        const { tipo, nome } = this.state // para acessar as propriedas passada para componentes de classes

        // retorna uma expressão
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}