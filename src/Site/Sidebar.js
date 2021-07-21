import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { Button, Nav } from 'reactstrap';
import Home from '../Reviews/ReviewIndex';
import ReviewAll from '../Reviews/ReviewAll';
import ReviewCreate from '../Reviews/ReviewCreate';
import ReviewMine from '../Reviews/ReviewMine'


const Sidebar = (props) => {
    return(
        <div>
            <Nav>
        {localStorage.getItem('token') !== null ? <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/reviewcreate'>Create a Review</Link></li>
                    <li><Link to='/reviewall'>All reviews/Update/Delete</Link></li>
                    <li><Link to='/reviewmine'>My reviews/Edit/Update</Link> </li>
                    <li><Button onClick={props.clickLogout} id="logoutbtn">Logout</Button></li>
                </ul>
            </div>
        </div>: null}
        <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/reviewcreate'><ReviewCreate sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/reviewall'><ReviewAll /></Route>
                    <Route exact path='/reviewmine'><ReviewMine /></Route>
                </Switch>
            </div>
        </Nav>
        </div>
    )
}

export default Sidebar;