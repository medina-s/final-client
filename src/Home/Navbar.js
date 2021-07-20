import React, {useState} from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import Home from '../Reviews/ReviewIndex';

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  }

  return (
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">Movie Review</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem>
            
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Sitebar;
