import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Home = (props) => {
    return (
        <nav id="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tests">Testes</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/list">Listas</Link></li>
                <li><Link to="/form">Formulário</Link></li>
                <li><Link to="/temperature">Temperatura Celsius/Fahrenheit</Link></li>
                <li><Link to="/composition">Composição e Herança</Link></li>
                <li><Link to="/app">App</Link></li>
            </ul>
            <hr/>
        </nav>
    )
}

export default Home