import React from 'react'

const Greeting = (props) => {

    function UserGreeting(props) {
        return <h1>Bem vindo de volta!</h1>
    }

    function GuestGreeting(props) {
        return <h1>Por favor inscreva-se</h1>;
    }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
         if(isLoggedIn) {
             return <UserGreeting />
         }  
         return <GuestGreeting />
    }

    return (
        <div>
            <Greeting {...props} />
        </div>
    )
}

export default Greeting