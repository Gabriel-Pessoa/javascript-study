import React from 'react'

class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }

        // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // const isToggleOn = !this.state.isToggleOn

        // this.setState({
        //     isToggleOn
        // })

        //Equivalente ao de cima
        // this.setState(state => ({
        //     isToggleOn: !state.isToggleOn
        // }))
    }

    handleArguments(event) {
     
        console.log(event.target)
    }

    render() {
        return (
        <div>

         <h1> { this.state.isToggleOn ? 'ON' : 'OFF' } </h1>
         {/* <button onClick={this.handleClick}>ON/OFF</button> */}
         <button onClick={() => this.setState(state => ({ isToggleOn: !state.isToggleOn }))}>ON/OFF</button> <br/>


         <h2>Eventos. Ver console</h2>
         {/* <button onClick={e => this.handleArguments(e)}>Event</button>         */}
         <button onClick={this.handleArguments.bind(this)}>Event</button>     
           
         </div>
        )
    }

}

export default Events