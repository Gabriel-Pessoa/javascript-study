import React from 'react'

import FancyBorder from './FancyBorder'

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = { login: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)

    }

    handleChange(e) {
        this.setState({ login: e.target.value })
    }

    handleSignUp() {
        alert(`Bem vindo a bordo, ${this.state.login}`)
    }

    render() {
        return (
            // qualquer conteúdo dentro dessa tag vai ser passado ao componente FancyBorder como props.children
            <Dialog title="Programa de Exploração de Marte" message="Como gostaria de ser chamado?">
                <input type="text" value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Cadastra-se!
                </button>
            </Dialog>
        )
    }
}

export default SignUpDialog
