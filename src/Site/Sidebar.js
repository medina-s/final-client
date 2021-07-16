import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { Button, Nav } from 'reactstrap';
import Home from '../Reviews/ReviewIndex';


const Sidebar = (props) => {
    return(
        <div>
            <Nav>
        {localStorage.getItem('token') !== null ? <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Button onClick={props.clickLogout} id="logoutbtn">Logout</Button></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                </Switch>
            </div>
        </div>: null}
        </Nav>
        </div>
    )
}

export default Sidebar;