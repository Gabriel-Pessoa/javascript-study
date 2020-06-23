import React from 'react'

import Clock from './Clock'
import Counter from './Counter'
import Events from './Events'
import Mailbox from './Mailbox'
import Page from './Page'
import Welcome from './Welcome'


const propriedades = {
    name: 'Gabriel',
    age: 24,
    city: 'Recife',
    uf: 'PE'    
}

const messages = ['React', 'Re: React', 'Re:Re: React']


const Tests = (props) => {
    
    return (
        <div>

            <Clock />
            <Counter />
            <Events />
            <Mailbox unreadMessages = {messages} />
            <Page />
            <Welcome {...propriedades} />

        </div>
    )
}

export default Tests