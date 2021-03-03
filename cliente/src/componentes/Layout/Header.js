import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import CerrarSession from "./CerrarSession";
import Registro from '../Auth/Registro'


const Header = ({session})=> {


    let barra = (session.obtenerUsuario) ? <NavegacionAtenticado/> : <NavegacioNoAtenticado/>
    return (
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-betweend-flex">
           <div className= "container">
         
            {barra}
         
           </div>
       </nav>

    )
}


export default Header


const NavegacionAtenticado = () => (

    <Fragment>
       <Link to="/" className="navbar-brand text-light font-weigt-bold" >Controlar Gastos</Link> 
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto mtx-right"> 
                    <li className="nav-item active">
                    <Link to="/ibm/nuevo" className="btn btn-success">
                        Nuevo
                        </Link>
                    </li>
                        
    
                    
                <CerrarSession/>
                </ul>
            </div>

          
    </Fragment>
    
);

const NavegacioNoAtenticado = () => (
    <Fragment>
         <h3 to="/" className="navbar-brand text-light font-weigt-bold" >Contralar Gastos</h3>
    <Link to="/registro" className="btn btn-success ml-md-2 mt-2 mt-md-0"> Registrarse</Link>
    </Fragment>
   
)