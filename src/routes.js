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
import PostarFoto from './pages/PostarFoto';
import PostarVideo from './pages/PostarVideo';

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/registro" component={Registro}/>
        <Route path="/esqueceu-senha" component={EsqueceuSenha}/>
        <Route path="/postar-foto" component={PostarFoto}/>
        <Route path="/postar-video" component={PostarVideo}/>
      </Switch>
    </Router>
  )
}

export default Routes;
