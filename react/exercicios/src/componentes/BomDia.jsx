import React from 'react'

// por conversão o parâmetro se chama props
export default props => [
// é preciso envolver em um nó, ou dentro de um array para renderizar mais de um componente, podemos substituir o nó envolvente por React.Fragment para ele não aparecer, importando ou não
        <h1 key='h1'>Bom dia {props.nome}! Tem {props.idade} anos</h1>,
        <h2 key='h2'>Até breve!</h2>
    ]    

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}! Tem {props.idade} anos</h1> 
//         <h2>Até breve!</h2>
//     </React.Fragment>

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}! Tem {props.idade} anos</h1> 
//         <h2>Até breve!</h2>
//     </div>