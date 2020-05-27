import React, { Component } from 'react'
import './Calculator.css' // referenciando o css para o build
import Button from '../components/Button'
import Display from '../components/Display'

// objeto que representa estado inical da calculadora. Clear memory vai usar esse objeto para setar estado inicial
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0], // array de mémoria para guardar dados de entrada
    current: 0 // variável que representa índice do array acima; para controle.
}

export default class Calculator extends Component {
    
    state = {...initialState} // clone do objeto initialState e atribui 

    constructor(props) {
        super(props)
         // variável que recebe função de dentro do objeto atual passando n como parâmetro. Garantindo o valor atual do this 
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    // restaura para estado inicial ou objeto initialState
    clearMemory() {
        this.setState({ ...initialState })
    } 

    setOperation(operation) {
        if(this.state.current === 0) {
            this.setState({ operation, current:1, clearDisplay: true })
        }
        else {
            const equals = operation === '=' 
            

            const currentOperation = this.state.operation // pegando operação anterior

            const values = [...this.state.values]
            
            switch(currentOperation) {
                case '+':
                    values[0] = values[0] + values[1]
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    break
                case '*':
                    values[0] = values[0] * values[1]
                    break
                case '/':
                    values[0] = values[0] / values[1]
                    break
                default:
                    values[0] = this.state.values[0]
                    console.log('Erro na operação!')      
            }

            values[1] =  0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }
    
    addDigit(n) {

        if( n === '.' && this.state.displayValue.includes('.')) { // regra para evitar duplicação do dígito '.' 
            return
        }
        
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay // duas situações para limpar display.

        const currentValue = clearDisplay ? '' : this.state.displayValue // defini valor corrente baseado na variável booleana clearDisplay
        
        const displayValue = currentValue + n // atribuição aditiva para cada valor de entrada salvando na variável displayValue
        
        this.setState({ displayValue, clearDisplay:false })

        if ( n !== '.') {
            const i = this.state.current // referencia índice para alteração do array values
            const newValue = parseFloat(displayValue) // converte toda a string para um float
            const values = [...this.state.values] // clona o array values do objeto state e atribui a values
            values[i] = newValue // altera valor baseado no índice
            this.setState({ values }) // modifica o array do objeto state já alterado
            console.log(values)
        }

    }

    render() {
       
        return (
            // class é uma palavra reservada do html, dentro do jsx é className    
            <div className="calculator"> 
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}
