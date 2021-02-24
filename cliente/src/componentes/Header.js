import React from 'react'
import { Link } from 'react-router-dom';

const Header = ()=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-betweend-flex">
           <div className= "container">
           <Link to="/" className="navbar-brand text-light font-weigt-bold" >CRM</Link> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto mtx-right"> 
                <li className="nav-item active">
                <Link to="/ibm/nuevo" className="btn btn-success">
                    Nuevo Cliente
                    </Link>
                    
                </li>
               
            </ul>
            </div>
          </div>

         

       </nav>
        </div>
    )
}


export default Header
