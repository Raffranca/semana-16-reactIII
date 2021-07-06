import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home}/>
                
                <Route path='/Cadastro'component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
