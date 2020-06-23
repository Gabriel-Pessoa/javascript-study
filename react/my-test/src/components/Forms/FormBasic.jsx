import React, { useState } from 'react'

import './style.css'

const FormBasic = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        fluitFlavor: ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        alert(`Os dados foram enviados. Nome = ${formData.name} e sabor de suco = ${formData.fluitFlavor}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dados</legend>
                    <label>Nome:</label>
                    <input type="text" name="name" onChange={handleChange} />
                </fieldset>
                <fieldset>
                    <legend>Suco</legend>
                    <label>Escolha seu sabor favorito:</label>
                    <select name="fluitFlavor" onChange={handleChange}>
                        <option>Selecione</option>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Coco</option>
                        <option value="manga">Manga</option>
                    </select>
                </fieldset>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )

}

// class FormBasic extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {value:''}

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)

//     }


//     handleChange(event) {
//         const value = event.target.value
//         this.setState({value})
//     }

//     handleSubmit(event) {
//         event.preventDefault()
//         alert('Um nome foi enviado: ' + this.state.value)
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Nome:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Enviar" />
//             </form>
//         )
//     }
// }


export default FormBasic
