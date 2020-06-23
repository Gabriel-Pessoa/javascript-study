import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Menu from '../components/Menu/Menu'
import Routes from './Routes'

const App = (props) => {
    return (
       
        <BrowserRouter>   
            <Menu />
            <Routes />
        </BrowserRouter>
        
    )
}

export default App