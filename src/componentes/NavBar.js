import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const NavBar = () => { 
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink to={'/'} activeClassName="active" className="nav-link">Inicio</NavLink></li>
          <li className="nav-item"><NavLink to={'/servicios'} activeClassName="active" className="nav-link">Servicios</NavLink></li>
          <li className="nav-item"><NavLink to={'/envios'} activeClassName="active" className="nav-link">Envios</NavLink></li>
          <li className="nav-item"><NavLink to={'/formas_de_pago'} activeClassName="active" className="nav-link">Formas de Pago</NavLink></li>
        </ul>
        <div className="ml-auto"><Link to={'/cart'}><CartIcon/></Link></div>
      </nav>
        
    )
  }
export default NavBar;
