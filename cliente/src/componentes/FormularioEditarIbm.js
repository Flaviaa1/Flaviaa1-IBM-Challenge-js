import React, { Component, Fragment } from 'react';
import {ACTUALIZAR_IBM } from '../mutations';
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom'

class FormularioEditarIbm extends Component {
    state = {
        ibm: this.props.ibm
    }
    render() {

        const {monto, concepto, fecha, tipo} = this.state.ibm
        return (
           <Fragment>
                <div className="row justify-content-center mt-5">

                    <Mutation
                      mutation={ACTUALIZAR_IBM }
                      onCompleted= { () => this.props.refetch().then(()=> {
                        this.props.history.push('/')
                      })}
                    >
                       {actualizarIMB => (
                                        <form className="col-md-8 m-3-center"
                                        
                                        onSubmit={ e => {

                                            e.preventDefault();
                                            const {id,monto, concepto, fecha, tipo} = this.state.ibm
                                        

                                            const input = {
                                                id,
                                                monto,
                                                concepto,
                                                fecha,
                                                tipo
                                            
                                        }
                                        console.log(input);

                                        actualizarIMB({
                                            variables: {
                                                input
                                            }
                                        })
                                        }}
                                        >

                                    
                                           <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Descripcion</label>
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Descripcion"
                                                onChange={ e =>{
                                                    this.setState({
                                                        ibm:{
                                                            ...this.state.ibm,
                                                        concepto: e.target.value 
                                                        }
                                                        
                                                    })
                                                }}
                                                ></input>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Monto</label>
                                                <input 
                                                type="Number" 
                                                className="form-control" 
                                                placeholder="Monto"
                                                onChange={ e =>{
                                                    this.setState({
                                                    ibm:{...this.state.ibm,
                                                        monto: e.target.value}
                                                    })
                                                }}
                                                ></input>
                                            </div>
                                        </div>
                                        
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Fecha</label>
                                                <input 
                                                type="date" 
                                                className="form-control" 
                                                placeholder="Empresa"
                                                onChange={ e =>{
                                                    this.setState({
                                                        ibm: {...this.state.ibm,
                                                        fecha: e.target.value}
                                                    })
                                                }}
                                                ></input>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Tipo</label>
                                                <select
                                                    className="form-control"
                                                    
                                                    name="tipo"
                                                    onChange={ e =>{
                                                        this.setState({
                                                            ibm: {...this.state.ibm,
                                                            tipo: e.target.value}
                                                        })
                                                    }}
                                                >
                                               <option value=""> Elegir..</option>
                                               <option value="INGRESO">INGRESO</option>
                                               <option value="EGRESO">EGRESO</option>
                                           </select>
                                            </div>
                                        </div>
                                        
                                

                                    <button type="submit" className="btn btn-success float-right"> 
                                    Agreagar registro</button>
                                    

                                </form> 
                           )}
                    </Mutation>
                </div>
           </Fragment>
        );
    }
}

export default FormularioEditarIbm;
