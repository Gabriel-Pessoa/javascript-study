import React from 'react'

const MailBox = (props) => {
    const unreadMessages = props.unreadMessages
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && 
                <h2>
                    Você tem {unreadMessages.length} mensagens não lidas
                </h2>            
            }
        </div>
    )
}

export default MailBox