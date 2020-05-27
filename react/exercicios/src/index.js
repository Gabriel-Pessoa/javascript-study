import React from 'react' // precisa dessa dependência para conversão de jsx
import ReactDOM from 'react-dom' // para renderizar o primeiro elemento na nossa página

//import Primeiro from './componentes/Primeiro'

//import BomDia from './componentes/BomDia'

//import Multi, { BoaNoite } from './componentes/Multiplos' // posso usar de duas formas as importações

//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


//const elemento = <h1>React 2</h1> // jsx que será convertido em código nativo
//ReactDOM.render(elemento, document.getElementById('root')) // vai injetar o nó na div com id #root

// Por padrão React só aceitar componentes oersonalizado com a primeira letra maíuscula
//ReactDOM.render(<Primeiro />, document.getElementById('root'))

//ReactDOM.render(<BomDia nome="Gabriel" idade={24}/>, document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome ="João"/>
//     </div>
// , document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
         {/* Passando componentes Filhos aqui */}
         <Filho nome="Pedro" />
         <Filho nome="Paulo" />
         <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))