import React from 'react'

// objeto para facilitar acesso a nomes das escala baseados nas chaves 
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        //this.setState( {temperature: e.target.value }) // state local, controlado pelo componente atual
        this.props.onTemperatureChange(e.target.value) // executa função recebida do componente pai, passando novo valor, realizando alterações no componente pai
    }

    
    render() {
        const temperature = this.props.temperature // recebe temperatura enviada pelo componente pai
        const scale = this.props.scale // recebe escala enviada pelo componente pai
        return (
            <fieldset>
                <legend>Informe a temperatura em {scaleNames[scale]}:</legend> {/*scaleNames[scale] forma de acessar o objeto, baseado em sua chave */}
                <input value={temperature}
                    onChange={this.handleChange}/> {/* Invoca função para cada alteração do input */}
            </fieldset>
        )
    }
}

export default TemperatureInput