import React from 'react'

import ListItem from './ListItem'

const NumberList = (props) => {

    const numbers = props.numbers // [1,2,3,4,5]

    return (
        <ul>

            {numbers.map(number => 
            
            <ListItem key={number.toString()} value={number} />

            )} 
             
        </ul>
    )

}

export default NumberList
         