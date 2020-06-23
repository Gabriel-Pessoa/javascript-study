import React, { useState } from 'react'



// class Page extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { showWarning: true }

//         this.handleToggleClick = this.handleToggleClick.bind(this)
//     }

//     handleToggleClick() {
//         const showWarning = !this.state.showWarning
//         this.setState({ showWarning })
//     }

//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>
//                 {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         )
//     }
// }

const Page = (props) => {

    let [showWarning, setShowWarning] = useState(false)

    function WarningBanner(props) {
        if (!props.warn) {
            return null
        }
    
        return (
            <div className="warning">
                <h1>Warning!</h1>
            </div>
        )
    }

    function handleToggleClick() {
        setShowWarning( showWarning = !showWarning )
    }

    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}

export default Page