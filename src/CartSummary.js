import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

function CartSummary({ cart, removeFromCart, isOpen, toggle }) {
  return (
    <UncontrolledDropdown nav inNavbar isOpen={isOpen} toggle={toggle}>
      {cart.length > 0 ? (
        <DropdownToggle nav caret>
          Sepet <Badge color="secondary">{cart.length}</Badge>
        </DropdownToggle>
      ) : (
        <DropdownToggle nav caret>
          Sepetiniz Boş <Badge color="secondary">{cart.length}</Badge>
        </DropdownToggle>
      )}
      <DropdownMenu right>
        {cart.length > 0 ? (
          <>
            {cart.map((item, index) => (
              <DropdownItem key={index}>
                <Badge color="danger" onClick={() => removeFromCart(item)}>X</Badge> {item.productName} <Badge color="success">{item.quantity} Adet</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>
              <Link to="cart">Sepete Git</Link>
            </DropdownItem>
            
          </>
        ) : (
          <DropdownItem>Sepet Boş</DropdownItem>
        )}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default CartSummary;
