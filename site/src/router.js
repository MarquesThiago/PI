import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "./pages/home/home"
import Senac_Galeria from "./pages/pales_senac/galeria/galeria"

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/palestra_senac/photos" component={Senac_Galeria}/>
                
            </Switch>
        </BrowserRouter>
    )
}
