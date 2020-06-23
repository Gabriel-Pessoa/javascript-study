import React from 'react'

export default function FancyBorder(props) {
    return (
        // Desde que FancyBorder renderize a {props.children} dentro de uma <div>, os elementos serão renderizados no resultado final.
        <div className={'FacyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}
