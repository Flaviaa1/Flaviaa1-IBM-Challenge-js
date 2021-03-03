import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'
import {ELIMINAR_IBM} from "../mutations";
import {Mutation} from "react-apollo"
const IbmTable = ({ibm}) => {
   
    const {id, monto, concepto, fecha, tipo} = ibm;
  

    var timestamp = Number(fecha)

    return (
       
       
            <tr>
           
                <td>{concepto}</td>
                <td>{monto}</td>
                <td>{moment(timestamp).format('L')}</td>
                <td>{tipo}</td>
                <td>
                <Link to={`/ibm/editar/${id} `} className="btn btn-success d-bolck d-md-inline-block">
                                                Editar
                </Link>   
                
                </td> 
                <td>
                <Mutation mutation={ELIMINAR_IBM}>
                                                   {eliminarIMB => (
                                                      
                                                           <button
                                                            className="btn btn-danger d-block d-md-inline-block mr-2"
                                                            type="button"
                                                            onClick={ () => {
                                                                eliminarIMB({
                                                                    variables: {id}
                                                                })
                                                            }}
                                                            >
                                                            Eliminar
                                                            </button> 
                                                   )}
                                                 
                                            </Mutation>
                </td> 
           </tr>
      
    )
}

export default IbmTable
