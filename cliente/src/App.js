import React, { Component, Fragment } from 'react';
import { ApolloProvider } from "react-apollo";
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ApolloClient from "apollo-boost";
import Header from './componentes/Header'
import Ibm from './componentes/Ibm'
import NuevoIbm from './componentes/NuevoIbm';
import  EditarIbm from './componentes/EditarIbm';
import Registro from './componentes/Auth/Registro';
import Login from './componentes/Auth/Login'
const client = new ApolloClient({

  uri: "http://localhost:4000/graphql",
  
  onError: ({networkError, graphQLErrors}) => {
    console.log('networkErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        <Router>
         <Fragment>
         <Header/>
        <div className='container'>
    
          <Switch>
          <Route exact path="/" component= {Ibm}/> 
          <Route exact path="/ibm/nuevo" component= {NuevoIbm}/>
          <Route exact path="/ibm/editar/:id" component={EditarIbm}/> 
          <Route exact path="/registro" component= {Registro}/> 
          <Route exact path="/login" component= {Login}/> 
          </Switch>
          </div>
         </Fragment>
        </Router>
        

        
      </ApolloProvider>
    )
  }
}

export default App;
