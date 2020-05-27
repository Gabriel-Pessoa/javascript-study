import React from 'react'

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => { /*o primeiro parâmetro é o array que será trabalhado*/
        return React.cloneElement(child, {  /* o método clone só aceita um elemento, não aceitar mais de um. Podemos inclui-lo dentro de um map passando um filho por vez*/
            ...props, ...child.props
        })
    })
}