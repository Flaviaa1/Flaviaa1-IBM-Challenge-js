import React, { Component, Fragment } from 'react';
import {IBM_QUERY} from '../queries';
import {Query} from "react-apollo";
import {ACTUALIZAR_IBM} from '../mutations';
import FormularioEditarIbm from "./FormularioEditarIbm";

class EditarIbm extends Component {

    render() {

        const {id} = this.props.match.params;

        return (
           <Fragment>
            <h2 className="text-center">Editar</h2>

            <Query query={IBM_QUERY} variables={{id}}
             refetchQueries={ACTUALIZAR_IBM}
            >

                {({ loading, error, data, refetch}) =>{

                if(loading) return 'Cargando...';

                if(error) return `Error: ${error.messsage}`;
                console.log(data);
                    return (
                        <FormularioEditarIbm
                        ibm= {data.getIBM}
                        refetch={refetch}
                        />
                    )

                }}

            </Query>
           </Fragment>
        );
    }
}

export default EditarIbm;
