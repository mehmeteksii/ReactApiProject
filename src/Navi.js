import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import CartSummary from './CartSummary';
import {Link} from "react-router-dom"

function Navi(props) {
  const { cart, removeFromCart } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const clearCart = () => { 
    // Sepeti temizleme işlevi
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Northwind App</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
        <NavLink>
        <Link to="form1">Form Demo 1</Link>
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
        <Link to="form2">Form Demo 2</Link>
        </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <CartSummary
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          isOpen={isOpen}
          toggle={toggle}
        />
      </Nav>
    </Navbar>
  );
}

export default Navi;
