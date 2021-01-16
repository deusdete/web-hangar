import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import EsqueceuSenha from './pages/EsqueceuSenha';

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/registro" component={Registro}/>
        <Route path="/esqueceu-senha" component={EsqueceuSenha}/>
      </Switch>
    </Router>
  )
}

export default Routes;
