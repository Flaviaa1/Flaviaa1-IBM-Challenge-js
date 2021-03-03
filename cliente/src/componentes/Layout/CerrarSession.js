import React from 'react'
import {ApolloConsumer} from 'react-apollo'

import { withRouter } from "react-router-dom";

const cerrarSessionUsuario = (ibm, history)=> {

    localStorage.removeItem('token', '');

   ibm.resetStore();

  history.push('/login')

}

const CerrarSession = ({history}) => (
   <ApolloConsumer>
       {
           ibm => {
               return (
        <button 
         onClick= {() => cerrarSessionUsuario(ibm, history)}
          className="btn btn-success ml-md-2 mt-2 mt-md-0">Cerrar Session</button>
        )
           }
       }
       
   </ApolloConsumer>
    
)
export default withRouter(CerrarSession);
    

