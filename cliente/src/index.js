import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient, {InMemoryCache} from "apollo-boost";
import {RootSession }from './App';
import reportWebVitals from './reportWebVitals';


const client = new ApolloClient({

  uri: "http://localhost:4000/graphql",
  // enviar token
   fetchOptions: {
   credentials: 'include'
   },
   request: operation => {
     const token = localStorage.getItem('token')
     operation.setContext({
       headers:{
         authorization: token
       }
     })
   },
  cache: new InMemoryCache({
     addTypename:false
  }),
  
  onError: ({networkError, graphQLErrors}) => {
    console.log('networkErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
})
ReactDOM.render(
  <ApolloProvider client = {client}>
    <RootSession/>
  </ApolloProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
