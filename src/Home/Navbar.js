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
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from '../Reviews/ReviewIndex';
import ReviewAll from '../Reviews/ReviewAll';
import ReviewCreate from '../Reviews/ReviewCreate';
import ReviewMine from '../Reviews/ReviewMine';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
}

return (
    <Navbar color="light" light expand="md">
    <NavbarToggler onClick={toggle}/>
    <Collapse isOpen={isOpen} navbar>
        <Nav className="navlinks" navbar>
            <NavItem>
            <Link to='/' style={{ textDecoration: 'none', color: 'black'}}>Home</Link></NavItem>
            <NavItem><li><Link to='/reviewcreate' style={{ textDecoration: 'none', color: 'black'}}>Create a Review</Link></li></NavItem>
            <NavItem><li><Link to='/reviewall' style={{ textDecoration: 'none', color: 'black'}}>Find all reviews</Link></li></NavItem>
            <NavItem><li><Link to='/reviewmine' style={{ textDecoration: 'none', color: 'black'}}>See all my reviews</Link></li></NavItem>
        </Nav>
        <div className="helpp">
            <Button onClick={props.clickLogout}>Logout</Button>
        </div>
            {/* <Switch>
            <Route exact path='/home'><Home /></Route>
                    <Route exact path='/reviewcreate'><ReviewCreate sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/reviewall'><ReviewAll sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/reviewmine'><ReviewMine sessionToken={props.sessionToken}/></Route>
                </Switch> */}
    </Collapse>
    </Navbar>
)
}

export default Sitebar;
