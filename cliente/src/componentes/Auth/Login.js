import React, { Component, Fragment } from 'react';
import { Mutation } from "react-apollo";
import Error from "../Alert/Error"
import { withRouter } from "react-router-dom";
import { AUTENTICAR_USUARIO} from "../../mutations"

const initialState = {
    usuario: '',
    password: '',
   
}

class Login extends Component {
    state = {
        ...initialState
    }
   
    limpiarState = () => {
        this.setState({...initialState})
    }
    iniciarSesion = (e, autenticarUsuario) => {
        e.preventDefault();
        autenticarUsuario().then(async({data}) => {
            console.log(data);
            localStorage.setItem( 'token', data.autenticarUsuario.token)

            //ejecutar el query una vez que se haya i8niciado session
            await this.props.refetch();
            // //limpiar el estate
            this.limpiarState()

            // //redireccionar
            setTimeout(() => {
                this.props.history.push('/')
            }, 3000);
        })

    }

    actualizarState = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    

    validarForm = () => {
        const { usuario, password} = this.state;
        const noValido = !usuario || !password ;

       
        return noValido;
    }

    render() {

        const { usuario, password} = this.state;
        return (


            <Fragment>
                <h2 className="text-center">Inicio Sesion</h2>

                <div className="row justify-content-center">
                    <Mutation
                        mutation={AUTENTICAR_USUARIO}
                        variables={{ usuario, password }}
                    >
                        {(autenticarUsuario, { loading, error, data }) => {
                           return (
                            <form className="col-md-8"
                            onSubmit= { e => this.iniciarSesion(e, autenticarUsuario)}
                            >
                                {error && <Error error= {error}/>}
                                     <div className="form-group">
                                            <label>Usuarios</label>
                                            <input
                                                onChange={this.actualizarState}
                                                type="text"
                                                name="usuario"
                                                value={usuario}
                                                className="form-control"
                                                placeholder="Nombre Usuario"
                                            ></input>

                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                onChange={this.actualizarState}
                                                type="password"
                                                name="password"
                                                value={password}
                                                className="form-control"
                                                placeholder="Password"
                                            ></input>

                                        </div>
                                        
                                        <button
                                          
                                            disabled={loading || this.validarForm()}
                                            type="submit"
                                            className="btn btn-success float-right"
                                        >Ingresar</button>

                                </form> 

                            

                                  
                        
                      
                           )
                        }}
                    </Mutation>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Login);
