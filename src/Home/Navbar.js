import React, {useState} from 'react';
import {
Navbar,
Collapse,
NavbarToggler,
Nav,
NavItem,
Button,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
}

return (
    <Navbar light expand="md" className="navbar">
    <NavbarToggler onClick={toggle}/>
    <Collapse isOpen={isOpen} navbar>
        <Nav className="navlinks" navbar>
            <NavItem>
            <Link to='/' style={{ textDecoration: 'none', color: 'red'}}>Home</Link></NavItem>
            <NavItem><li><Link to='/reviewcreate' style={{ textDecoration: 'none', color: 'red'}}>Create a Review</Link></li></NavItem>
            <NavItem><li><Link to='/reviewall' style={{ textDecoration: 'none', color: 'red'}}>Find all reviews</Link></li></NavItem>
            <NavItem><li><Link to='/reviewmine' style={{ textDecoration: 'none', color: 'red'}}>See all my reviews</Link></li></NavItem>
        </Nav>
        <div className="logoutbtn">
            <Button onClick={props.clickLogout} className="logoutbtn">Logout</Button>
        </div>
    </Collapse>
    </Navbar>
)
}

export default Sitebar;