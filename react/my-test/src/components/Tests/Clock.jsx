import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props)
        
        this.state = { date: new Date() } // estado inicial do componenete para exibir componente na tela
    }

    
    // componente montado (ciclo de vida).
    componentDidMount() {
        const time = this.props.time || 1000 // acessando props , caso undefined valor default

        this.timerID = setInterval(
            () => this.tick(),
            time
        )
    }

    //componente desmontado (ciclo de vida). Se o componente Clock for removido do DOM, o React chama o componentWillUnmount() para que o temporizador seja interrompido.
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    // a cada segundo o navegador chama esse método com o objeto contendo a hora atual e atualiza a renderização do date para mudar a hora a cada segundo
    tick() {
        this.setState({
            date: new Date()
        })
    }

render() {
    return (
        <div style={{ color: '#120a8f' }}>
            <h1>Um relógio legal!</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
    )
}

}

export default Clock 