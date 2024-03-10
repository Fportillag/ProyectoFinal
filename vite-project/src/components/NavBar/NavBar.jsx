import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  logo  from './img/farmacia.png';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link  } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
import { useContext, useEffect, useState } from 'react';

function NavBar() {
  
  const { totCantidad } = useContext(CartContext);

 

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand>
          <div className='logo'>
          <Link to='/'>
          <img
              src={logo}
              width="60px"
              height="60px"
              className="d-inline-block align-top"
            />
            </Link>
             <h1>Mi Farmacia</h1>
          </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className='menu'>
            <NavLink className="link" to={`/category/cosmeticos`} >Cosméticos</NavLink>
            <NavLink className="link" to={`/category/cuidado_personal`}>Cuidado Personal</NavLink>
            <NavLink className="link" to={`/category/medicamentos`}>Medicamentos</NavLink>
            
          </Nav>
          <div className= {totCantidad > 0 ? 'cart' : 'cart_disable'}>
            <Link to='/viewProduct'>
            <CartWidget/>
            </Link>
            <h6 className='cart_cantidad'>{totCantidad}</h6>
          </div>

        </Navbar.Collapse>
        

      </Container>
    </Navbar>
  );
}

export default NavBar;