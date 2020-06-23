import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Tests from '../components/Tests/Index'
import Login from '../components/Login/Index'
import Lists from '../components/Lists/Index'
import Form from '../components/Forms/Index'
import Calculator from '../components/Calculator/Index'
import Composition from '../components/Composition/Index'
import Ui from '../components/UI/FilterableProductTable'



export default props =>
   
        <Switch>
            <Route exact path='/' component={null} />
            <Route path='/tests' component={Tests} />
            <Route path='/login' component={Login} />
            <Route path='/list' component={Lists} />
            <Route path='/form' component={Form} />
            <Route path='/temperature' component={Calculator} />
            <Route path='/composition' component={Composition} />
            <Route path='/app' component={Ui} />
        </Switch>

