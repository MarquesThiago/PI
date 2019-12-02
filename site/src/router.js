import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "./pages/home/home"

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/> 
            </Switch>
        </BrowserRouter>
    )
}
