
import React, { Fragment } from 'react';
import IbmTable from './IbmTable'
import { Query} from 'react-apollo';
import { IBMS_QUERY} from '../queries'

const Ibm = () => {
   return(
       <Query query={IBMS_QUERY} pollInterval={1000}>
        {({ loading, error, data, startPolling, stopPolling}) =>{

            if(loading) return 'Cargando...';

            if(error) return `Error: ${error.messsage}`;
            console.log(data);
             
            return (
                <Fragment> 
                    <h2 className="text-center">Listado </h2>
                       
                    <table class="table table-hover mt-5">
                    
                    
                        <thead>
                            <tr>
                            
                            <th scope="col">Concepto</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                            </tr>
                        </thead> 
                         <tbody>
                         {data.getIBMS.map(ibm => (
                           
                           <IbmTable
                             key= {ibm.id}
                             ibm={ibm}
                           />
                                
                            )
)}
                           
                         </tbody> 
                    </table> 
                    
                </Fragment>
             
            )
        } }


    </Query>
   )
       
     
  
        
}



export default Ibm
