import React, {useContext, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import Context from './utils/context'

import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import EsqueceuSenha from './pages/EsqueceuSenha';
import PostarFoto from './pages/PostarFoto';
import Videos from './pages/Videos';
import Navegacao from './pages/Navegacao';
import Estudos from './pages/Home';

function Routes() {

  const context = useContext(Context);
  const PrivateRoute = ({ component: Component, redirect, ...rest }) => {
    return (

      <Route
        {...rest}
        render={props =>
          context.isAuthenticated() ? (
            <Component {...props} />
          ) : (
              <Redirect to={{ pathname: redirect, state: { from: props.location } }} />
            )
        }
      />
    );
  }

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} redirect="/login" />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/esqueceu-senha" component={EsqueceuSenha} />
        <PrivateRoute path="/postar-foto" component={PostarFoto} redirect="/login" />
        <PrivateRoute path="/videos" component={Videos} redirect="/login" />
        <PrivateRoute path="/navegacao" component={Navegacao} redirect="/login" />
        <PrivateRoute path="/estudos" component={Estudos} redirect="/login" />
        <PrivateRoute path="/perfil" component={Home} redirect="/login" />
        <PrivateRoute path="/estudos" component={Estudos} redirect="/login" />
      </Switch>
    </Router>

  )
}

export default Routes;
