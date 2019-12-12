import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './Login';
import Painel from './Painel';
import Mensagem from './Mensagem';

const pages = ()=>{
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Login/>}/>
            <Route exact path="/painel" component={() => <Painel/>}/>
            <Route exact path="/mensagem" component={() => <Mensagem/>}/>
        </Switch>
    </BrowserRouter>
}

export default pages;