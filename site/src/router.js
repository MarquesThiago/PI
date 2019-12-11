import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "./pages/home/home"
import Senac_Galeria from "./pages/pales_senac/galeria/galeria"
import Receita from "./pages/pales_senac/receita/receita"
import GrandeDia from "./pages/acion_principal/action_principal"
import PalestraLoga from "./pages/pales_loga/pales_loga"

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/palestra_senac/photos" component={Senac_Galeria}/>
                <Route path="/palestra_senac/receita" exact component={Receita}/>
                <Route path="/grandeDia" component = {GrandeDia}/>
                <Route path="/palestra_loga" component = {PalestraLoga}/>
            </Switch>
        </BrowserRouter>
    )
}
