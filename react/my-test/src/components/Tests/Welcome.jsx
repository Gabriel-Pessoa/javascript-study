import React from 'react'


const Welcome = (props) => {
    return (
    <div style={{ color: '#008000'}}>
        <h1> Hello, {props.name}</h1>
        <h2> Idade, {props.age} anos</h2>
        <h2> City, {props.city}</h2>
        <h2> UF, {props.uf}</h2>
    </div>
    )
}

// Equivalente ao de cima
// class Welcome extends React.Component {
//     render() {
//     return <h1>Hello, {this.props.name}</h1>
//     }
// }

export default Welcome