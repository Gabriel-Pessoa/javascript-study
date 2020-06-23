import React from 'react'

export default function BoilingVerdict(props) { // recebe props do elemento pai e retorna tag p específica baseada na condição
    if(props.celsius >= 100) {
        return <p>A água ferveu!</p>
    }

    return <p>A água ainda não ferveu!</p>
}