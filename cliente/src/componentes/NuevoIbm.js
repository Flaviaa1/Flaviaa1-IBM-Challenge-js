import React, { Component, Fragment } from 'react';
import {NUEVO_IBM} from '../mutations';
import {Mutation} from 'react-apollo'
import DatePicker from 'react-datepicker';
class NuevoIbm extends Component {

    state = {
        ibm: {
            monto:'',
            concepto:'',
            fecha: '',
            tipo:''
        },
        error:false
    }

    render() {


        const {error} = this.state;
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center">
            Todos los campos son obligatorios
        </p>:'';

        return (
           <Fragment>
               <h2 className="text-center">Nuevo</h2>
                 {respuesta}
                <div className="row justify-content-center mt-5">

                <Mutation 
                       mutation={NUEVO_IBM}
                       onCompleted= { () => this.props.history.push('/')}>

                       {nuevoIBM => (
                                <form className="col-md-8 m-3-center"
                                onSubmit= {e =>{
                                    e.preventDefault();
                                        const { monto, concepto, fecha, tipo}= this.state.ibm;
                                         if (monto ==='' || concepto=== ''|| fecha==='' || tipo===''){

                                            this.setState({
                                                error:true
                                            });
                                            return;

                                            this.setState({
                                                error:true
                                            })
                                         }
                                        
                                        const input = {
                                            monto : Number(monto),
                                            concepto,
                                            fecha,
                                            tipo
                                        
                                    }
                                    console.log(input);

                                    nuevoIBM({
                                        variables: {
                                            input
                                        }
                                    })
                                }}
                                >

                                    
                                        <div className="form-row">

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
                                          
                                        </div>
                                        
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Fecha</label>
                                                <input 
                                                type="date" 
                                                className="form-control" 
                                                name="fecha"
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

export default NuevoIbm;

