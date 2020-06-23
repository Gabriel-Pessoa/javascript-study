import React from 'react'

import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

// função que converte Fahrenheit para Celsius
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

// função que converte Celsius para Fahrenheit 
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

// função tryConvert('10.22', toFahrenheit) retorna '50.396'.
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature) // converte parâmetro de entrada da função para float
    if(Number.isNaN(input)) { // validação, caso o parâmetro não seja um número
        return ''
    }
    const output = convert(input) // é atribuido a variável, o valor da função com o parâmetro específico, que ret
    const rounded = Math.round(output * 1000) / 1000 // cálcula de aproximação e arredondamento

    return rounded.toString() // retorna rouded como string
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { temperature: '', scale: 'c' }

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }


    // função que trata às entradas de Celsius, alterando a escale
    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature })
    }

    // função que trata às entradas de Fahrenheit, alerando escala
    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature })
    }

    render() {
        // a modificação de um dados é refletida em vários componentes. Elevamos o state comportilhado ao elemento pai.

        const scale = this.state.scale 

        const temperature = this.state.temperature
        
        //O input que acabamos de editar recebe seu valor atual e o outro input é atualizado com a temperatura após a conversão. Formando à sincronização
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature // escala sendo igual a f, converte a temperatura recebida e envia para componente filho, senão mantém
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature // escala sendo igual a Cº, converte a temperatura recebida e envia para componente filho, senão mantém

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}
export default Calculator