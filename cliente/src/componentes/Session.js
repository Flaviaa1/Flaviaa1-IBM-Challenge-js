
import React, { Component } from 'react';
import {Query} from 'react-apollo';
import { USUARIO_ACTUAL } from "../queries";


 const Session = Component => props => {
    return (
        <Query query={USUARIO_ACTUAL}>
           {({loading, data, error, refetch={refetch} }) =>{
               if(loading) return null;
               return < Component {...props} refetch={refetch} session={data}/>
         }}
        </Query>
    )
}

export default Session;
