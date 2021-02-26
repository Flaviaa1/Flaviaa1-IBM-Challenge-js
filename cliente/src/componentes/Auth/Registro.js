import React, { Component, Fragment } from 'react';
import { Mutation } from "react-apollo";
import Error from "../Alert/Error"
import { NUEVO_USUARIO } from "../../mutations"
import { withRouter } from "react-router-dom";

const initialState = {
    usuario: '',
    password: '',
    nombre:'',
    repetirPassword: ''
}

class Registro extends Component {
    state = {
        ...initialState
    }
   
    limpiarState = () => {
        this.setState({...initialState})
    }

    actualizarState = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    crearRegistro = (e, crearUsuario) => {
        e.preventDefault();
        console.log('Crear registro...');

        crearUsuario().then(data => {
            console.log(data);
            this.limpiarState();
            this.props.history.push('/login')
        })
    }

    validarForm = () => {
        const { usuario, nombre, password, repetirPassword} = this.state;
        const noValido = !usuario || !nombre|| !password ||  password !== repetirPassword;

       
        return noValido;
    }

    render() {

        const { usuario, nombre, password, repetirPassword} = this.state;
        return (


            <Fragment>
                <h2 className="text-center">Nuevo Usuario</h2>

                <div className="row justify-content-center">
                    <Mutation
                        mutation={NUEVO_USUARIO}
                        variables={{ usuario, nombre, password }}
                    >
                        {(crearUsuario, { loading, error, data }) => {
                           return (
                            <form className="col-md-8"
                            onSubmit= { e => this.crearRegistro(e, crearUsuario)}
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
                                                placeholder="Usuario"
                                            ></input>
                                            <small className="form-text text-muted">
                                                (Sin espacio y caracteres especiales)
                                            </small>

                                        </div>

                                        <div className="form-group">
                                            <label>Nombre</label>
                                            <input
                                                onChange={this.actualizarState}
                                                type="text"
                                                name="nombre"
                                                value={nombre}
                                                className="form-control"
                                                placeholder="Nombre Completo"
                                            ></input>
                                             <small className="form-text text-muted">
                                                (Agrega el nombre completo)
                                            </small>

                                        </div>

                                       <div className="form-row ">
                                            <div className="form-group col-md-6">
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
                                                <div className="form-group col-md-6">
                                                    <label>Repetir Password</label>
                                                    <input
                                                        onChange={this.actualizarState}
                                                        type="password"
                                                        value={repetirPassword}
                                                        name="repetirPassword"
                                                        className="form-control"
                                                        placeholder="Password"
                                                    ></input>

                                                </div>

                                       </div>
                                       
                                        <button
                                          
                                            disabled={loading || this.validarForm()}
                                            type="submit"
                                            className="btn btn-success float-right"
                                        >Crear Usuario</button>

                                </form> 

                            

                                  
                        
                      
                           )
                        }}
                    </Mutation>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Registro);
