import React, { Component, Fragment } from 'react';
import { ApolloProvider } from "react-apollo";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ApolloClient, {InMemoryCache} from "apollo-boost";
import Header from './componentes/Header'
import Ibm from './componentes/Ibm'
import NuevoIbm from './componentes/NuevoIbm';
import EditarIbm from './componentes/EditarIbm';
import Registro from './componentes/Auth/Registro';
import Login from './componentes/Auth/Login';
import Session from './componentes/Session';


const App = ({refetch, session}) =>{
  const  {obtenerUsuario} = session;
  const mensaje = (obtenerUsuario) ? `Bienvenido  ${obtenerUsuario.usuario}` : <Redirect to="/login" />;
   console.log(session);
    return (
  
        <Router>
         <Fragment>
         <Header/>
        
        <div className='container'>
        <p className= "text-right mt-4">{mensaje}</p>
          <Switch>
          <Route exact path="/" component= {Ibm}/> 
          <Route exact path="/ibm/nuevo" component= {NuevoIbm}/>
          <Route exact path="/ibm/editar/:id" component={EditarIbm}/> 
          <Route exact path="/registro" component= {Registro}/> 
          <Route exact path="/login" render= {()=> <Login  refetch= {refetch}/>}/>
          </Switch>
          </div>
         </Fragment>
        </Router>
        

 
    )

}
const RootSession = Session(App)
export {RootSession};
